import type { FC } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';

export const SignInButton: FC = () => {
  return (
    <div className="flex items-center justify-end gap-3 sm:gap-4 select-none">
      <button
        type="button"
        className="rounded-full border border-[#171513]/40 dark:border-[#f7f3ec]/40 dark:bg-[#16233d] px-5 py-1.5 text-xs font-semibold tracking-[0.15em] dark:text-[#f7f3ec] uppercase transition-all duration-300 bg-[#171513] text-[#f7f3ec] dark:hover:bg-[#f7f3ec] dark:hover:text-[#171513] hover:border-transparent hover:shadow-sm active:scale-95 cursor-pointer"
      >
        SIGN IN
      </button>
      <div className="pl-1">
        <ThemeToggle />
      </div>
    </div>
  );
};
