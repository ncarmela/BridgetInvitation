import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";

export default function Rsvp() {
  return (
    <>
      {/* RSVP Section */}
      <section className="bg-[#f7f4ef] pb-14 px-6 font-[serif] flex justify-center">
        <div className="border border-[#d8c3a5] rounded-2xl p-8 w-full max-w-5xl shadow-md bg-white/30">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-center md:text-left">
            
            {/* Left side: QR + Button */}
            <div className="flex flex-col justify-center items-center ">
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
                I’m overjoyed to celebrate this beautiful milestone with the people who mean the most to me.
              </p>
             <p className="mb-4 font-semibold tracking-wide text-base">
                I would be so happy to have you celebrate this special day with me! Please click the RSVP button and respond by  
                <span className="text-[#620505]"> November 15 </span>  
                so we can share an afternoon filled with love, laughter, and unforgettable memories.
              </p>



              {/* New contact section */}
              <p className="italic text-sm tracking-wide flex flex-col gap-2">
                For any inquiries, feel free to reach out:
                <span className="flex items-center gap-2 mt-1">
                  <FaFacebookF className="text-brown-600" />
                  <a
                    href="https://facebook.com/bridget.mariano.7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#5c4033]"
                  >
                    Bridget Catherine N. Mariano 
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <FaPhoneAlt className="text-[#6b4f3b]" />
                  <p
                    href="tel:09985516052"
                    className="underline hover:text-[#5c4033]"
                  >
                    (0998) 551 6052
                  </p>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
