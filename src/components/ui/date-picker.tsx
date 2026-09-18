import { useEffect, useId, useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from './calendar';

const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Approx. calendar panel height, used to decide whether it fits below the trigger. */
const PANEL_HEIGHT_ESTIMATE = 420;

function toDate(iso: string): Date | undefined {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!match) return undefined;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** "1990-05-21" -> "21 May 1990" for the trigger button label. */
function formatDisplay(iso: string): string {
  const date = toDate(iso);
  if (!date) return iso;
  return `${date.getDate()} ${MONTHS_SHORT[date.getMonth()]} ${date.getFullYear()}`;
}

export interface DatePickerProps {
  id?: string;
  /** Selected date as YYYY-MM-DD, or "" when empty. */
  value: string;
  onChange: (isoDate: string) => void;
  placeholder?: string;
  ariaLabel?: string;
  disabled?: boolean;
  className?: string;
  triggerClassName?: string;
  label?: string;
  icon?: LucideIcon;
  error?: string;
}

/**
 * shadcn-style date picker: trigger button + dropdown calendar panel.
 * The panel opens downward, but flips upward when there isn't enough
 * room below (e.g. fields near the bottom of a fixed-height layout).
 */
export function DatePicker({
  id,
  value,
  onChange,
  placeholder = 'Pick a date',
  ariaLabel,
  disabled = false,
  className,
  triggerClassName,
  label,
  icon: Icon,
  error,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<'down' | 'up'>('down');
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const generatedId = useId();
  const buttonId = id ?? generatedId;
  const errorId = error ? `${buttonId}-error` : undefined;

  const selected = toDate(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const resolvePlacement = (): 'down' | 'up' => {
    const el = buttonRef.current;
    if (!el || typeof window === 'undefined') return 'down';
    const rect = el.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    if (spaceBelow < PANEL_HEIGHT_ESTIMATE && spaceAbove > spaceBelow) return 'up';
    return 'down';
  };

  const toggle = () => {
    if (!open) setPlacement(resolvePlacement());
    setOpen((o) => !o);
  };

  useEffect(() => {
    if (!open) return;
    const updatePlacement = () => setPlacement(resolvePlacement());
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', updatePlacement);
    document.addEventListener('scroll', updatePlacement, true);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', updatePlacement);
      document.removeEventListener('scroll', updatePlacement, true);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn('relative w-full', className)}>
      {label || Icon ? (
        <button
          ref={buttonRef}
          id={buttonId}
          type="button"
          disabled={disabled}
          aria-label={ariaLabel ?? label}
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={errorId}
          onClick={toggle}
          className={cn(
            'group relative flex h-[50px] sm:h-[52px] w-full items-center gap-3 rounded-xl border bg-white/70 dark:bg-[#1f2d47]/70 px-3.5 py-1.5 text-left transition-all duration-200 backdrop-blur-sm shadow-xs cursor-pointer',
            error
              ? 'border-destructive/80 ring-1 ring-destructive/40'
              : 'border-[#ded8ce] dark:border-white/10 hover:border-[#c5a46d]/60 focus-visible:border-[#8b6a3e] focus-visible:ring-2 focus-visible:ring-[#8b6a3e]/15',
            open && 'border-[#8b6a3e] ring-2 ring-[#8b6a3e]/15',
            triggerClassName,
          )}
        >
          {Icon && (
            <div className="flex h-8 w-8 sm:h-[34px] sm:w-[34px] shrink-0 items-center justify-center rounded-lg bg-[#f5efe4] dark:bg-[#16233d] text-[#171513] dark:text-[#f7f3ec] transition-transform duration-200 group-hover:scale-105">
              <Icon className="h-4 w-4 stroke-[1.5] opacity-80" aria-hidden="true" />
            </div>
          )}
          <div className="flex flex-1 flex-col justify-center min-w-0 text-left overflow-hidden">
            {label && (
              <span className="text-[11px] sm:text-[12px] font-semibold text-[#161616] dark:text-[#f7f3ec] leading-none mb-0.5 select-none truncate">
                {label}
              </span>
            )}
            <span
              className={cn(
                'text-xs sm:text-[13px] leading-none truncate select-none',
                !selected
                  ? 'text-[#858585] dark:text-[#8c857b]'
                  : 'text-[#161616] dark:text-[#f7f3ec]',
              )}
            >
              {selected ? formatDisplay(value) : placeholder}
            </span>
          </div>
        </button>
      ) : (
        <button
          ref={buttonRef}
          id={buttonId}
          type="button"
          disabled={disabled}
          aria-label={ariaLabel}
          aria-expanded={open}
          aria-haspopup="dialog"
          onClick={toggle}
          className={cn(
            'flex w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-xs transition-colors hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-ring disabled:opacity-60',
            !selected && 'text-muted-foreground',
            triggerClassName,
          )}
        >
          <span>{selected ? formatDisplay(value) : placeholder}</span>
          <CalendarDays className="size-4 opacity-60" />
        </button>
      )}

      {/* Inline Error */}
      {error && (
        <p id={errorId} role="alert" className="mt-0.5 pl-3 text-[10px] font-medium text-destructive leading-tight">
          {error}
        </p>
      )}

      {/* Popover Calendar Dropdown */}
      {open && !disabled && (
        <div
          role="dialog"
          aria-label={ariaLabel ?? placeholder}
          className={cn(
            'absolute z-50 rounded-2xl border border-border bg-popover text-popover-foreground shadow-2xl p-2 left-0 right-0 sm:right-auto sm:w-auto max-h-[70vh] overflow-auto',
            placement === 'up' ? 'bottom-full mb-1.5' : 'top-full mt-1.5',
          )}
        >
          <Calendar
            mode="single"
            captionLayout="dropdown"
            reverseYears
            endMonth={today}
            disabled={{ after: today }}
            defaultMonth={selected ?? today}
            selected={selected}
            onSelect={(date) => {
              if (date) onChange(toISODate(date));
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
