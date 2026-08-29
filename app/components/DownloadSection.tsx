import React from "react";

export function DownloadSection() {
  return (
    <section id="download" className="pt-4 sm:pt-6 pb-20 sm:pb-24 bg-background relative overflow-hidden">
      <div className="container-page relative z-10">
        <div className="bg-gradient-to-br from-fuchsia-50/90 via-purple-50/80 to-amber-50/80 text-stone-900 border border-purple-200/80 rounded-3xl p-8 md:p-14 lg:p-16 shadow-xl relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight">
                Download DigiAbility Today
              </h2>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl font-normal">
                Join over 47,000 Persons with Disabilities, caregivers, and organizations building an inclusive digital world together.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#download"
                  aria-label="Download DigiAbility on the Apple App Store"
                  className="bg-stone-900 text-white hover:bg-stone-800 px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-3 transition-all hover:scale-105 shadow-md focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.96.99-3.12-1 .04-2.2.67-2.9 1.49-.62.73-1.16 1.89-.99 3.03 1.12.09 2.23-.58 2.9-1.4" />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase font-semibold text-stone-400">Download on the</div>
                    <div className="text-base font-extrabold">App Store</div>
                  </div>
                </a>

                <a
                  href="#download"
                  aria-label="Download DigiAbility on Google Play Store"
                  className="bg-stone-900 text-white hover:bg-stone-800 px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-3 transition-all hover:scale-105 shadow-md focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-1.428V3.242c0-.55.222-1.05.609-1.428zM15.206 13.414l2.457-2.457-12.01-6.93 9.553 9.387zm0-2.828L5.653 20.973l12.01-6.93-2.457-2.457zm2.457.707l2.848-1.644a1.2 1.2 0 0 0 0-2.098l-2.848-1.644-1.602 1.693 1.602 1.693z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase font-semibold text-stone-400">Get it on</div>
                    <div className="text-base font-extrabold">Google Play</div>
                  </div>
                </a>

                <a
                  href="#download"
                  aria-label="Download DigiAbility Android APK direct install"
                  className="bg-white hover:bg-stone-50 text-stone-900 border border-stone-400 px-5 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-2 transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <svg className="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download APK
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-4 text-xs font-semibold text-stone-700">
                <span>✓ Android 7.0+</span>
                <span>✓ iOS 14.0+</span>
                <span>✓ Screen Reader Compatible</span>
                <span>✓ Free Download</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-white border border-purple-200/80 rounded-2xl p-6 flex flex-col items-center gap-4 text-center max-w-xs w-full shadow-md">
                <div
                  className="w-36 h-36 bg-white p-3 rounded-xl flex items-center justify-center shadow-inner border border-stone-200"
                  role="img"
                  aria-label="QR code to install DigiAbility app directly on mobile device"
                >
                  {/* QR Code visual graphic */}
                  <div className="w-full h-full border-2 border-stone-900 rounded-lg p-2 flex flex-col justify-between items-center text-stone-900 font-mono text-[9px]" aria-hidden="true">
                    <div className="w-full flex justify-between">
                      <div className="w-6 h-6 border-2 border-stone-900 bg-stone-900" />
                      <div className="w-6 h-6 border-2 border-stone-900" />
                    </div>
                    <div className="font-extrabold text-xs text-primary">DIGIABILITY</div>
                    <div className="w-full flex justify-between">
                      <div className="w-6 h-6 border-2 border-stone-900" />
                      <div className="w-6 h-6 border-2 border-stone-900 bg-stone-900" />
                    </div>
                  </div>
                </div>
                <p className="text-xs font-semibold text-stone-800">
                  Scan QR code with your mobile camera to install directly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadSection;
