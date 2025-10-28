// src/imports/AdminAiDashboard.tsx
// import React from 'react'; // CHANGE: Added React import for completeness
// import svgPaths from "./svg-3nqkn1oc8r"; // Assuming this path is correct

// --- CHANGE: Updated image import paths ---
// Replaced "figma:asset/..." imports with relative paths
// from the 'src/imports' directory to the 'src/assets' directory.
import imgFrame134 from "../assets/5f89ee062f2210170042d849c64718bf7f770345.png";
// Replaced missing/renamed assets with existing files in src/assets
import imgFrame135 from "../assets/2b9d147cd4bc2e8066aa4be3962f3b56cbeaa1cf.png";
import imgFrame136 from "../assets/409ed5f751806f8023bc3b462845618f2dce0566.png";
import imgFrame137 from "../assets/66c38fe3b7f639c209b1c5089f8aef58d3fdfdf4.png";
// --- End of image import changes ---


// src/imports/AdminAiDashboard.tsx
import React from 'react';
import svgPaths from "./svg-3nqkn1oc8r"; // Assuming this path is correct

// --- Image Imports ---
// Using relative paths from 'src/imports' to 'src/assets'
// NOTE: Verify these filenames exactly match your files in src/assets
// import imgFrame134 from "../assets/5f89ee062f2210170042d849c64718bf7f770345.png";
// import imgFrame135 from "../assets/2b7ce2e90453bb571c46f0e595a49d0b94a783cf.png"; // Corrected based on error message
// import imgFrame136 from "../assets/48628da30fa65f5aa52fd1d11dc2f6fcdc89b123.png"; // Corrected based on error message
// import imgFrame137 from "../assets/ac387647cbfa9d6d84b80228a73f82cebd62d467.png"; // Corrected based on error message
// // --- End Image Imports ---

// --- Component: Logo ---
function Logo() {
  return (
    <div className="content-stretch flex gap-2 md:gap-[10px] items-center justify-center relative shrink-0" data-name="logo">
      {/* Responsive font size */}
      <p className="font-['Playfair_Display:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2a120a] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-nowrap whitespace-pre">Alankara AI</p>
    </div>
  );
}

// --- Component: NotificationBox ---
function NotificationBox() {
  return (
     // Responsive size
    <div className="relative shrink-0 size-10 sm:size-12 md:size-14 lg:size-[64px]" data-name="notification-box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="notification-box">
          {/* Ensure svgPaths.p353e9300 is correctly defined */}
          <path d={svgPaths.p353e9300} id="Icon" stroke="var(--stroke-0, #202020)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
        </g>
      </svg>
    </div>
  );
}

// --- Component: LogOut01 ---
function LogOut01() {
  return (
     // Responsive size
    <div className="relative shrink-0 size-10 sm:size-12 md:size-14 lg:size-[64px]" data-name="log-out-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="log-out-01">
           {/* Ensure svgPaths.p9897f40 is correctly defined */}
          <path d={svgPaths.p9897f40} id="Icon" stroke="var(--stroke-0, #202020)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
        </g>
      </svg>
    </div>
  );
}

// --- Component: SearchContainer (Header Actions) ---
function SearchContainer() {
  return (
    // Responsive gap
    <div className="content-stretch flex gap-4 sm:gap-6 md:gap-8 lg:gap-[48px] items-center relative shrink-0" data-name="Search Container">
      <NotificationBox />
      <LogOut01 />
    </div>
  );
}

// --- Component: Header ---
function Header() {
  return (
    // CHANGE: Responsive height removed for natural flow, added border-b and shadow
    <div className="bg-white relative shrink-0 w-full border-b border-[#eaecf0] shadow-sm" data-name="Header">
      <div className="flex flex-row items-center size-full">
         {/* CHANGE: Responsive padding (px, py) */}
        <div className="box-border content-stretch flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-[96px] py-4 md:py-6 relative w-full gap-4 md:gap-0">
          <Logo />
          <SearchContainer />
          {/* CHANGE: Removed Tooltip1 as its positioning was unclear and absolute */}
        </div>
      </div>
    </div>
  );
}

// --- Component: Frame100 (Welcome Message) ---
function Frame100() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
         {/* CHANGE: Responsive padding (px, py) */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start px-4 sm:px-8 md:px-16 lg:px-[96px] py-6 sm:py-8 md:py-[64px] relative w-full">
           {/* CHANGE: Responsive text size and line height */}
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[#020202] text-4xl sm:text-5xl md:text-6xl lg:text-[80px] text-nowrap whitespace-pre">Welcome back, Ram</p>
        </div>
      </div>
    </div>
  );
}

// --- Component: TextPadding (Dropdown Button Text) ---
function TextPadding() {
  return (
    // CHANGE: Responsive padding
    <div className="box-border content-stretch flex items-center justify-center px-0.5 md:px-[2px] py-0 relative shrink-0" data-name="Text padding">
       {/* CHANGE: Responsive text size and line height */}
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.2] md:leading-[30px] not-italic relative shrink-0 text-[#344054] text-sm sm:text-base md:text-[21px] text-nowrap whitespace-pre">This Month</p>
    </div>
  );
}

// --- Component: ChevronDown ---
function ChevronDown() {
  return (
     // CHANGE: Responsive size
    <div className="relative shrink-0 size-4 sm:size-5 md:size-[30px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="chevron-down">
           {/* Ensure svgPaths.p3031b880 is correctly defined */}
          <path d={svgPaths.p3031b880} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

// --- Component: Button (Dropdown Trigger) ---
function Button() {
  return (
     // CHANGE: Responsive rounding, added hover effect
    <button className="bg-[rgba(255,255,255,0.5)] relative rounded-md md:rounded-[12px] shrink-0 hover:bg-white/80 transition-colors" data-name="Button" type="button">
       {/* CHANGE: Responsive padding and gap */}
      <div className="box-border content-stretch flex gap-0.5 sm:gap-1 md:gap-[4px] items-center justify-center overflow-clip px-2 sm:px-3 md:px-[21px] py-1.5 sm:py-2 md:py-[15px] relative rounded-[inherit]">
        <TextPadding />
        <ChevronDown />
      </div>
       {/* Border and shadow */}
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border border-solid inset-0 pointer-events-none rounded-[inherit] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </button>
  );
}

// --- Component: Frame118 (Overview Header) ---
function Frame118() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
       {/* CHANGE: Responsive text size */}
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#222226] text-xl sm:text-2xl md:text-3xl lg:text-[48px] text-nowrap whitespace-pre">Overview</p>
      <Button />
    </div>
  );
}

