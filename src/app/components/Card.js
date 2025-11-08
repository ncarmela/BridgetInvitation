export default function Card({ section }) {
  const group = section;

  return (
    <section key={group.title} className=" ml-3 mr-3 md:mx-20 lg:mx-40">
      <div className=" border border-[#d8c3a5] bg-white/30 backdrop-blur-sm rounded-2xl shadow-md pt-6 pb-6 sm:pt-8 sm:pb-8 md:pt-9 md:pb-9 lg:pt-12 lg:pb-12 md:p-0  hover:shadow-lg transition-all duration-500 ease-in-out">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#b08968] mb-8 tracking-wide uppercase text-center">
          {group.title}
        </h2>

        {/* 2 columns mirror-aligned with space in the middle */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:text-base md:text-lg leading-relaxed text-[#5c4033]">
          {/* LEFT COLUMN - right aligned */}
          <div className="text-right">
            {group.names[0].map((name) => (
              <p key={name} className="break-words">
                {name}
              </p>
            ))}
          </div>

          {/* RIGHT COLUMN - left aligned */}
          <div className="text-left">
            {group.names[1].map((name) => (
              <p key={name} className="break-words">
                {name}
              </p>
            ))}
          </div>
        </div>

      </div>



    </section>


  );
}
