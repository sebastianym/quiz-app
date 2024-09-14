import QuizCard from "@/components/Quiz/QuizCard";
import Header from "@/components/Home/Header";

function Home() {
  return (
    <main className="flex flex-col justify-evenly h-full bg-white">
      <Header />
      <div className="md:m-8 mx-5 px-5 h-4/5 bg-white">
        <h2 className="md:text-3xl text-2xl font-bold text-[#6A5AE0]">
          Welcome to QuizApp!
        </h2>
        <p className="md:text-xl text-lg mt-4 text-black/70">
          Select a topic below to start your quiz adventure:
        </p>
        <div className="mt-5">
          <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center md:mt-7 mt-5 gap-10">
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
