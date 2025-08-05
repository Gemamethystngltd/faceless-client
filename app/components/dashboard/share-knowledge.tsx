import Image from "next/image";

export default function ShareKnowledge() {
  return (
    <div className="bg-white mx-auto flex flex-col w-full h-screen">
      <div className="flex flex-row w-full px-16 mx-auto">
        <div className="w-1/2">
          <div className="flex flex-row gap-4">
            <Image
              alt="placeholder"
              src={"/images/placeholder.jpg"}
              width={330}
              height={390}
              className="object-cover"
            />
            <Image
              alt="frame"
              src={"/images/speaker-frame.png"}
              width={330}
              height={399}
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col space-y-6">
          <span className="text-[#998200]">JOIN</span>
          <span className="text-black font-bold text-5xl">Become a Speaker and share your Knowledge</span>
          <span>
            Your expertise can inspire others, even anonymously. Join our
            platform to share your insights while maintaining your privacy.
          </span>
          <button className="rounded-full w-40 h-10 p-3 flex items-center justify-center mt-2 text-white bg-[#662D91]">
            Host Webinar
          </button>
        </div>
      </div>
    </div>
  );
}
