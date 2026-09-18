import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getApiErrorMessage } from '@/lib/axios';
import { createFormData } from '../api/form-data.api';

export const formDataKeys = {
  all: ['form-data'] as const,
};

/** Mutation hook for `POST create-form-data` with success/error toasts. */
export function useCreateFormData() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createFormData,
    onSuccess: () => {
      toast.success('Details submitted successfully');
      void qc.invalidateQueries({ queryKey: formDataKeys.all });
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error));
    },
  });
}