// --- Component: NotificationBox1 (Icon for Visitors) ---
function NotificationBox1() {
  return (
     // CHANGE: Responsive size
    <div className="relative shrink-0 size-6 sm:size-8 md:size-10 lg:size-[48px]" data-name="notification-box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="notification-box">
           {/* Ensure svgPaths.pa3b7c00 is correctly defined */}
          <path d={svgPaths.pa3b7c00} id="Icon" stroke="var(--stroke-0, #8B8B91)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

// --- Component: Left (Label for Visitors) ---
function Left() {
  return (
    // CHANGE: Responsive gap
    <div className="content-stretch flex gap-2 sm:gap-3 md:gap-[13.886px] items-center relative shrink-0" data-name="left">
      <NotificationBox1 />
       {/* CHANGE: Responsive text size */}
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#75757c] text-base sm:text-lg md:text-2xl lg:text-[40px] text-nowrap whitespace-pre">Visitors</p>
    </div>
  );
}

// --- Component: Frame104 (Visitors Row) ---
function Frame104() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Left />
       {/* CHANGE: Responsive text size */}
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#2d2d32] text-base sm:text-lg md:text-2xl lg:text-[40px] text-nowrap whitespace-pre">4850</p>
    </div>
  );
}

// --- Component: NotificationBox2 (Icon for Try On) ---
// CHANGE: (Similar responsive size adjustments as NotificationBox1)
function NotificationBox2() {
  return (
    <div className="relative shrink-0 size-6 sm:size-8 md:size-10 lg:size-[48px]" data-name="notification-box">
       <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48"><g id="notification-box"><path d={svgPaths.pa3b7c00} id="Icon" stroke="var(--stroke-0, #8B8B91)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /></g></svg>
    </div>
  );
}
// --- Component: Left1 (Label for Try On) ---
// CHANGE: (Similar responsive gap and text size adjustments as Left)
function Left1() {
  return (
    <div className="content-stretch flex gap-2 sm:gap-3 md:gap-[13.886px] items-center relative shrink-0" data-name="left">
      <NotificationBox2 /><p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#75757c] text-base sm:text-lg md:text-2xl lg:text-[40px] text-nowrap whitespace-pre">Try On</p>
    </div>
  );
}
// --- Component: Frame108 (Try On Row) ---
// CHANGE: (Similar responsive text size adjustments as Frame104)
function Frame108() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Left1 /><p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#eeeeef]">3035</p>
    </div>
  );
}

// --- Component: NotificationBox3 (Icon for Sales) ---
// CHANGE: (Similar responsive size adjustments as NotificationBox1)
function NotificationBox3() {
    return (
    <div className="relative shrink-0 size-6 sm:size-8 md:size-10 lg:size-[48px]" data-name="notification-box">
       <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48"><g id="notification-box"><path d={svgPaths.pa3b7c00} id="Icon" stroke="var(--stroke-0, #8B8B91)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /></g></svg>
    </div>
  );
}
// --- Component: Left2 (Label for Sales) ---
// CHANGE: (Similar responsive gap and text size adjustments as Left)
function Left2() {
  return (
    <div className="content-stretch flex gap-2 sm:gap-3 md:gap-[13.886px] items-center relative shrink-0" data-name="left">
      <NotificationBox3 /><p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#75757c] text-base sm:text-lg md:text-2xl lg:text-[40px] text-nowrap whitespace-pre">Sales</p>
    </div>
  );
}
// --- Component: Frame109 (Sales Row) ---
// CHANGE: (Similar responsive text size adjustments as Frame104)
function Frame109() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Left2 /><p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#2d2d32] text-base sm:text-lg md:text-2xl lg:text-[40px] text-nowrap whitespace-pre">₹78,50,500</p>
    </div>
  );
}

// --- Component: NotificationBox4 (Icon for Repeated Users) ---
// CHANGE: (Similar responsive size adjustments as NotificationBox1)
function NotificationBox4() {
    return (
    <div className="relative shrink-0 size-6 sm:size-8 md:size-10 lg:size-[48px]" data-name="notification-box">
       <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48"><g id="notification-box"><path d={svgPaths.pa3b7c00} id="Icon" stroke="var(--stroke-0, #8B8B91)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /></g></svg>
    </div>
  );
}
// --- Component: Left3 (Label for Repeated Users) ---
// CHANGE: (Similar responsive gap and text size adjustments as Left)
function Left3() {
  return (
    <div className="content-stretch flex gap-2 sm:gap-3 md:gap-[13.886px] items-center relative shrink-0" data-name="left">
      <NotificationBox4 /><p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#75757c] text-base sm:text-lg md:text-2xl lg:text-[40px] text-nowrap whitespace-pre">Repeated Users</p>
    </div>
  );
}
// --- Component: Frame110 (Repeated Users Row) ---
// CHANGE: (Similar responsive text size adjustments as Frame104)
function Frame110() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Left3 /><p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#2d2d32] text-base sm:text-lg md:text-2xl lg:text-[40px] text-nowrap whitespace-pre">48</p>
    </div>
  );
}

// --- Component: Frame106 (Overview Stats Card) ---
function Frame106() {
  return (
    // CHANGE: Responsive rounding, added shadow
    <div className="bg-white relative rounded-lg md:rounded-[24px] shrink-0 w-full shadow-sm">
      {/* Border */}
      <div aria-hidden="true" className="absolute border border-[#eeeeef] border-solid inset-0 pointer-events-none rounded-[inherit]" />
      <div className="size-full">
         {/* CHANGE: Responsive padding and gap */}
        <div className="box-border content-stretch flex flex-col gap-4 sm:gap-6 md:gap-[32px] items-start p-4 sm:p-6 md:p-[32px] relative w-full">
          <Frame104 />
          <Frame108 />
          <Frame109 />
          <Frame110 />
        </div>
      </div>
    </div>
  );
}

// --- Component: Stars01 (Icon for Sales Comparison) ---
// CHANGE: (Similar responsive size adjustments as NotificationBox1)
function Stars01() {
   return (
    <div className="relative shrink-0 size-6 sm:size-8 md:size-10 lg:size-[48px]" data-name="stars-01">
       <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48"><g id="stars-01"><g id="Icon"><path d={svgPaths.p706a80} stroke="var(--stroke-0, #8B8B91)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /><path d={svgPaths.p25909b80} stroke="var(--stroke-0, #8B8B91)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /></g></g></svg>
    </div>
  );
}

// --- Component: Frame119 (Sales Comparison Text) ---
function Frame119() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
         {/* CHANGE: Responsive padding and gap */}
        <div className="box-border content-stretch flex gap-2 sm:gap-3 md:gap-[16px] items-start px-2 sm:px-3 md:px-[16px] py-0 relative w-full">
          <Stars01 />
           {/* CHANGE: Responsive text size */}
          <p className="basis-0 font-['Poppins:Regular',_sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-xs sm:text-sm md:text-base lg:text-[28px] text-zinc-600">This month, 13.45 % more sales compared to previous month.</p>
        </div>
      </div>
    </div>
  );
}

