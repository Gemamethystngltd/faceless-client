import Image from "next/image";

export default function Icons() {
  return (
    <div className="w-full min-h-screen bg-white px-16 mt-20">
      <div className="flex flex-row">
        {/* Background-style div with darkened image */}
        <div className="w-[100rem] h-[25rem] rounded-xl bg-[url('/images/background-3.png')] bg-no-repeat bg-cover bg-center relative overflow-hidden">
          {/* Subtle dark overlay using gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 z-10 rounded-xl" />

          {/* Text inside the background image */}
          <div className="relative z-20 h-full px-16">
            <h2 className="text-white text-4xl mt-20 font-semibold">
              Your Privacy, Your <br /> Power.
            </h2>
            <p className="text-white mt-2">
              Host and attend live digital experiences without ever revealing
              your face or identity. total freedom, full control, zero pressure
            </p>
          </div>
        </div>

        {/* Adjacent image */}
        <div className="w-[40rem] flex items-center">
          <Image
            src="/images/frame.png"
            alt="Frame"
            width={400}
            height={350}
            className=""
          />
        </div>
      </div>
      <div className="w-full mt-10 gap-10 py-20 flex flex-row">
        <div className="w-1/2 h-[25rem] rounded-xl bg-[url('/images/background-1.png')] bg-no-repeat bg-cover bg-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 z-10 rounded-xl" />

          {/* Text inside the background image */}
          <div className="relative z-20 h-full px-16">
            <h2 className="text-white text-4xl mt-20 font-semibold">
              Host, Earn, Stay <br /> Hidden.
            </h2>
            <p className="text-white mt-2">
              Host and attend live digital experiences without ever revealing
              your face or identity. total freedom, full control, zero pressure
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-[47rem] h-[12rem] rounded-xl bg-[url('/images/background-2.png')] bg-no-repeat bg-cover bg-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 z-10 rounded-xl" />

            {/* Text inside the background image */}
            <div className="relative z-20 h-full px-16">
              <h2 className="text-white text-4xl mt-10 font-semibold">
                For Everyone.
              </h2>
              <p className="text-white mt-2">
                Your data is encrypted your identity stays yours.
              </p>
            </div>
          </div>
          <div className="w-[47rem] h-[12rem] mt-3 rounded-xl bg-[#F4F4F4] relative overflow-hidden">
            {/* Text inside the background image */}
            <div className="relative z-20 h-full px-16">
              <h2 className="text-black text-4xl mt-10 font-semibold">
                Host. Earn. Stay Hidden.
              </h2>
              <p className="text-black mt-2">
                Host and attend live digital experiences without ever revealing
                your face or identity. total freedom, full control, zero
                pressure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
