import { api } from '@/lib/axios';
import type { CreateFormDataPayload, FormDataRecord, FormType } from '../types/form-data.types';

/** Endpoint path — base URL comes from `VITE_API_URL` (see .env.example). */
export const CREATE_FORM_DATA_PATH = '/create-form-data';

/**
 * Which form this build submits as. Set `VITE_FORM_TYPE=family` in `.env`
 * for the family form — anything else (or unset) submits as "client".
 */
export const FORM_TYPE: FormType = 'family';

/**
 * POST create-form-data.
 * Empty optional strings are omitted so the backend receives only filled fields.
 *
 * Hard-guards the required fields here too, so an empty name/mobile can never
 * reach the backend even if a UI validation path is ever bypassed.
 */
export async function createFormData(payload: CreateFormDataPayload): Promise<FormDataRecord> {
  const fullName = payload.full_name.trim();
  const mobileNo = payload.mobile_no.trim();
  const mobileDigits = mobileNo.replace(/\D/g, '');
  if (!fullName) throw new Error('Full name is required');
  if (mobileDigits.length < 10 || mobileDigits.length > 12) {
    throw new Error('Enter valid 10-12 digit mobile number');
  }
  const body: CreateFormDataPayload = {
    full_name: fullName,
    mobile_no: mobileNo,
    form_type: FORM_TYPE,
  };
  const email = payload.email_id?.trim();
  const dob = payload.dob?.trim();
  const doa = payload.doa?.trim();
  if (email) body.email_id = email;
  if (dob) body.dob = dob;
  if (doa) body.doa = doa;

  const { data } = await api.post<FormDataRecord>(CREATE_FORM_DATA_PATH, body);
  return data;
}
