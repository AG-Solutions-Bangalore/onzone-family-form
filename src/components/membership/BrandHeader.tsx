import type { FC } from 'react';

/** ONZONE Logo Lockup: Geometric 'Z' Monogram + Wordmark + Tagline */
export const BrandLogo: FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`flex flex-row items-center gap-2.5 sm:gap-3 lg:flex-col lg:items-start lg:gap-0 select-none ${className}`}
    >
      {/* Geometric 'Z' emblem with signature red accent slash */}
      <svg
        viewBox="0 0 88 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 sm:h-9 w-auto text-[#171513] dark:text-[#f7f3ec] shrink-0"
        aria-label="ONZONE"
        role="img"
      >
        {/* Top horizontal and upper diagonal */}
        <path
          d="M16 10 H72 L42 48 H26 L52 16 H16 V10Z"
          fill="currentColor"
        />
        {/* Bottom horizontal and lower diagonal */}
        <path
          d="M72 70 H16 L46 32 H62 L36 64 H72 V70Z"
          fill="currentColor"
        />
        {/* Center vibrant red accent cut */}
        <path
          d="M44 19 L30 61 H38 L52 19 H44Z"
          fill="#D32F2F"
        />
      </svg>

      {/* Brand Text: to the right of Z on mobile, below Z on desktop */}
      <div className="flex flex-col items-start lg:mt-1.5">
        {/* Wordmark */}
        <span className="font-serif text-[15px] sm:text-[16px] lg:text-[17px] font-bold tracking-[0.24em] text-[#171513] dark:text-[#f7f3ec] leading-tight uppercase">
          ONZONE
        </span>

        {/* Subtitle */}
        <span className="font-sans text-[7.5px] font-medium tracking-[0.32em] text-[#77736d] dark:text-[#a8a094] uppercase leading-none mt-0.5">
          TIMELESS ELEGANCE
        </span>
      </div>
    </div>
  );
};

export const BrandHeader: FC = () => {
  return (
    <header className="flex flex-col items-start w-full">
      {/* Brand Logo Lockup */}
      <BrandLogo />

      {/* Eyebrow: MORE THAN FASHION ───── */}
      <div className="mt-8 lg:mt-10 flex items-center gap-3">
        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.26em] text-[#8b6a3e] dark:text-[#c5a46d] font-semibold">
          MORE THAN FASHION
        </span>
        <span className="h-[1px] w-10 sm:w-16 bg-[#c5a46d]" />
      </div>

      {/* Main Editorial Heading: Let's Get Connected (font-weight: 400, tight line-height, stacked) */}
      <h1
        className="mt-3 font-serif text-[44px] sm:text-[54px] lg:text-[60px] xl:text-[72px] leading-[0.98] tracking-tight text-[#171513] dark:text-[#f7f3ec] font-normal"
        style={{ fontSynthesis: 'none' }}
      >
        <span>Let&apos;s Get</span>
        <br />
        <span className="italic bg-gradient-to-r from-[#8b6a3e] via-[#c5a46d] to-[#735429] bg-clip-text text-transparent">
          Connected
        </span>
      </h1>

      {/* Supporting Copy */}
      <p className="mt-4 max-w-[420px] text-[14px] sm:text-[15px] leading-[1.65] text-[#605b53] dark:text-[#c7bfb3] font-normal">
        Share a few details with us and be the first to know about our latest collections, exclusive
        offers and special updates.
      </p>
    </header>
  );
};
