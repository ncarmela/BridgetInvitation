export default function Location() {
  return (
    <section className="bg-[#f7f4ef] px-6 pb-14 font-[serif] flex justify-center">
      <div className="border border-[#d8c3a5] rounded-2xl p-8 w-full max-w-5xl bg-white/30 shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">

          {/* Google Map Embed */}
          <div className="w-full md:w-1/2">
            <iframe
  title="Event Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.459431626803!2d120.96891597432056!3d15.480780888249302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397288adce73261%3A0xb47ef3424f4e4b76!2sLuzviminda%20Catering%2C%20Cabanatuan%20City%2C%20Nueva%20Ecija!5e0!3m2!1sen!2sph!4v1709856000000!5m2!1sen!2sph"
  className="w-full h-64 md:h-80 rounded-xl border border-[#d8c3a5]"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>

          {/* Venue Details */}
          <div className="max-w-lg text-[#6b4f3b] leading-relaxed">
            <h2 className="text-2xl font-bold tracking-wide mb-4">
              CELEBRATION VENUE
            </h2>

            <p className="mb-3 text-base tracking-wide">
              <span className="font-semibold">Luzviminda Catering</span>
              <br />
              FW8V+QH9, Street, Cabanatuan City, Nueva Ecija
            </p>

            <p className="mb-5 text-base tracking-wide">
              Join us as we celebrate this special milestone surrounded by love,
              laughter, and unforgettable memories at this beautiful venue.
            </p>

            <a
              href="https://www.google.com/maps/place/FW8V%2BQH9+Luzviminda%E2%80%99s+Event+Center,+Street,+Cabanatuan+City,+Nueva+Ecija/data=!4m2!3m1!1s0x3397288adce73261:0xb47ef3424f4e4b76?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjQzLjQYACDXggMqqwEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyODQ0NjAsOTQyMjMyOTksOTQyMTY0MTMsOTQyODA1NzYsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksOTQyOTU1MDgsNDcwODQzOTMsOTQyMTMyMDAsOTQyOTI3NjhCAlBI&skid=6e293c87-6637-48be-8876-b23d02681749&g_st=afm"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#d8c3a5] px-8 py-2 rounded-md text-[#6b4f3b] tracking-wide 
                        hover:bg-[#f1ebe4] hover:text-[#5c4033] transition-all duration-300 font-semibold"
            >
              VIEW IN MAPS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
