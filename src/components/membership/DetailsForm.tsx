import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { User, Phone, Mail, CalendarDays, Gift, ArrowRight } from 'lucide-react';
import type { FC } from 'react';
import { useState } from 'react';
import { FormField } from './FormField';
import { PrivacyNote } from './PrivacyNote';
import { DatePicker } from '@/components/ui/date-picker';
import { useCreateFormData } from '@/modules/form-data/hooks/use-create-form-data';
import { FORM_DATA_DEFAULTS, type FormDataFormValues } from '@/modules/form-data/types/form-data.types';

/** Mobile validation: allows only 10 to 12 digits (supports +91 format). */
function validateIndianMobile(value: string): string | true {
  const clean = value.replace(/\D/g, '');
  if (!clean || clean.length < 10 || clean.length > 12) {
    return 'Enter valid 10-12 digit mobile number';
  }
  return true;
}

export const DetailsForm: FC = () => {
  // Bumped after every successful submit so the whole form remounts.
  // Fresh mount always re-attaches input refs, which re-registers every
  // field (with its rules) into React Hook Form — this keeps submit-time
  // validation working no matter how renders get memoized.
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
    <div className="relative w-full max-w-[390px] sm:max-w-[420px] lg:max-w-[390px] xl:max-w-[420px] rounded-[28px] sm:rounded-[32px] bg-white/40 dark:bg-white/10 p-2 sm:p-2.5 backdrop-blur-xl border border-white/70 dark:border-white/15 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)]">
      {/* Inner Frosted Cream Card */}
      <div className="relative rounded-[22px] sm:rounded-[26px] bg-[#fcfaf6]/94 dark:bg-[#16233d]/94 p-5 sm:p-6 lg:p-6 border border-[#ede6dc]/90 dark:border-white/10 shadow-inner flex flex-col">
        {/* Form Title */}
        <h2 className="font-serif text-[26px] sm:text-[30px] font-normal leading-tight tracking-tight text-[#171513] dark:text-[#f7f3ec]">
          Your Details
        </h2>

        {/* Subtitle */}
        <p className="mt-0.5 text-[11px] sm:text-[12px] text-[#736d63] dark:text-[#a8a094] font-normal leading-tight">
          Please provide the following information to stay in touch.
        </p>

        {/* Form Interactive Fields */}
        <form
          key={formKey}
          onSubmit={(e) => void handleSubmit(onSubmit)(e)}
          noValidate
          className="mt-3.5 sm:mt-4 space-y-2 sm:space-y-5"
        >
          {/* 1. Full Name */}
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

          {/* 2. Mobile Number */}
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

          {/* 3. Email Address */}
          <FormField
            id="field-email-id"
            label="Email Address"
            icon={Mail}
            type="email"
            placeholder="you@exemple.com"
            autoComplete="email"
            error={errors.email_id?.message}
            {...register('email_id', {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            })}
          />

          {/* 4. Date of Birth */}
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

          {/* 5. Date of Anniversary */}
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

          {/* Continue Button */}
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="group btn-shine mt-3.5 sm:mt-4 flex h-[44px] sm:h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#181615] hover:bg-[#2a2622] text-[#f7f3ec] shadow-md transition-all duration-300 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
          >
            <span className="font-serif text-[15px] sm:text-[16px] font-normal italic tracking-wide">
              {createFormData.isPending ? 'Submitting…' : 'Continue'}
            </span>
            {!createFormData.isPending && (
              <ArrowRight
                className="h-4 w-4 stroke-[1.6] transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            )}
          </button>

          {/* Privacy Footnote */}
          <PrivacyNote />
        </form>
      </div>
    </div>
  );
};
