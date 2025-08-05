
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

export default function Home() {
  return (
    <main>
      <Navbar />
        <div className="bg-[url('/images/homepage.png')] bg-cover bg-center bg-no-repeat w-full min-h-screen px-4 flex items-center justify-between text-white">
      {/* LEFT SIDE */}
      <div className="flex flex-col ml-40 justify-center space-y-6 max-w-4xl">
        <h1 className="text-5xl font-bold leading-tight">
          The Anonymous Gateway <br /> to Industrial Innovation.
        </h1>
        <p className="text-lg max-w-xl">
          Discover the future of AEC and Oil & Gas from undisclosed experts. Learn, contribute, and lead on your own terms.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 w-40 text-white px-6 py-3 rounded-xl transition">
          Learn More
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col bg-[#F3F3F3A1] text-center p-4 mt-42 rounded-2xl text-black mr-60">
        <div className="flex -space-x-3 justify-center mb-2">
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
        <p>150M+ Users</p>
        <div className="flex flex-row justify-center mt-2 mb-1">
          {[...Array(4)].map((_, i) => (
            <Image key={i} alt="star" src="/images/star.png" width={20} height={20} />
          ))}
          <Image alt="half-star" src="/images/half-star.png" width={20} height={20} />
        </div>
        <p>4.9 ratings</p>
      </div>
    </div>
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

