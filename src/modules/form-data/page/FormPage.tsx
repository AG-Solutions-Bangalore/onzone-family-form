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
    <div className="relative min-h-dvh w-full overflow-x-clip bg-[#2b1a10] text-[#171310]">
      {/* FULL-BLEED BACKGROUND — fixed so it covers the page while scrolling on mobile */}
      <div className="fixed inset-0 z-0">
        <img
          src="/boutique-bg.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdf6e9]/95 via-[#fdf6e9]/78 to-[#fdf6e9]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3a1c0d]/18 via-transparent to-[#fdf6e9]/30" />
      </div>

      {/* CONTENT — one viewport on desktop, big type, no middle gap */}
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1500px] flex-col px-5 sm:px-6 lg:justify-center lg:px-8 xl:px-10">
        {/* Top handwritten notes — aligned over their columns so no empty void sits between them */}
        <div className="pointer-events-none hidden select-none pt-4 md:flex items-start">
          <div className="flex justify-center lg:w-[440px] lg:shrink-0 xl:w-[480px]">
            <p className="mt-6 font-script text-[26px] leading-[1.05] text-[#6b4423] -rotate-[7deg] xl:text-[30px]">
              Family
              <br />
              Always
              <br />
              Together <span className="text-[20px]">♡</span>
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <p className="font-script text-[22px] leading-[1.1] text-[#6b4423] rotate-[4deg] text-center xl:text-[26px]">
              Good
              <br />
              Food
              <br />
              Good People
              <br />
              Great Memories <span>♡</span>
            </p>
          </div>
          <div className="hidden lg:block lg:w-[400px] lg:shrink-0 xl:w-[435px]" />
        </div>

        <main className="flex w-full flex-1 flex-col items-center gap-6 py-4 lg:min-h-0 lg:flex-none lg:flex-row lg:items-center lg:gap-0 lg:py-2">
          {/* LEFT — wide so it eats the empty space, big old type */}
          <section
            aria-label="Introduction"
            className="animate-fade-in-left w-full max-w-[560px] lg:w-[440px] lg:shrink-0 xl:w-[480px]"
          >
            <h1 className="font-serif leading-[0.95] tracking-tight">
              <span className="block text-[52px] font-bold text-[#111111] sm:text-[64px] lg:text-[58px] xl:text-[66px]">
                Hi,
              </span>
              <span className="mt-1 block text-[42px] font-bold text-[#111111] sm:text-[52px] lg:text-[46px] xl:text-[52px]">
                This is
              </span>
              <span className="relative mt-1 inline-block text-[54px] font-bold text-[#8a5a2b] sm:text-[68px] lg:text-[60px] xl:text-[70px]">
                Nayansh
                <svg viewBox="0 0 300 14" aria-hidden="true" className="absolute -bottom-3 left-0 w-full">
                  <path
                    d="M4 11 C 90 7, 210 7, 296 9"
                    fill="none"
                    stroke="#8a5a2b"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-4 font-serif text-[28px] leading-[1.1] text-[#111111] sm:text-[34px] lg:text-[30px] xl:text-[34px]">
              I am updating
              <br />
              my <em className="italic font-semibold text-[#8a5a2b]">family diary.</em>
            </p>

            <p className="mt-2 max-w-[440px] font-sans text-[15px] leading-[1.55] text-[#2b2620] sm:text-[16px]">
              Please spend one minute of your time to{' '}
              <span className="whitespace-nowrap">
                fill this form. <span className="text-[18px] text-[#8a5a2b]">♡</span>
              </span>
            </p>

            <div className="mt-4 grid max-w-[460px] grid-cols-4 gap-2 sm:gap-3">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label + item.sub} className="flex flex-col items-center text-center">
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#c9a86a]/70 bg-[#fffdf6]/80 shadow-sm sm:h-[58px] sm:w-[58px] lg:h-[54px] lg:w-[54px]">
                      <Icon className="h-[22px] w-[22px] text-[#1d1a15]" strokeWidth={1.7} />
                    </div>
                    <p className="mt-2 font-sans text-[10px] font-medium leading-[1.3] text-[#2b2620] sm:text-[11px]">
                      {item.label}
                      <br />
                      {item.sub}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 select-none">
              <p className="font-script text-[52px] leading-none text-[#6b4423] -rotate-[4deg] sm:text-[62px] lg:text-[56px] xl:text-[62px]">
                Thank You <span className="align-top text-[36px]">♡</span>
              </p>
              <p className="mt-1 font-sans text-[10px] font-medium uppercase tracking-[0.34em] text-[#6b6259] sm:text-[11px]">
                For being a part
                <br />
                of my life
              </p>
            </div>
          </section>

          {/* MIDDLE — shifted left into the empty space per marks */}
          <section aria-label="Nayansh photo" className="flex shrink-0 justify-center lg:flex-1 lg:px-2">
            <div
              className="animate-fade-in relative lg:-mt-4 lg:-ml-10 xl:-ml-16"
              style={{ animationDelay: '120ms', animationFillMode: 'both' }}
            >
              <div className="relative w-[240px] rotate-[6deg] rounded-[8px] bg-[#fffdf7] p-[12px] pb-[12px] shadow-[0_24px_60px_-12px_rgba(46,21,8,0.55)] sm:w-[270px] lg:w-[260px] xl:w-[295px]">
                <div className="absolute -top-[14px] left-1/2 z-10 h-[32px] w-[112px] -translate-x-1/2 -rotate-[3deg] bg-[#dcc096]/95 shadow-[0_2px_6px_rgba(0,0,0,0.18)] [clip-path:polygon(2%_0,98%_4%,100%_96%,0_100%)]" />
                <div className="overflow-hidden rounded-[3px] bg-[#1c1c1c]">
                  <img
                    src="/man-polaroid.png"
                    alt="Nayansh smiling"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
                <p className="flex items-center justify-center gap-2 pb-1 pt-3 font-script text-[30px] text-[#2b2620]">
                  Nayansh <span className="text-[22px]">♡</span>
                </p>
              </div>

              <div className="pointer-events-none absolute -right-[104px] top-[38%] hidden select-none xl:block">
                <p className="rotate-[8deg] text-center font-script text-[21px] leading-[1.15] text-[#fdf3df] drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                  Same
                  <br />
                  Person
                  <br />
                  Same
                  <br />
                  Love
                  <br />♡
                </p>
              </div>
            </div>
          </section>

          {/* RIGHT — shifted up-right per marks */}
          <section
            aria-label="Family details form"
            className="animate-fade-in flex w-full justify-center lg:w-auto lg:shrink-0 lg:justify-end lg:-mt-8 lg:-mr-1 xl:-mt-10"
            style={{ animationDelay: '240ms', animationFillMode: 'both' }}
          >
            <DetailsForm />
          </section>
        </main>

        <footer className="pb-4 text-center lg:hidden">
          <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#6b6259]">
            Family Always Together ♡
          </p>
        </footer>
      </div>
    </div>
  );
};

export default FormPage;