// --- Component: Frame120 (Container for Stats Card and Comparison) ---
function Frame120() {
  return (
    // CHANGE: Responsive gap
    <div className="content-stretch flex flex-col gap-3 sm:gap-4 md:gap-[24px] items-start relative shrink-0 w-full">
      <Frame106 />
      <Frame119 />
    </div>
  );
}

// --- Component: Frame114 (Container for Overview Section) ---
function Frame114() {
  return (
    // CHANGE: Responsive gap
    <div className="content-stretch flex flex-col gap-4 sm:gap-6 md:gap-[32px] items-start relative shrink-0 w-full">
      <Frame118 />
      <Frame120 />
    </div>
  );
}

// --- Component: TryOn (Left Overview Panel) ---
function TryOn() {
  return (
    // CHANGE: Responsive rounding, removed min-width, added border
    <div className="w-full bg-[#f7f7f7] h-full relative rounded-lg md:rounded-[32px] shrink-0 border border-[#c9c9cc]" data-name="Try on">
      <div className="overflow-clip rounded-[inherit] size-full">
         {/* CHANGE: Responsive padding */}
        <div className="box-border content-stretch flex flex-col items-start justify-between px-4 sm:px-6 md:px-[24px] py-4 sm:py-6 md:py-[32px] relative size-full">
          <Frame114 />
        </div>
      </div>
      {/* Removed redundant border div */}
    </div>
  );
}

// --- Component: Frame111 (Try On Count and Percentage) ---
function Frame111() {
  return (
    // CHANGE: Responsive gap
    <div className="content-stretch flex flex-col font-['Inter:Medium',_sans-serif] font-medium gap-1 sm:gap-2 md:gap-[12px] items-start justify-center not-italic relative shrink-0 w-full">
      {/* CHANGE: Responsive text size and line height */}
      <p className="leading-[1.1] md:leading-[96px] relative shrink-0 text-[#eeeeef] text-5xl sm:text-6xl md:text-7xl lg:text-[96px] text-left text-nowrap whitespace-pre">3035</p>
      {/* CHANGE: Responsive text size */}
      <p className="leading-[1.3] min-w-full relative shrink-0 text-[#8b8b91] text-sm sm:text-base md:text-xl lg:text-[32px] w-[min-content]">
        <span className="text-[#10f500]">+12%</span>
        <span>{` since last month`}</span>
      </p>
    </div>
  );
}

// --- Component: Frame117 (Try On Section Header and Count) ---
function Frame117() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
         {/* CHANGE: Responsive padding and gap */}
        <div className="box-border content-stretch flex flex-col gap-4 sm:gap-6 md:gap-[48px] items-start pl-4 sm:pl-6 md:pl-[40px] pr-0 py-0 relative w-full">
          {/* CHANGE: Responsive text size and line height */}
          <p className="font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[1.2] md:leading-[96px] not-italic relative shrink-0 text-2xl sm:text-3xl md:text-5xl lg:text-[80px] text-zinc-600 w-full">Try On</p>
          <Frame111 />
        </div>
      </div>
    </div>
  );
}


// --- Component: Frame112 (Last Month Stat) ---
function Frame112() {
  return (
    // CHANGE: Responsive text size
    <div className="content-stretch flex items-center justify-between leading-[1.3] not-italic relative shrink-0 text-sm sm:text-base md:text-xl lg:text-[32px] text-nowrap w-full whitespace-pre">
      <p className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#afafb4]">last month</p>
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#eeeeef]">2560</p>
    </div>
  );
}

// --- Component: Frame113 (Container for Last Month) ---
function Frame113() {
  return (
    // CHANGE: Removed grid-area, adjusted padding, height (auto), width (full), rounding
    <div className="bg-[#2d2d32] box-border content-stretch flex flex-col gap-2 h-auto items-start pb-4 md:pb-[104px] px-4 sm:px-6 md:pl-[40px] md:pr-[48px] pt-4 sm:pt-6 md:pt-[30px] relative rounded-t-lg md:rounded-t-[24px] w-full">
      {/* Top border */}
      <div aria-hidden="true" className="absolute border-t border-solid border-zinc-600 inset-x-0 top-0 pointer-events-none rounded-t-[inherit]" />
      <Frame112 />
    </div>
  );
}

// --- Component: Frame121 (September Stat) ---
function Frame121() {
  return (
    // CHANGE: Responsive text size
    <div className="content-stretch flex items-center justify-between leading-[1.3] not-italic relative shrink-0 text-sm sm:text-base md:text-xl lg:text-[32px] text-nowrap w-full whitespace-pre">
      <p className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#afafb4]">September</p>
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#eeeeef]">2178</p>
    </div>
  );
}

// --- Component: Frame115 (Container for September) ---
// CHANGE: Added className prop for positioning
function Frame115({ className }: { className?: string }) {
  return (
     // CHANGE: Removed grid-area, adjusted padding, height (auto), width (full), rounding. Applied passed className.
    <div className={`bg-[#3a3a41] box-border content-stretch flex flex-col gap-2 h-auto items-start pb-4 md:pb-[32px] px-4 sm:px-6 md:pl-[40px] md:pr-[48px] pt-4 sm:pt-6 md:pt-[30px] relative rounded-t-lg md:rounded-t-[24px] w-full ${className}`}>
       {/* Border */}
      <div aria-hidden="true" className="absolute border border-solid border-zinc-600 inset-0 pointer-events-none rounded-[inherit]" />
      <Frame121 />
    </div>
  );
}

// --- Component: Group1 (Stacking Previous Months) ---
// CHANGE: Using flex-col instead of grid for simplicity
function Group1() {
  return (
    <div className="flex flex-col items-start relative w-full">
      <Frame113 />
      {/* CHANGE: Added negative margin-top to slightly overlap September onto Last Month visually */}
      <Frame115 className="-mt-16 md:-mt-[99px]" />
    </div>
  );
}

// --- Component: Bottom (Container for Previous Months) ---
function Bottom() {
  return (
    // CHANGE: Added mt-auto to push this section to the bottom
    <div className="relative shrink-0 w-full mt-auto" data-name="Bottom">
      <Group1 />
    </div>
  );
}

