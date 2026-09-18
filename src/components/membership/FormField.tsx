import type { LucideIcon } from 'lucide-react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  icon: LucideIcon;
  error?: string;
  children?: ReactNode;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ id, label, icon: Icon, placeholder, error, type = 'text', children, className, ...props }, ref) => {
    const errorId = error ? `${id}-error` : undefined;

    return (
      <div className="w-full">
        <div
          className={cn(
            'group relative flex h-[50px] sm:h-[52px] items-center gap-3 rounded-xl border bg-white/70 dark:bg-[#1f2d47]/70 px-3.5 py-1.5 transition-all duration-200 backdrop-blur-sm shadow-xs',
            error
              ? 'border-destructive/80 ring-1 ring-destructive/40'
              : 'border-[#ded8ce] dark:border-white/10 hover:border-[#c5a46d]/60 focus-within:border-[#8b6a3e] focus-within:ring-2 focus-within:ring-[#8b6a3e]/15',
            className,
          )}
        >
          {/* Left: Square Icon Container (compact 34-36px square) */}
          <div className="flex h-8 w-8 sm:h-[34px] sm:w-[34px] shrink-0 items-center justify-center rounded-lg bg-[#f5efe4] dark:bg-[#16233d] text-[#171513] dark:text-[#f7f3ec] transition-transform duration-200 group-hover:scale-105">
            <Icon className="h-4 w-4 stroke-[1.5] opacity-80" aria-hidden="true" />
          </div>

          {/* Right: Label + Input or Custom Trigger (e.g. DatePicker) */}
          <div className="flex flex-1 flex-col justify-center min-w-0 text-left overflow-hidden">
            <label
              htmlFor={id}
              className="text-[11px] sm:text-[12px] font-semibold text-[#161616] dark:text-[#f7f3ec] leading-none mb-0.5 select-none cursor-pointer truncate"
            >
              {label}
            </label>

            {children ? (
              <div>{children}</div>
            ) : (
              <input
                ref={ref}
                id={id}
                type={type}
                placeholder={placeholder}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={errorId}
                className="w-full bg-transparent p-0 text-xs sm:text-[13px] text-[#161616] dark:text-[#f7f3ec] placeholder:text-[#858585] dark:placeholder:text-[#8c857b] focus:outline-none focus:ring-0 border-none leading-none truncate"
                {...props}
              />
            )}
          </div>
        </div>

        {/* Inline Error Message */}
        {error && (
          <p id={errorId} role="alert" className="mt-0.5 pl-3 text-[10px] font-medium text-destructive leading-tight">
            {error}
          </p>
        )}
      </div>
    );
  },
);

FormField.displayName = 'FormField';
