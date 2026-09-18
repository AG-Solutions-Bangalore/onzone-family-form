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
            'group relative flex h-[50px] sm:h-[52px] items-center gap-2.5 sm:gap-3 rounded-[12px] border bg-white/95 px-3 py-1.5 transition-all duration-200 shadow-[0_2px_8px_rgba(100,70,40,0.04)]',
            error
              ? 'border-destructive/80 ring-1 ring-destructive/40'
              : 'border-[#e8dcc8] hover:border-[#c49a60] focus-within:border-[#8b5a2b] focus-within:ring-2 focus-within:ring-[#8b5a2b]/15',
            className,
          )}
        >
          {/* Left icon tile */}
          <div className="flex h-[34px] w-[34px] sm:h-[36px] sm:w-[36px] shrink-0 items-center justify-center rounded-[8px] bg-[#f4ebe0] text-[#221b14] transition-transform duration-200 group-hover:scale-105">
            <Icon className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]" strokeWidth={1.9} aria-hidden="true" />
          </div>

          {/* Label + input */}
          <div className="flex flex-1 flex-col justify-center min-w-0 text-left overflow-hidden">
            <label
              htmlFor={id}
              className="text-[11px] font-semibold text-[#181613] leading-none mb-[2px] select-none cursor-pointer truncate"
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
                className="w-full bg-transparent p-0 text-[12.5px] sm:text-[13px] text-[#181613] placeholder:text-[#9c9389] focus:outline-none focus:ring-0 border-none leading-tight truncate"
                {...props}
              />
            )}
          </div>
        </div>

        {error && (
          <p id={errorId} role="alert" className="mt-1 pl-3 text-[11px] font-medium text-destructive leading-tight">
            {error}
          </p>
        )}
      </div>
    );
  },
);

FormField.displayName = 'FormField';