// --- Component: TrendUp01 (Icon) ---
function TrendUp01() {
  return (
     // CHANGE: Responsive positioning and size
    <div className="absolute right-4 sm:right-6 md:right-[40px] size-10 sm:size-12 md:size-16 lg:size-[80px] top-4 sm:top-6 md:top-[40px]" data-name="trend-up-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="trend-up-01">
           {/* Ensure svgPaths.p1138a1a0 is correctly defined */}
          <path d={svgPaths.p1138a1a0} id="Icon" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

// --- Component: TryOn1 (Right Try On Panel) ---
function TryOn1() {
  return (
     // CHANGE: Responsive rounding, removed min-width, adjusted padding, added background color, added border
    <div className="w-full box-border content-stretch flex flex-col h-full items-start justify-between overflow-clip pb-0 pt-4 sm:pt-6 md:pt-[32px] px-0 relative rounded-lg md:rounded-[32px] shrink-0 bg-[#1f1f23] border border-[#3a3a41]" data-name="Try on">
      <Frame117 />
      <Bottom />
      <TrendUp01 />
    </div>
  );
}


// --- Component: Frame116 (Container for Overview Panels) ---
function Frame116() {
  return (
    // CHANGE: Use grid layout for responsiveness (1 col default, 2 on md+)
    // Added gap for spacing
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-[40px] items-stretch relative shrink-0 w-full">
        {/* Removed intermediate flex divs */}
        <TryOn />
        <TryOn1 />
    </div>
  );
}

// --- Component: DotsVertical (Dropdown Trigger Icon) ---
// CHANGE: Responsive size
function DotsVertical() {
  return (<div className="relative shrink-0 size-8 sm:size-10 md:size-12 lg:size-[64px]" data-name="dots-vertical"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64"><g id="dots-vertical"><g id="Icon"><path d={svgPaths.p25b79f80} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" /><path d={svgPaths.p165f8400} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" /><path d={svgPaths.p37ddcc00} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" /></g></g></svg></div>);
}
// --- Component: Dropdown (Dropdown Trigger Container) ---
// CHANGE: Made it a button
function Dropdown() {
  return (<button type="button" className="content-stretch flex flex-col items-start relative shrink-0 hover:bg-gray-100 rounded-full p-1" data-name="Dropdown"><DotsVertical /></button>);
}
// --- Component: Frame142 (Emotional Analytics Header) ---
function Frame142() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-2 md:py-[12px] relative shrink-0 w-full">
       {/* CHANGE: Responsive text size, allow wrapping */}
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#222226] text-lg sm:text-xl md:text-3xl lg:text-[48px] whitespace-normal md:whitespace-pre">Emotional Engagement Analytics</p>
      <Dropdown />
    </div>
  );
}

// --- Component: Frame126 (Emotional Analytics Text) ---
function Frame126() {
  return (
    // CHANGE: Responsive gap
    <div className="content-stretch flex flex-col gap-3 sm:gap-4 md:gap-[24px] items-start relative shrink-0 w-full">
      <Frame142 />
       {/* CHANGE: Responsive text size */}
      <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] not-italic relative shrink-0 text-sm sm:text-base md:text-lg lg:text-[32px] text-zinc-600 w-full">Measure how deeply customers connect with your jewellery through expressions and repeat views.</p>
    </div>
  );
}

// --- Component: EmotionBar ---
// CHANGE: Replaced the complex SVG circle logic with a simple flexbox-based bar
function EmotionBar() {
  const happyPercent = 85;
  const neutralPercent = 14;
  const sadPercent = 1;

  return (
    // Container for the bar: full width, fixed height, rounded, overflow hidden, border
    <div className="bg-[#f7f7f7] h-3 relative rounded-full shrink-0 w-full overflow-hidden border border-[#c9c9cc]">
        {/* Flex container for the segments */}
        <div className="flex h-full w-full">
            {/* Happy Segment: Green background, width based on percentage */}
            <div
                className="h-full bg-[#0DC300]"
                style={{ width: `${happyPercent}%` }}
                title={`Happy: ${happyPercent}%`} // Tooltip for accessibility
            ></div>
            {/* Neutral Segment: Orange background, width based on percentage */}
            <div
                className="h-full bg-[#FF8D54]"
                style={{ width: `${neutralPercent}%` }}
                title={`Neutral: ${neutralPercent}%`}
            ></div>
            {/* Sad/Bad Segment: Red background, width based on percentage */}
            <div
                className="h-full bg-[#FF2222]"
                style={{ width: `${sadPercent}%` }}
                 title={`Sad/Bad: ${sadPercent}%`}
           ></div>
        </div>
    </div>
  );
}
// --- End EmotionBar ---


