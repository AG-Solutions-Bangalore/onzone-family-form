import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { User, Phone, Mail, CalendarDays, Gift, ArrowRight } from 'lucide-react';
import type { FC } from 'react';
import { useState } from 'react';
import { FormField } from './FormField';
import { PrivacyNote } from './PrivacyNote';
import { DatePicker } from '@/components/ui/date-picker';
import { useCreateFormData } from '@/modules/form-data/hooks/use-create-form-data';
import { FORM_DATA_DEFAULTS, type FormDataFormValues } from '@/modules/form-data/types/form-data.types';

function validateIndianMobile(value: string): string | true {
  const clean = value.replace(/\D/g, '');
  if (!clean || clean.length < 10 || clean.length > 12) {
    return 'Enter valid 10-12 digit mobile number';
  }
  return true;
}

export const DetailsForm: FC = () => {
  const [formKey, setFormKey] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<FormDataFormValues>({ mode: 'onTouched', defaultValues: FORM_DATA_DEFAULTS });

  const createFormData = useCreateFormData();
  const isSubmitDisabled = !isDirty || !isValid || createFormData.isPending;

  const onSubmit: SubmitHandler<FormDataFormValues> = (values) => {
    createFormData.mutate(
      {
        full_name: values.full_name,
        mobile_no: values.mobile_no,
        email_id: values.email_id.trim() || undefined,
        dob: values.dob.trim() || undefined,
        doa: values.doa.trim() || undefined,
      },
      {
        onSuccess: () => {
          reset();
          setFormKey((k) => k + 1);
        },
      },
    );
  };

  return (
    <div className="w-full max-w-[420px] rounded-[28px] border border-white/80 bg-[#fffdf6]/85 p-[7px] shadow-[0_25px_65px_-15px_rgba(58,28,8,0.45)] backdrop-blur-xl sm:max-w-[430px] lg:w-[400px] lg:shrink-0 xl:w-[435px]">
      <div className="flex flex-col rounded-[22px] border border-[#f0e3cd]/90 bg-[#fffaf0] px-5 py-4 shadow-inner sm:px-6 sm:py-5 xl:px-7 xl:py-6">
        <div className="select-none text-center">

          <h2 className="mt-2 font-serif text-[30px] font-bold leading-[1.05] tracking-tight text-[#141210] sm:text-[33px] xl:text-[36px]">
            Share Your Details
          </h2>
          <p className="mt-1 font-serif text-[14px] text-[#2e2a24] sm:text-[15px]">
            Help me keep my family diary updated.
          </p>
          <div className="mx-auto mt-2 h-px w-[68px] bg-[#8b6a3e]/80" />
        </div>

        <form key={formKey} onSubmit={(e) => void handleSubmit(onSubmit)(e)} noValidate className="mt-3.5 space-y-2.5">
          <FormField
            id="field-full-name"
            label="Full Name"
            icon={User}
            placeholder="Enter your full name"
            autoComplete="name"
            error={errors.full_name?.message}
            {...register('full_name', {
              required: 'Full name is required',
              minLength: { value: 2, message: 'Must be at least 2 characters' },
            })}
          />

          <FormField
            id="field-mobile-no"
            label="Mobile Number"
            icon={Phone}
            type="tel"
            placeholder="+91 98765 43210"
            autoComplete="tel"
            error={errors.mobile_no?.message}
            {...register('mobile_no', {
              required: 'Mobile number is required',
              validate: validateIndianMobile,
            })}
          />

          <FormField
            id="field-email-id"
            label="Email Address"
            icon={Mail}
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            error={errors.email_id?.message}
            {...register('email_id', {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            })}
          />

          <Controller
            name="dob"
            control={control}
            render={({ field }) => (
              <DatePicker
                id="field-dob"
                label="Date of Birth"
                icon={CalendarDays}
                placeholder="Select your date of birth"
                value={field.value}
                onChange={field.onChange}
                ariaLabel="Date of birth"
                error={errors.dob?.message}
              />
            )}
          />

          <Controller
            name="doa"
            control={control}
            render={({ field }) => (
              <DatePicker
                id="field-doa"
                label="Date of Anniversary"
                icon={Gift}
                placeholder="Select your anniversary date"
                value={field.value}
                onChange={field.onChange}
                ariaLabel="Date of anniversary"
                error={errors.doa?.message}
              />
            )}
          />

          <div className="pt-1">
            <button
              type="submit"
              disabled={isSubmitDisabled}
              className="group btn-shine flex h-[50px] xl:h-[52px] w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#442211] via-[#542a15] to-[#36170a] text-[#fff6e8] shadow-[0_14px_30px_-10px_rgba(54,23,10,0.7)] transition-all duration-300 hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="font-serif text-[18px] xl:text-[19px] font-medium tracking-wide">
                {createFormData.isPending ? 'Submitting…' : 'Submit Details'}
              </span>
              {!createFormData.isPending && (
                <ArrowRight
                  className="h-5 w-5 stroke-[1.8] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>

          <PrivacyNote />
        </form>
      </div>
    </div>
  );
};
