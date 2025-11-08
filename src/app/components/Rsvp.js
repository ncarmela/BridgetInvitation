export default function Rsvp() {
  return (
    <>
      {/* RSVP Section */}
      <section className="bg-[#f7f4ef] pb-14 px-6 font-[serif] flex justify-center">
        <div className="border border-[#d8c3a5] rounded-2xl p-8 w-full max-w-5xl shadow-md bg-white/30">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-center md:text-left">
            
            {/* Left side: QR + Button */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/pictures/RSVP.png"
                alt="RSVP QR Code"
                className="w-44 h-44 md:w-48 md:h-48 object-contain mb-5"
              />
              <a
                href="https://forms.gle/hqGZZEruLjAUoCHu5"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#d8c3a5] px-8 py-2 rounded-md text-[#6b4f3b] tracking-wide 
                           hover:bg-[#f1ebe4] hover:text-[#5c4033] transition-all duration-300 font-semibold"
              >
                RSVP HERE
              </a>
            </div>

            {/* Right side: Text */}
            <div className="max-w-lg text-[#6b4f3b] leading-relaxed">
              <p className="mb-4 tracking-wide text-base">
                I’M OVERJOYED TO CELEBRATE THIS BEAUTIFUL MILESTONE WITH THE PEOPLE WHO MEAN THE MOST TO ME.
              </p>
              <p className="mb-4 tracking-wide text-base">
                PLEASE LET ME KNOW IF YOU’LL BE JOINING MY SPECIAL DAY BY CLICKING THE RSVP BUTTON.
              </p>
              <p className="mb-4 font-semibold tracking-wide text-base">
                KINDLY RSVP BY <span className="font-bold">NOVEMBER 15</span>. I CAN’T WAIT TO SHARE A NIGHT FILLED WITH LOVE, LAUGHTER, AND UNFORGETTABLE MEMORIES WITH YOU!
              </p>
              <p className="italic text-sm tracking-wide">
                Due to limited seating, I’m unable to accommodate additional guests. Your understanding means the world to me — I truly look forward to celebrating this once-in-a-lifetime moment with you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
