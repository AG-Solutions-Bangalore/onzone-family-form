import type { FC } from 'react';
import { ShieldCheck } from 'lucide-react';

export const PrivacyNote: FC = () => {
  return (
    <div className="flex items-start justify-center gap-2 pt-1.5 text-center select-none">
      <ShieldCheck
        className="mt-[1px] h-[18px] w-[18px] shrink-0 text-[#1d1a15]"
        strokeWidth={1.9}
        aria-hidden="true"
      />
      <p className="max-w-[270px] font-sans text-[10px] leading-[1.45] text-[#2e2a24]">
        Your information is safe with me.
        <br />
        It will be used only for family updates.
      </p>
    </div>
  );
};
