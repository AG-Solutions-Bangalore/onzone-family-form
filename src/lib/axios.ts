import axios, { type AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'https://houseofonzone.com/admin/public/api';
const TOKEN_KEY = 'onzone_token';

/**
 * Reusable axios instance for the whole app.
 * Import { api } anywhere instead of creating new instances.
 *
 * Base URL defaults to the Onzone CRM and can be overridden
 * with `VITE_API_URL` in `.env`:
 *   VITE_API_URL=https://houseofonzone.com/crm
 */
export const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15_000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

function getStoredToken(): string | null {
  if (typeof localStorage === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function setAuthToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearAuthToken() {
  localStorage.removeItem(TOKEN_KEY);
}

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getStoredToken();
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Auto-logout on 401 so every query/mutation behaves the same.
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      clearAuthToken();
    }
    return Promise.reject(error);
  },
);

interface ApiErrorBody {
  message?: string;
  error?: string;
}

/** Extract a human-readable message from any axios / unknown error. */
export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError<ApiErrorBody>(error)) {
    const data = error.response?.data;
    if (typeof data?.message === 'string' && data.message) return data.message;
    if (typeof data?.error === 'string' && data.error) return data.error;
    if (error.response) return `Request failed (${error.response.status})`;
    if (error.code === 'ECONNABORTED') return 'Request timed out. Please try again.';
    return error.message || 'Network error. Please try again.';
  }
  if (error instanceof Error) return error.message;
  return 'Something went wrong. Please try again.';
}
