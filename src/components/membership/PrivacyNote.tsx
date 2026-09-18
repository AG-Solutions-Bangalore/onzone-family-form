import type { FC } from 'react';
import { ShieldCheck } from 'lucide-react';

export const PrivacyNote: FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-3 text-left select-none">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f5efe4] dark:bg-[#1a2946] text-[#77736d] dark:text-[#c5a46d] shrink-0">
        <ShieldCheck className="h-3.5 w-3.5 stroke-[1.8]" aria-hidden="true" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] sm:text-[11px] font-semibold text-[#161616] dark:text-[#f7f3ec]">
          We value your privacy
        </span>
        <span className="text-[9px] sm:text-[10px] text-[#77736d] dark:text-[#a8a094]">
          Your information is safe with us.
        </span>
      </div>
    </div>
  );
};
