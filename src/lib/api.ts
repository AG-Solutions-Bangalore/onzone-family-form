import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { api, getApiErrorMessage } from '@/lib/axios';
import { queryKeys } from '@/lib/query-client';

export interface Lead {
  id: string | number;
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

export interface LeadFormPayload {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

async function fetchLeads(): Promise<Lead[]> {
  const { data } = await api.get<Lead[]>('/leads');
  return data;
}

async function createLead(payload: LeadFormPayload): Promise<Lead> {
  const { data } = await api.post<Lead>('/leads', payload);
  return data;
}

/** GET /leads — example query. Replace with your real endpoint. */
export function useLeads() {
  return useQuery({
    queryKey: queryKeys.leads,
    queryFn: fetchLeads,
  });
}

/** POST /leads — example mutation with toast + cache invalidation. */
export function useCreateLead() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createLead,
    onSuccess: () => {
      toast.success('Submitted successfully');
      void qc.invalidateQueries({ queryKey: queryKeys.leads });
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error));
    },
  });
}
