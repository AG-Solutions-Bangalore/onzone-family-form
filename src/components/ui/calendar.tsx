import type { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';
import { cn } from '@/lib/utils';

export type CalendarProps = ComponentProps<typeof DayPicker>;

const navButtonClass =
  'inline-flex size-7 items-center justify-center rounded-md border border-border bg-transparent p-0 text-muted-foreground opacity-60 transition hover:bg-muted hover:text-foreground hover:opacity-100 disabled:pointer-events-none disabled:opacity-40';

/**
 * shadcn-style calendar built on react-day-picker.
 * Uses the app theme primitives (bg-popover, text-primary, …) so it
 * follows light/dark mode automatically.
 */
export function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        root: 'w-fit',
        months: 'relative flex flex-col gap-4',
        month: 'flex w-full flex-col gap-4',
        nav: 'absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1',
        button_previous: navButtonClass,
        button_next: navButtonClass,
        month_caption: 'flex h-7 w-full items-center justify-center px-8',
        caption_label:
          'pointer-events-none inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium select-none [&>svg]:size-3.5 [&>svg]:text-muted-foreground',
        dropdowns: 'flex h-7 w-full items-center justify-center gap-1.5',
        dropdown_root:
          'relative inline-flex h-7 shrink-0 items-center rounded-md border border-input bg-background pe-1.5 ps-2 text-sm font-medium shadow-xs transition-colors has-focus-visible:border-ring has-disabled:opacity-50 [&>svg]:size-3.5 [&>svg]:text-muted-foreground',
        dropdown: 'absolute inset-0 h-full w-full cursor-pointer opacity-0',
        months_dropdown: '',
        years_dropdown: '',
        month_grid: 'mt-4 w-full border-collapse',
        weekdays: 'flex',
        weekday: 'w-8 flex-1 select-none rounded-md text-[0.8rem] font-normal text-muted-foreground',
        weeks: '',
        week: 'mt-2 flex w-full',
        day: 'relative size-8 p-0 text-center align-text-top select-none outline-none',
        day_button:
          'inline-flex size-8 items-center justify-center rounded-md p-0 text-sm font-normal text-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50',
        selected:
          'is-selected rounded-md bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground',
        today:
          'is-today rounded-md [&:not(.is-selected)]:bg-accent [&:not(.is-selected)>button]:text-accent-foreground',
        outside: 'text-muted-foreground opacity-60 [&>button]:text-muted-foreground',
        disabled: 'text-muted-foreground opacity-50',
        hidden: 'invisible',
        footer: 'pt-3 text-sm text-muted-foreground',
        chevron: 'size-4 shrink-0',
        ...classNames,
      }}
      {...props}
    />
  );
}
