export default function Footer() {
  return (
    <footer className="bg-[#f7f4ef] px-6 py-14 font-[serif] flex justify-center text-[#6b4f3b] border-t border-[#d8c3a5]">
      <div className="text-center w-full max-w-4xl">
        {/* Divider */}
        <div className="mx-auto w-1/3 border-t border-[#d8c3a5] mb-6"></div>

        {/* Thank You Message */}
        <p className="text-lg tracking-wide mb-3">
          Thank you for being part of this special celebration!
        </p>

        {/* Event Details */}
        <p className="font-semibold text-base tracking-wide mb-1">
          Bridget Catherine’s 18th Birthday
        </p>
        <p className="italic text-sm tracking-wide mb-5">
          November 22, 2025 · 3:30 pm · Luzviminda’s Event Center, Cabanatuan City
        </p>

        {/* Divider */}
        <div className="mx-auto w-1/4 border-t border-[#d8c3a5] mb-6"></div>

        {/* Closing Line */}
        <p className="text-xs text-[#8c715a] tracking-wider">
          © 2025 Made by Nina C. Nambio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