// --- Component: Frame127 (Happy Indicator) ---
// CHANGE: (Responsive size)
function Frame127() {
   return (<div className="relative shrink-0 size-8 sm:size-10 md:size-12 lg:size-[52px]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52"><g id="Frame 127"><circle cx="26" cy="26" fill="var(--fill-0, #0DC300)" id="Ellipse 8" r="20" stroke="var(--stroke-0, white)" strokeWidth="8" /></g></svg></div>);
}
// --- Component: Frame128 (Happy Label) ---
// CHANGE: (Responsive gap and text size)
function Frame128() {
   return (<div className="content-stretch flex gap-2 sm:gap-4 md:gap-[28px] items-center relative shrink-0"><Frame127 /><p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#75757c] text-base sm:text-lg md:text-2xl lg:text-[40px] text-nowrap whitespace-pre">Happy</p></div>);
}
// --- Component: Frame129 (Happy Row) ---
// CHANGE: (Responsive text size)
function Frame129() {
   return (<div className="content-stretch flex items-center justify-between relative shrink-0 w-full"><Frame128 /><p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#2d2d32] text-xl sm:text-2xl md:text-3xl lg:text-[48px] text-nowrap whitespace-pre">85%</p></div>);
}

// --- Component: Frame139 (Neutral Indicator) ---
// CHANGE: (Responsive size)
function Frame139() {
   return (<div className="relative shrink-0 size-8 sm:size-10 md:size-12 lg:size-[52px]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52"><g id="Frame 127"><circle cx="26" cy="26" fill="var(--fill-0, #FF8D54)" id="Ellipse 8" r="20" stroke="var(--stroke-0, white)" strokeWidth="8" /></g></svg></div>);
}
// --- Component: Frame143 (Neutral Label) ---
// CHANGE: (Responsive gap and text size)
function Frame143() {
   return (<div className="content-stretch flex gap-2 sm:gap-4 md:gap-[28px] items-center relative shrink-0"><Frame139 /><p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#75757c] text-base sm:text-lg md:text-2xl lg:text-[40px] text-nowrap whitespace-pre">Neutral</p></div>);
}
// --- Component: Frame130 (Neutral Row) ---
// CHANGE: (Responsive text size)
function Frame130() {
   return (<div className="content-stretch flex items-center justify-between relative shrink-0 w-full"><Frame143 /><p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#2d2d32] text-xl sm:text-2xl md:text-3xl lg:text-[48px] text-nowrap whitespace-pre">14%</p></div>);
}

// --- Component: Frame144 (Sad/Bad Indicator) ---
// CHANGE: (Responsive size)
function Frame144() {
   return (<div className="relative shrink-0 size-8 sm:size-10 md:size-12 lg:size-[52px]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52"><g id="Frame 127"><circle cx="26" cy="26" fill="var(--fill-0, #FF2222)" id="Ellipse 8" r="20" stroke="var(--stroke-0, white)" strokeWidth="8" /></g></svg></div>);
}
// --- Component: Frame149 (Sad/Bad Label) ---
// CHANGE: (Responsive gap and text size)
function Frame149() {
   return (<div className="content-stretch flex gap-2 sm:gap-4 md:gap-[28px] items-center relative shrink-0"><Frame144 /><p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#75757c] text-base sm:text-lg md:text-2xl lg:text-[40px] text-nowrap whitespace-pre">Sad/Bad</p></div>);
}
// --- Component: Frame131 (Sad/Bad Row) ---
// CHANGE: (Responsive text size)
function Frame131() {
   return (<div className="content-stretch flex items-center justify-between relative shrink-0 w-full"><Frame149 /><p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#2d2d32] text-xl sm:text-2xl md:text-3xl lg:text-[48px] text-nowrap whitespace-pre">1%</p></div>);
}

// --- Component: Frame132 (Emotion Stats Container) ---
function Frame132() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
         {/* CHANGE: Responsive padding and gap */}
        <div className="box-border content-stretch flex flex-col gap-2 sm:gap-3 md:gap-[12px] items-start px-4 sm:px-6 md:px-[32px] py-0 relative w-full">
          <Frame129 />
          <Frame130 />
          <Frame131 />
        </div>
      </div>
    </div>
  );
}

// --- Component: Stars2 (Icon for Emotion Summary) ---
// CHANGE: (Responsive size)
function Stars2() {
   return (<div className="relative shrink-0 size-6 sm:size-8 md:size-10 lg:size-[48px]" data-name="stars-01"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48"><g id="stars-01"><g id="Icon"><path d={svgPaths.p706a80} stroke="var(--stroke-0, #2AA01D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /><path d={svgPaths.p25909b80} stroke="var(--stroke-0, #2AA01D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /></g></g></svg></div>);
}

// --- Component: Frame123 (Emotion Summary Text) ---
function Frame123() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
         {/* CHANGE: Responsive padding and gap */}
        <div className="box-border content-stretch flex gap-2 sm:gap-3 md:gap-[16px] items-start px-2 sm:px-3 md:px-[16px] py-0 relative w-full">
          <Stars2 />
           {/* CHANGE: Responsive text size */}
          <p className="basis-0 font-['Poppins:Regular',_sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#2aa01d] text-xs sm:text-sm md:text-base lg:text-[28px]">This month showed a 12% rise in positive emotions during AR try-ons. Rings and Necklaces generated the highest happiness scores, with users spending an average of 38 seconds interacting per item.</p>
        </div>
      </div>
    </div>
  );
}

// --- Component: Frame133 (Emotion Summary Card) ---
function Frame133() {
  return (
    // CHANGE: Responsive rounding
    <div className="bg-[#d7fbd3] relative rounded-lg md:rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
         {/* CHANGE: Responsive padding and gap */}
        <div className="box-border content-stretch flex flex-col gap-2 sm:gap-3 md:gap-[16px] items-start p-4 sm:p-6 md:p-[32px] relative w-full">
          <Frame123 />
        </div>
      </div>
       {/* Border */}
      <div aria-hidden="true" className="absolute border border-[#90ffb9] border-solid inset-0 pointer-events-none rounded-[inherit]" />
    </div>
  );
}

// --- Component: EmotionalEngagementAnalytics ---
function EmotionalEngagementAnalytics() {
  return (
    // CHANGE: Responsive rounding, border, shadow
    <div className="bg-white relative rounded-xl md:rounded-[32px] shrink-0 w-full border border-[#eaecf0] shadow-sm" data-name="Emotional Engagement Analytics">
      <div className="overflow-clip rounded-[inherit] size-full">
         {/* CHANGE: Responsive padding and gap */}
        <div className="box-border content-stretch flex flex-col gap-4 sm:gap-6 md:gap-[40px] items-start p-4 sm:p-6 md:p-[40px] relative w-full">
          <Frame126 />
          {/* CHANGE: Replaced Frame122 (old bar logic) with the new EmotionBar component */}
          <EmotionBar />
          <Frame132 />
          <Frame133 />
        </div>
      </div>
      {/* Removed redundant border/shadow div */}
    </div>
  );
}


// --- Component: DotsVertical1 (Dropdown Icon) ---
// CHANGE: Responsive size
function DotsVertical1() {
  return (<div className="relative shrink-0 size-8 sm:size-10 md:size-12 lg:size-[64px]" data-name="dots-vertical"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64"><g id="dots-vertical"><g id="Icon"><path d={svgPaths.p25b79f80} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" /><path d={svgPaths.p165f8400} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" /><path d={svgPaths.p37ddcc00} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" /></g></g></svg></div>);
}
// --- Component: Dropdown1 (Dropdown Trigger) ---
// CHANGE: Made it a button
function Dropdown1() {
  return (<button type="button" className="content-stretch flex flex-col items-start relative shrink-0 hover:bg-gray-100 rounded-full p-1" data-name="Dropdown"><DotsVertical1 /></button>);
}
// --- Component: Frame150 (Trending Header) ---
function Frame150() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-2 md:py-[12px] relative shrink-0 w-full">
       {/* CHANGE: Responsive text size, allow wrap */}
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#222226] text-lg sm:text-xl md:text-3xl lg:text-[48px] whitespace-normal md:whitespace-pre">Trending in “Try-on”</p>
      <Dropdown1 />
    </div>
  );
}

// --- Component: Frame134 (Trending Item Image) ---
function Frame134() {
  return (
    // CHANGE: Adjusted aspect ratio slightly, responsive rounding, overflow hidden
    <div className="aspect-square sm:aspect-[546/542] pointer-events-none relative rounded-lg md:rounded-[24px] shrink-0 w-full overflow-hidden">
        {/* CHANGE: Added alt text, ensure object-cover */}
        <img alt="Trending diamond ring" className="absolute left-0 top-0 max-w-none size-full object-cover" src={imgFrame134} />
       {/* Border */}
      <div aria-hidden="true" className="absolute border border-[#eeeeef] border-solid inset-0 rounded-[inherit]" />
    </div>
  );
}
// --- Component: Frame135 (Try-on Count) ---
// CHANGE: Responsive text size and gap
function Frame135() {
   return (<div className="content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-1 md:gap-[12px] items-center leading-[1.3] not-italic relative shrink-0 text-xs sm:text-sm md:text-base lg:text-[32px] text-nowrap whitespace-pre"><p className="relative shrink-0 text-[#8b8b91]">Try-on:</p><p className="relative shrink-0 text-[#222226]">450</p></div>);
}
// --- Component: Frame136 (Emotion Percentage) ---
// CHANGE: Responsive text size and gap
function Frame136() {
   return (<div className="content-stretch flex gap-1 md:gap-[12px] items-center relative shrink-0"><p className="font-['Inter:Medium',_sans-serif] font-['Inter:Regular',_sans-serif] font-medium font-normal leading-[1.3] not-italic relative shrink-0 text-[#8b8b91] text-xs sm:text-sm md:text-base lg:text-[32px] text-nowrap whitespace-pre"><span>{`| `}</span><span className="text-[#222226]">😊 85%</span></p></div>);
}
// --- Component: Frame137 (Try-on Stats Row) ---
// CHANGE: Responsive gap
function Frame137() {
   return (<div className="content-stretch flex gap-1 md:gap-[12px] items-center relative shrink-0"><Frame135 /><Frame136 /></div>);
}
// --- Component: Frame138 (Trending Item Info) ---
function Frame138() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
         {/* CHANGE: Responsive padding and gap */}
        <div className="box-border content-stretch flex flex-col gap-2 md:gap-[16px] items-start pb-2 md:pb-[12px] pt-0 px-2 md:px-[12px] relative w-full">
           {/* CHANGE: Responsive text size, ellipsis handling using line-clamp */}
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.3] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222226] text-sm sm:text-base md:text-lg lg:text-[40px] w-full line-clamp-1">{`Embed Diamond Ring `}</p>
          <Frame137 />
        </div>
      </div>
    </div>
  );
}

