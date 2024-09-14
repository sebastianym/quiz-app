"use client";
import QuizCard from "@/components/Quiz/QuizCard";
import { useQuiz } from "@/context/QuizContext";
import { useEffect } from "react";
import Header from "@/components/Home/Header";

function Home() {
  const { name, getFromLocalStorage } = useQuiz();

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  return (
    <main className="flex flex-col justify-evenly h-full bg-white">
      <Header />
      <div className="md:m-8 mx-5 px-5 h-4/5 bg-white">
        <h2 className="md:text-3xl text-2xl font-semibold">
          Welcome <span className="text-[#771cb3]">{name}</span>! 😀
        </h2>
        <p className="md:text-xl text-lg mt-4">
          Here are the topics to choose from, select one and start the quiz. Do
          you have any questions about
          <a href="/how-it-works" className="text-[#771cb3]">
            how it works?
          </a>
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
