import { useForm, type SubmitHandler } from 'react-hook-form';
import { useCreateLead } from '@/lib/api';

export interface LeadFormValues {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

const inputClass =
  'w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring';
const labelClass = 'mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground';
const errorClass = 'mt-1 text-xs text-destructive';

/** Example react-hook-form + react-query mutation form. */
export function LeadForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });

  const createLead = useCreateLead();

  const onSubmit: SubmitHandler<LeadFormValues> = (values) => {
    createLead.mutate(values, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form
      onSubmit={(e) => void handleSubmit(onSubmit)(e)}
      className="w-full max-w-md rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm"
    >
      <p className="eyebrow">Get in touch</p>
      <h2 className="mt-2 text-xl">Request a callback</h2>

      <div className="mt-4 space-y-4">
        <div>
          <label htmlFor="lead-name" className={labelClass}>
            Name
          </label>
          <input
            id="lead-name"
            className={inputClass}
            placeholder="Aarav Sharma"
            {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Too short' } })}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="lead-email" className={labelClass}>
            Email
          </label>
          <input
            id="lead-email"
            type="email"
            className={inputClass}
            placeholder="you@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
            })}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="lead-phone" className={labelClass}>
            Phone (optional)
          </label>
          <input id="lead-phone" type="tel" className={inputClass} placeholder="+91 ..." {...register('phone')} />
        </div>

        <div>
          <label htmlFor="lead-message" className={labelClass}>
            Message (optional)
          </label>
          <textarea
            id="lead-message"
            rows={4}
            className={inputClass}
            placeholder="How can we help?"
            {...register('message', { maxLength: { value: 500, message: 'Max 500 characters' } })}
          />
          {errors.message && <p className={errorClass}>{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={createLead.isPending}
          className="w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
        >
          {createLead.isPending ? 'Submitting…' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