// --- Component: Item1 (Trending Item Card) ---
function Item1() {
  return (
    // CHANGE: Responsive rounding, padding, gap, added border and shadow
    <div className="bg-white box-border content-stretch flex flex-col gap-2 md:gap-[16px] items-start p-2 md:p-[16px] relative rounded-lg md:rounded-[32px] shrink-0 w-full shadow-sm border border-[#c9c9cc]" data-name="Item-1">
       {/* Removed redundant border/shadow div */}
      <Frame134 />
      <Frame138 />
    </div>
  );
}

// --- Repeat similar responsive adjustments for Item2, Item3, Item4 ---
function Frame151() { /* Image */ return (<div className="aspect-square sm:aspect-[546/542] pointer-events-none relative rounded-lg md:rounded-[24px] shrink-0 w-full overflow-hidden"><img alt="Trending item 2" className="absolute left-0 top-0 max-w-none size-full object-cover" src={imgFrame135} /><div aria-hidden="true" className="absolute border border-[#eeeeef] border-solid inset-0 rounded-[inherit]" /></div>); }
function Frame152() { /* Try-on count */ return (<div className="content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-1 md:gap-[12px] items-center leading-[1.3] not-italic relative shrink-0 text-xs sm:text-sm md:text-base lg:text-[32px] text-nowrap whitespace-pre"><p className="relative shrink-0 text-[#8b8b91]">Try-on:</p><p className="relative shrink-0 text-[#222226]">450</p></div>); }
function Frame153() { /* Emotion */ return (<div className="content-stretch flex gap-1 md:gap-[12px] items-center relative shrink-0"><p className="font-['Inter:Medium',_sans-serif] font-['Inter:Regular',_sans-serif] font-medium font-normal leading-[1.3] not-italic relative shrink-0 text-[#8b8b91] text-xs sm:text-sm md:text-base lg:text-[32px] text-nowrap whitespace-pre"><span>{`| `}</span><span className="text-[#222226]">😊 85%</span></p></div>); }
function Frame154() { /* Stats Row */ return (<div className="content-stretch flex gap-1 md:gap-[12px] items-center relative shrink-0"><Frame152 /><Frame153 /></div>); }
function Frame155() { /* Info Container */ return (<div className="relative shrink-0 w-full"><div className="size-full"><div className="box-border content-stretch flex flex-col gap-2 md:gap-[16px] items-start pb-2 md:pb-[12px] pt-0 px-2 md:px-[12px] relative w-full"><p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.3] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222226] text-sm sm:text-base md:text-lg lg:text-[40px] w-full line-clamp-1">{`Embed Diamond Ring `}</p><Frame154 /></div></div></div>); }
// CHANGE: Added border, shadow
function Item2() { /* Card */ return (<div className="bg-white box-border content-stretch flex flex-col gap-2 md:gap-[16px] items-start p-2 md:p-[16px] relative rounded-lg md:rounded-[32px] shrink-0 w-full shadow-sm border border-[#c9c9cc]" data-name="Item-2"><Frame151 /><Frame155 /></div>); }

function Frame156() { /* Image */ return (<div className="aspect-square sm:aspect-[546/542] pointer-events-none relative rounded-lg md:rounded-[24px] shrink-0 w-full overflow-hidden"><img alt="Trending item 3" className="absolute left-0 top-0 max-w-none size-full object-cover" src={imgFrame136} /><div aria-hidden="true" className="absolute border border-[#eeeeef] border-solid inset-0 rounded-[inherit]" /></div>); }
function Frame157() { /* Try-on count */ return (<div className="content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-1 md:gap-[12px] items-center leading-[1.3] not-italic relative shrink-0 text-xs sm:text-sm md:text-base lg:text-[32px] text-nowrap whitespace-pre"><p className="relative shrink-0 text-[#8b8b91]">Try-on:</p><p className="relative shrink-0 text-[#222226]">450</p></div>); }
function Frame158() { /* Emotion */ return (<div className="content-stretch flex gap-1 md:gap-[12px] items-center relative shrink-0"><p className="font-['Inter:Medium',_sans-serif] font-['Inter:Regular',_sans-serif] font-medium font-normal leading-[1.3] not-italic relative shrink-0 text-[#8b8b91] text-xs sm:text-sm md:text-base lg:text-[32px] text-nowrap whitespace-pre"><span>{`| `}</span><span className="text-[#222226]">😊 85%</span></p></div>); }
function Frame159() { /* Stats Row */ return (<div className="content-stretch flex gap-1 md:gap-[12px] items-center relative shrink-0"><Frame157 /><Frame158 /></div>); }
function Frame160() { /* Info Container */ return (<div className="relative shrink-0 w-full"><div className="size-full"><div className="box-border content-stretch flex flex-col gap-2 md:gap-[16px] items-start pb-2 md:pb-[12px] pt-0 px-2 md:px-[12px] relative w-full"><p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.3] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222226] text-sm sm:text-base md:text-lg lg:text-[40px] w-full line-clamp-1">{`Embed Diamond Ring `}</p><Frame159 /></div></div></div>); }
// CHANGE: Added border, shadow
function Item3() { /* Card */ return (<div className="bg-white box-border content-stretch flex flex-col gap-2 md:gap-[16px] items-start p-2 md:p-[16px] relative rounded-lg md:rounded-[32px] shrink-0 w-full shadow-sm border border-[#c9c9cc]" data-name="Item-3"><Frame156 /><Frame160 /></div>); }

