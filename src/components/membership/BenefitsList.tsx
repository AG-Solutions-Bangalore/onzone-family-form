import type { FC } from 'react';
import { Diamond, Tag, Heart } from 'lucide-react';

const BENEFITS = [
  {
    icon: Diamond,
    title: 'Exclusive Collections',
    description: 'Be the first to know',
  },
  {
    icon: Tag,
    title: 'Special Offers',
    description: 'Only for our community',
  },
  {
    icon: Heart,
    title: 'A More Personalized Experience',
    description: 'Tailored just for you',
  },
] as const;

export const BenefitsList: FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 3 Vertically Stacked Benefit Items */}
      <div className="space-y-4 sm:space-y-5">
        {BENEFITS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group flex items-center gap-4 transition-transform duration-300 hover:translate-x-1"
            >
              {/* Thin gold bordered circular container */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c5a46d]/70 bg-[#faf7f1]/70 dark:bg-[#1a2946]/50 text-[#171513] dark:text-[#c5a46d] shadow-xs group-hover:border-[#8b6a3e] group-hover:scale-105 transition-all">
                <Icon className="h-5 w-5 stroke-[1.4]" />
              </div>

              {/* Text */}
              <div className="flex flex-col text-left">
                <h3 className="font-sans text-[14px] sm:text-[15px] font-semibold text-[#171513] dark:text-[#f7f3ec] leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-[12px] sm:text-[13px] text-[#77736d] dark:text-[#a8a094] leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Signature: Style Belongs to You (only visible on desktop / laptop) */}
      <div className="hidden lg:block mt-8 sm:mt-10 lg:mt-12 select-none">
        <p className="font-['Great_Vibes'] text-[34px] sm:text-[42px] leading-tight text-[#a98552] -rotate-6 transform origin-bottom-left transition-transform hover:scale-105 duration-300">
          Style Belongs to You
        </p>
      </div>
    </div>
  );
};
