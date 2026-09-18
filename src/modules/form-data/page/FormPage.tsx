import type { FC } from 'react';
import { Users, Heart, CalendarDays, Smile } from 'lucide-react';
import { DetailsForm } from '@/components/membership/DetailsForm';

const HIGHLIGHTS = [
  { icon: Users, label: 'Stay', sub: 'Connected' },
  { icon: Heart, label: 'Never Miss', sub: 'Special Days' },
  { icon: CalendarDays, label: 'Share Our', sub: 'Journey' },
  { icon: Smile, label: 'Together', sub: 'Always' },
] as const;

export const FormPage: FC = () => {
  return (
    <div className="relative min-h-screen min-h-dvh w-full overflow-x-hidden bg-[#24150b] text-[#171310] lg:h-screen lg:h-dvh lg:overflow-hidden">
      {/* ============================================================ */}
      {/* FULL-BLEED BACKGROUND — boutique-bg.png                      */}
      {/* ============================================================ */}
      <div className="fixed inset-0 z-0">
        <img
          src="/boutique-bg.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        {/* Soft, gentle warm ambient veil on the left to maximize contrast while preserving cafe background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#fdf6e9]/75 via-[#fdf6e9]/30 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#201007]/25 via-transparent to-transparent" />
      </div>

      {/* ============================================================ */}
      {/* CONTENT — responsive scrolling on mobile, 100vh on desktop   */}
      {/* ============================================================ */}
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-8xl flex-col justify-between px-4 py-4 sm:px-8 lg:h-full lg:min-h-0 lg:px-12 lg:py-4 xl:px-16 xl:py-5">
        <main className="flex w-full flex-1 flex-col items-center justify-between gap-8 py-2 lg:min-h-0 lg:flex-row lg:gap-6 lg:py-0 xl:gap-8">
          {/* ================= LEFT — EDITORIAL ================= */}
          <section
            aria-label="Introduction"
            className="animate-fade-in-left flex h-full w-full max-w-[540px] flex-col justify-between py-1 lg:w-[420px] xl:w-[460px]"
          >
            <div>
              {/* Family Always Together — relative on mobile, absolute on desktop */}
              <div className="pointer-events-none hidden select-none relative pt-1 sm:ml-4 lg:absolute lg:left-10 lg:top-14 lg:ml-48 lg:block">
                <p className="font-handwriting text-[28px] lg:text-[32px] xl:text-[36px] font-bold leading-[0.9] text-[#543216] -rotate-[7deg]">
                  Family
                  <br />
                  Always
                  <br />
                  Together <span className="text-[22px]">♡</span>
                </p>
              </div>

              {/* Heading: clean top margin on mobile, mt-36 on desktop */}
              <h1 className="mt-3 sm:mt-6 lg:mt-36 font-serif leading-[0.95] tracking-tight">
                <span className="block text-[48px] sm:text-[62px] xl:text-[68px] font-bold text-[#111111]">
                  Hi,
                </span>
                <span className="mt-0.5 block text-[38px] sm:text-[48px] xl:text-[52px] font-bold text-[#111111]">
                  This is
                </span>
                <span className="relative mt-0.5 inline-block text-[50px] sm:text-[64px] xl:text-[72px] font-bold text-[#8a5225]">
                  Nayansh
                  <svg
                    viewBox="0 0 300 14"
                    aria-hidden="true"
                    className="absolute -bottom-2.5 left-0 w-full"
                  >
                    <path
                      d="M4 11 C 90 7, 210 7, 296 9"
                      fill="none"
                      stroke="#8a5225"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <div className="mt-2.5 xl:mt-3.5">
                <p className="font-serif text-[24px] sm:text-[30px] xl:text-[34px] leading-[1.1] text-[#111111]">
                  I am updating
                  <br />
                  my <em className="italic font-semibold text-[#8a5225]">family diary.</em>
                </p>

                <p className="mt-1.5 font-sans text-[13.5px] sm:text-[15px] xl:text-[16px] leading-[1.5] text-[#2b2620]">
                  Please spend one minute of your time to{' '}
                  <span className="whitespace-nowrap">
                    fill this form. <span className="text-[18px] text-[#8a5225]">♡</span>
                  </span>
                </p>
              </div>
            </div>

            {/* 4 highlights — neatly aligned across 4 cols */}
            <div className="mt-3 grid w-full grid-cols-4 gap-1.5 sm:gap-2.5 -ml-0 lg:-ml-8 xl:mt-3">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label + item.sub} className="flex flex-col items-center text-center">
                    <div className="flex h-[44px] w-[44px] sm:h-[50px] sm:w-[50px] xl:h-[56px] xl:w-[56px] items-center justify-center rounded-full border border-[#c9a86a]/70 bg-[#fffdf6]/85 shadow-sm transition-transform hover:scale-105">
                      <Icon className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] xl:h-[22px] xl:w-[22px] text-[#1d1a15]" strokeWidth={1.8} />
                    </div>
                    <p className="mt-1 font-sans text-[9.5px] sm:text-[10px] xl:text-[11px] font-medium leading-[1.25] text-[#2b2620]">
                      {item.label}
                      <br />
                      {item.sub}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Thank you signature */}
            <div className="mt-4 w-fit select-none lg:mt-2 xl:mt-3">
              <p className="font-script text-[50px] sm:text-[64px] xl:text-[72px] leading-[1.05] text-[#6b4423] -rotate-[3deg]">
                Thank You <span className="align-top text-[28px] sm:text-[30px]">♡</span>
              </p>
              <p className="mt-1.5 text-center font-sans text-[9.5px] sm:text-[10px] xl:text-[11px] font-medium tracking-[0.32em] text-[#6b6259] uppercase">
                For being a part
                <br />
                of my life
              </p>
              <div className="mx-auto mt-2 h-px w-[70px] bg-[#a98552]" />
            </div>
          </section>

          {/* ================= MIDDLE — POLAROID ================= */}
          <section aria-label="Nayansh photo" className="my-6 flex shrink-0 items-center justify-center lg:my-0 lg:px-2">
            <div
              className="animate-fade-in relative lg:-mt-2"
              style={{ animationDelay: '120ms', animationFillMode: 'both' }}
            >
              {/* Good Food note — desktop positioned over polaroid */}
              <div className="pointer-events-none absolute -top-12 -left-36 xl:-left-44 z-20 hidden select-none lg:block">
                <p className="font-handwriting text-[23px] lg:text-[26px] xl:text-[29px] font-bold leading-[0.9] text-[#543216] rotate-[4deg] text-center">
                  Good
                  <br />
                  Food
                  <br />
                  Good People
                  <br />
                  Great Memories <span className="text-[20px]">♡</span>
                </p>
              </div>

              {/* Polaroid Card */}
              <div className="relative w-[250px] sm:w-[275px] xl:w-[305px] rotate-[5deg] rounded-[8px] bg-[#fffef9] p-[11px] pb-[14px] shadow-[0_25px_60px_-10px_rgba(40,18,6,0.55)]">
                {/* Masking tape */}
                <div className="absolute -top-[14px] left-1/2 z-20 h-[30px] w-[110px] -translate-x-1/2 -rotate-[2deg] bg-[#d9bd92]/95 shadow-[0_2px_6px_rgba(0,0,0,0.2)] [clip-path:polygon(2%_0,98%_4%,100%_96%,0_100%)]" />

                {/* Photo with clean dark studio backdrop + warm grade so he looks nice */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3px] bg-[#1c1c1c]">
                  <img
                    src="/man-polaroid.jpeg"
                    alt="Nayansh smiling"
                    className="h-full w-full scale-125 object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2a1408]/45 via-transparent to-transparent" />
                </div>

                <p className="flex items-center justify-center gap-2 pt-2.5 pb-0.5 font-handwriting text-[30px] xl:text-[34px] font-bold text-[#2b2219]">
                  Nayansh <span className="text-[22px]">♡</span>
                </p>
              </div>

              {/* Handwritten note beside polaroid with curved arrow */}
              <div className="pointer-events-none absolute -right-[95px] top-[34%] hidden select-none xl:block">
                <p className="rotate-[7deg] text-center font-handwriting text-[23px] font-semibold leading-[1.18] text-[#fff6e6] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                  Same
                  <br />
                  Person
                  <br />
                  Same
                  <br />
                  Love
                  <br />
                  <span className="text-[20px]">♡</span>
                </p>
                <svg
                  viewBox="0 0 50 30"
                  className="mt-1 h-[22px] w-[46px] text-[#fff6e6] drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] ml-2"
                  fill="none"
                >
                  <path
                    d="M10 4 C 22 12, 32 20, 42 24 M42 24 l-7 -1 M42 24 l-1 -7"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </section>

          {/* ================= RIGHT — FORM CARD ================= */}
          <section
            aria-label="Family details form"
            className="animate-fade-in flex w-full shrink-0 justify-center pb-8 lg:w-auto lg:pb-0 lg:justify-end lg:-mt-6 lg:-mr-1 xl:-mt-8"
            style={{ animationDelay: '240ms', animationFillMode: 'both' }}
          >
            <DetailsForm />
          </section>
        </main>

        {/* Minimal baseline note on small viewports */}
        <footer className="py-1 text-center lg:hidden">
          <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#6b6259]">
            Family Always Together ♡
          </p>
        </footer>
      </div>
    </div>
  );
};

export default FormPage;
