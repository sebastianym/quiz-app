import { Image } from "@nextui-org/image";
import Header from "@/components/Home/Header";

function HowItWorks() {
  return (
    <main className="flex flex-col justify-evenly h-full">
      <Header />
      <div className="flex flex-col justify-between gap-2 md:m-5 m-2">
        <div className="flex items-center justify-evenly gap-2">
          <Image
            alt="Image 1 How it Works"
            className="object-cover rounded-xl rounded-b-none h-auto"
            src="/images/image1HowItWorks.png"
            width={180}
          />
          <div className="px-5 text-start flex items-center justify-center md:mt-5">
            <h2 className="md:text-[48px] text-[20px] mx-3 font-semibold mt-4 leading-snug">
              How it Works?
            </h2>
          </div>
          <Image
            alt="Image 2 How it Works"
            className="object-cover rounded-xl rounded-b-none h-auto"
            src="/images/image2HowItWorks.png"
            width={150}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:mx-20 m-8">
          <div className="flex flex-col items-start py-7 rounded-xl border-1 border-black/10">
            <span className="ml-7 md:px-[15px] md:py-1 px-[14px] py-1 text-lg bg-[#6A5AE0] text-center items-center text-white font-semibold w-fit rounded-full">
              1
            </span>
            <div className="px-6 text-start flex flex-col items-start justify-start mt-5">
              <h3 className="font-semibold text-[22px] md:text-[25px]">
                Choose your topic:
              </h3>
              <p className="md:text-[17px] font-medium mt-4 leading-snug text-black/70">
                Browse our selection of predefined programming-related topics
                and select the one that interests you the most.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start py-7 rounded-xl border-1 border-black/10">
            <span className="ml-7 md:px-[14px] md:py-1 px-[13px] py-1 text-lg bg-[#6A5AE0] text-center items-center text-white font-semibold w-fit rounded-full">
              2
            </span>
            <div className="px-6 text-start flex flex-col items-start justify-start mt-4">
              <h3 className="font-semibold text-[22px] md:text-[25px]">
                Take the quiz:
              </h3>
              <p className="md:text-[17px] font-medium mt-4 leading-snug text-black/70">
                Answer a series of carefully designed questions to challenge
                your knowledge and understanding of the topic.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start py-7 rounded-xl border-1 border-black/10">
            <span className="ml-7 md:px-[14px] md:py-1 px-[13px] py-1 text-lg bg-[#6A5AE0] text-center items-center text-white font-semibold w-fit rounded-full">
              3
            </span>
            <div className="px-6 text-start flex flex-col items-start justify-start mt-4">
              <h3 className="font-semibold text-[22px] md:text-[25px]">
                Get your score:
              </h3>
              <p className="md:text-[17px] font-medium mt-4 leading-snug text-black/70">
                Upon completion, you will receive a score that will let you know
                your level of mastery on the topic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HowItWorks;
