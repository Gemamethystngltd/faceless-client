import Image from "next/image";
import Navbar from "components/dashboard/navbar";
import Services from "components/dashboard/services";
import Webinar from "components/dashboard/webinar";
import FacelessCon from "components/dashboard/facelesscon";
import Icons from "components/dashboard/icons";
import Speakers from "components/dashboard/speakers";
import ShareKnowledge from "components/dashboard/share-knowledge";
import Testimonials from "components/dashboard/testimonials";
import FAQ from "components/dashboard/faq";
import Footer from "components/dashboard/footer";
import ToTopBtn from "components/dashboard/toTopbtn";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO SECTION */}
      <div className="bg-[url('/images/homepage.png')] bg-cover bg-center bg-no-repeat w-full min-h-screen px-4 flex flex-col laptop:flex-row items-center justify-between text-white gap-8 laptop:gap-0">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center space-y-4 phoneP:justify-center phoneP:items-center phoneP:text-center laptop:items-start laptop:text-left 
                        phoneP:ml-0 phoneL:ml-4 tablet:ml-10 laptop:ml-40 max-w-[90%] tablet:max-w-3xl laptop:max-w-4xl">
          <h1 className="text-2xl phoneL:text-3xl tablet:text-4xl font-bold leading-tight phoneP:mt-40">
            The Anonymous Gateway <br/> to Industrial Innovation.
          </h1>
          <p className="text-base tablet:text-md max-w-xl">
            Discover the future of AEC and Oil & Gas from undisclosed experts.
            Learn, contribute, and lead on your own terms.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 w-30 tablet:w-38 text-white px-4 tablet:px-4 py-2 tablet:py-3 rounded-xl transition">
            Learn More
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col bg-[#F3F3F3A1] text-center p-2 phoneL:p-2 laptop:p-3 rounded-2xl text-black 
                        phoneP:mt-6 laptop:mt-82 phoneP:mb-10 
                        phoneP:mx-auto laptop:mr-20 max-w-[30%] tablet:max-w-[40%] w-full tablet:w-auto">
          {/* Avatars */}
          <div className="flex -space-x-2 justify-center mb-2">
            {["image4", "image3", "image2", "image1"].map((img, i) => (
              <Image
                key={i}
                alt={img}
                src={`/images/${img}.jpg`}
                width={32}
                height={32}
                className="rounded-full border-2 border-white"
              />
            ))}
          </div>
          <p className="text-sm tablet:text-base">150M+ Users</p>

          {/* Stars */}
          <div className="flex flex-row justify-center mt-2 mb-1">
            {[...Array(4)].map((_, i) => (
              <Image key={i} alt="star" src="/images/star.png" width={20} height={20} />
            ))}
            <Image alt="half-star" src="/images/half-star.png" width={20} height={20} />
          </div>
          <p className="text-sm tablet:text-base">4.9 ratings</p>
        </div>
      </div>

      {/* OTHER SECTIONS */}
       <ToTopBtn />
      <Services />
      <Webinar />
      <FacelessCon />
      <Icons />
      <Speakers />
      <ShareKnowledge />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