function Frame161() { /* Image */ return (<div className="aspect-square sm:aspect-[546/542] pointer-events-none relative rounded-lg md:rounded-[24px] shrink-0 w-full overflow-hidden"><img alt="Trending item 4" className="absolute left-0 top-0 max-w-none size-full object-cover" src={imgFrame137} /><div aria-hidden="true" className="absolute border border-[#eeeeef] border-solid inset-0 rounded-[inherit]" /></div>); }
function Frame162() { /* Try-on count */ return (<div className="content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-1 md:gap-[12px] items-center leading-[1.3] not-italic relative shrink-0 text-xs sm:text-sm md:text-base lg:text-[32px] text-nowrap whitespace-pre"><p className="relative shrink-0 text-[#8b8b91]">Try-on:</p><p className="relative shrink-0 text-[#222226]">450</p></div>); }
function Frame163() { /* Emotion */ return (<div className="content-stretch flex gap-1 md:gap-[12px] items-center relative shrink-0"><p className="font-['Inter:Medium',_sans-serif] font-['Inter:Regular',_sans-serif] font-medium font-normal leading-[1.3] not-italic relative shrink-0 text-[#8b8b91] text-xs sm:text-sm md:text-base lg:text-[32px] text-nowrap whitespace-pre"><span>{`| `}</span><span className="text-[#222226]">😊 85%</span></p></div>); }
function Frame164() { /* Stats Row */ return (<div className="content-stretch flex gap-1 md:gap-[12px] items-center relative shrink-0"><Frame162 /><Frame163 /></div>); }
function Frame165() { /* Info Container */ return (<div className="relative shrink-0 w-full"><div className="size-full"><div className="box-border content-stretch flex flex-col gap-2 md:gap-[16px] items-start pb-2 md:pb-[12px] pt-0 px-2 md:px-[12px] relative w-full"><p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.3] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222226] text-sm sm:text-base md:text-lg lg:text-[40px] w-full line-clamp-1">{`Embed Diamond Ring `}</p><Frame164 /></div></div></div>); }
// CHANGE: Added border, shadow
function Item4() { /* Card */ return (<div className="bg-white box-border content-stretch flex flex-col gap-2 md:gap-[16px] items-start p-2 md:p-[16px] relative rounded-lg md:rounded-[32px] shrink-0 w-full shadow-sm border border-[#c9c9cc]" data-name="Item-4"><Frame161 /><Frame165 /></div>); }
// --- End Item definitions ---


// --- Component: Items (Trending Items Container) ---
function Items() {
  return (
    // CHANGE: Use responsive grid layout (1, 2, then 4 cols) and gap
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-[56px] items-start relative rounded-lg md:rounded-[32px] shrink-0 w-full" data-name="Items">
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

// --- Component: Frame107 (Container for Trending Items Grid) ---
function Frame107() {
  return (
    // CHANGE: Removed background color (parent has it), remove fixed width
    <div className="content-stretch flex flex-col items-start relative rounded-lg md:rounded-[32px] shrink-0 w-full">
      <Items />
    </div>
  );
}

// --- Component: TrendingOnTryOn ---
function TrendingOnTryOn() {
  return (
    // CHANGE: Responsive rounding, padding, border, shadow
    <div className="bg-white relative rounded-xl md:rounded-[48px] shrink-0 w-full border border-[#eaecf0] shadow-sm" data-name="Trending on Try-on">
      <div className="overflow-clip rounded-[inherit] size-full">
         {/* CHANGE: Responsive padding and gap */}
        <div className="box-border content-stretch flex flex-col gap-4 sm:gap-6 md:gap-[40px] items-start p-4 sm:p-6 md:p-[40px] relative w-full">
          <Frame150 />
          <Frame107 />
        </div>
      </div>
       {/* Removed redundant border/shadow div */}
    </div>
  );
}

// --- Component: DotsVertical2 (Dropdown Icon) ---
// CHANGE: Responsive size
function DotsVertical2() {
 return (<div className="relative shrink-0 size-8 sm:size-10 md:size-12 lg:size-[64px]" data-name="dots-vertical"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64"><g id="dots-vertical"><g id="Icon"><path d={svgPaths.p12c63f0} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" /><path d={svgPaths.p1313f620} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" /><path d={svgPaths.p3dce5f20} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" /></g></g></svg></div>);
}
// --- Component: Dropdown2 (Dropdown Trigger) ---
// CHANGE: Made it a button
function Dropdown2() {
 return (<button type="button" className="content-stretch flex flex-col items-start relative shrink-0 hover:bg-gray-100 rounded-full p-1" data-name="Dropdown"><DotsVertical2 /></button>);
}
// --- Component: Frame166 (Campaign Header) ---
function Frame166() {
  return (
    <div className="relative shrink-0 w-full">
      {/* Removed border div */}
      <div className="flex flex-row items-center size-full">
         {/* CHANGE: Responsive padding, added border-b */}
        <div className="box-border content-stretch flex items-center justify-between pb-4 sm:pb-6 md:pb-[40px] pt-2 md:pt-[12px] px-4 sm:px-6 md:px-[40px] relative w-full border-b border-[#eaecf0]">
           {/* CHANGE: Responsive text size */}
          <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#222226] text-lg sm:text-xl md:text-3xl lg:text-[48px] text-nowrap whitespace-pre">{`Campaign & Offers`}</p>
          <Dropdown2 />
        </div>
      </div>
    </div>
  );
}

// --- Component: Frame140 (Campaign Item Image) ---
// CHANGE: Responsive size and rounding
function Frame140() {
 return (<div className="pointer-events-none relative rounded-lg md:rounded-[32px] shrink-0 size-24 sm:size-32 md:size-40 lg:size-[160px] overflow-hidden"><img alt="Diwali Gold Sale offer" className="absolute left-0 top-0 max-w-none size-full object-cover" src={imgFrame134} /><div aria-hidden="true" className="absolute border border-[#c9c9cc] border-solid inset-0 rounded-[inherit] shadow-[2px_4px_8px_0px_rgba(0,0,0,0.04)]" /></div>);
}
// --- Component: Frame167 (Campaign End Date) ---
// CHANGE: Responsive text size and gap
function Frame167() {
 return (<div className="content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-1 md:gap-[12px] items-center leading-[1.3] not-italic relative shrink-0 text-sm sm:text-base md:text-lg lg:text-[40px] text-nowrap whitespace-pre"><p className="relative shrink-0 text-[#8b8b91]">Ends in :</p><p className="relative shrink-0 text-[#222226]">3 Days</p></div>);
}
// --- Component: Frame168 (Container for End Date) ---
// CHANGE: Responsive gap
function Frame168() {
 return (<div className="content-stretch flex gap-1 md:gap-[12px] items-center relative shrink-0"><Frame167 /></div>);
}
// --- Component: Content1 (Campaign Item Text) ---
function Content1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center size-full">
         {/* CHANGE: Responsive padding and gap */}
        <div className="box-border content-stretch flex flex-col gap-2 md:gap-[16px] items-start justify-center pb-2 md:pb-[12px] pt-0 px-2 md:px-[12px] relative size-full">
           {/* CHANGE: Responsive text size, ellipsis */}
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.3] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222226] text-lg sm:text-xl md:text-3xl lg:text-[48px] text-nowrap whitespace-pre line-clamp-1">Diwali Gold Sale offer</p>
          <Frame168 />
        </div>
      </div>
    </div>
  );
}
// --- Component: Frame141 (Campaign Item Content Layout) ---
// CHANGE: Responsive gap
function Frame141() {
 return (<div className="basis-0 content-stretch flex gap-3 sm:gap-4 md:gap-[24px] grow items-center min-h-px min-w-px relative shrink-0"><Frame140 /><div className="basis-0 flex flex-row grow items-center self-stretch shrink-0"><Content1 /></div></div>);
}
// --- Component: Trash01 (Delete Icon) ---
// CHANGE: Responsive size
function Trash01() {
 return (<div className="relative shrink-0 size-8 sm:size-10 md:size-12 lg:size-[60px]" data-name="trash-01"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60"><g id="trash-01"><path d={svgPaths.p35532e00} id="Icon" stroke="var(--stroke-0, #8B8B91)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" /></g></svg></div>);
}
// --- Component: ButtonsButton (Delete Button) ---
// CHANGE: Responsive padding and width (auto for smaller)
function ButtonsButton() {
 return (<button type="button" className="box-border content-stretch flex gap-1 md:gap-[12px] items-center justify-center overflow-clip p-2 sm:p-4 md:p-[30px] relative shrink-0 w-auto md:w-[120px] hover:bg-gray-100 rounded-md" data-name="Buttons/Button"><Trash01 /></button>);
}
// --- Component: Edit01 (Edit Icon) ---
// CHANGE: Responsive size
function Edit01() {
 return (<div className="relative shrink-0 size-8 sm:size-10 md:size-12 lg:size-[60px]" data-name="edit-01"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60"><g id="edit-01"><path d={svgPaths.p6184890} id="Icon" stroke="var(--stroke-0, #8B8B91)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" /></g></svg></div>);
}
// --- Component: ButtonsButton1 (Edit Button) ---
// CHANGE: Responsive padding and width (auto for smaller)
function ButtonsButton1() {
 return (<button type="button" className="box-border content-stretch flex gap-1 md:gap-[12px] items-center justify-center overflow-clip p-2 sm:p-4 md:p-[30px] relative shrink-0 w-auto md:w-[120px] hover:bg-gray-100 rounded-md" data-name="Buttons/Button"><Edit01 /></button>);
}
// --- Component: TableCell (Action Buttons Container) ---
// CHANGE: Responsive padding and gap
function TableCell() {
 return (<div className="box-border content-stretch flex gap-1 sm:gap-2 md:gap-[8px] items-center p-2 sm:p-3 md:p-[24px] relative shrink-0"><ButtonsButton /><ButtonsButton1 /></div>);
}

// --- Component: Items1 (Campaign Item Row) ---
function Items1() {
  return (
    // CHANGE: Responsive gap, flex wrap for smaller screens
    <div className="content-stretch flex flex-col sm:flex-row gap-4 md:gap-[56px] items-center relative rounded-lg md:rounded-[32px] shrink-0 w-full" data-name="Items">
      <Frame141 />
      <TableCell />
    </div>
  );
}

// --- Component: Frame124 (Campaign Item Card) ---
function Frame124() {
  return (
     // CHANGE: Responsive padding and rounding, added border and shadow
    <div className="bg-white box-border content-stretch flex flex-col items-start px-2 sm:px-4 md:px-0 py-2 sm:py-3 md:py-[16px] relative rounded-lg md:rounded-[40px] shrink-0 w-full border border-gray-200 shadow-sm">
      <Items1 />
    </div>
  );
}

// --- Component: Frame145 (Create New Promo Button) ---
function Frame145() {
  return (
     // CHANGE: Responsive rounding
    <button type="button" className="relative rounded-lg md:rounded-[32px] shrink-0 w-full hover:opacity-90 transition-opacity" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1328 126\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(66.4 0 0 6.3 664 63)\\\'><stop stop-color=\\\'rgba(255,160,71,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(251,145,46,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(247,130,21,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div className="flex flex-row items-center justify-center size-full">
         {/* CHANGE: Responsive padding */}
        <div className="box-border content-stretch flex gap-2 md:gap-[10px] items-center justify-center px-2 md:px-[10px] py-4 md:py-[32px] relative w-full">
           {/* CHANGE: Responsive text size */}
          <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-lg sm:text-xl md:text-3xl lg:text-[48px] text-nowrap text-white whitespace-pre">Create New Promo</p>
        </div>
      </div>
    </button>
  );
}

// --- Component: Frame148 (Campaign List Container) ---
function Frame148() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
         {/* CHANGE: Responsive padding and gap */}
        <div className="box-border content-stretch flex flex-col gap-4 sm:gap-6 md:gap-[40px] items-start px-4 sm:px-6 md:px-[40px] py-0 relative w-full">
          {[...Array(3).keys()].map((_, i) => (
            <Frame124 key={i} />
          ))}
          <Frame145 />
        </div>
      </div>
    </div>
  );
}

// --- Component: TrendingOnTryOn1 (Campaign Section) ---
function TrendingOnTryOn1() {
  return (
    // CHANGE: Responsive rounding, border, shadow
    <div className="bg-white relative rounded-xl md:rounded-[32px] shrink-0 w-full border border-[#eaecf0] shadow-sm" data-name="Trending on Try-on">
       {/* CHANGE: Responsive padding and gap */}
      <div className="box-border content-stretch flex flex-col gap-4 sm:gap-6 md:gap-[40px] items-start overflow-clip pb-4 sm:pb-6 md:pb-[40px] pt-3 sm:pt-4 md:pt-[24px] px-0 relative rounded-[inherit] w-full">
        <Frame166 />
        <Frame148 />
      </div>
       {/* Removed redundant border/shadow div */}
    </div>
  );
}

// --- Component: Frame101 (Main Content Area Container) ---
function Frame101() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
         {/* CHANGE: Responsive padding and gap */}
        <div className="box-border content-stretch flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-[96px] py-6 sm:py-8 md:py-[48px] relative w-full">
          <Frame116 />
          <EmotionalEngagementAnalytics />
          <TrendingOnTryOn />
          <TrendingOnTryOn1 />
        </div>
      </div>
    </div>
  );
}

// --- Main Component: AlankaraAiDashboard ---
export default function AlankaraAiDashboard() {
  return (
     // CHANGE: Added min-h-screen
    <div className="bg-white content-stretch flex flex-col items-start relative w-full min-h-screen" data-name="Alankara Ai - Dashboard">
      <Header />
      <Frame100 />
      <Frame101 />
    </div>
  );
}