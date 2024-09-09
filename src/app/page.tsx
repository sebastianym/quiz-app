"use client";
import FormHome from "@/components/Home/FormHome";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/QuizContext";

export default function Home() {
  //useState for the name of the user
  const [value, setValue] = useState("");

  //context
  const { getFromLocalStorage, name } = useQuiz();

  //useRouter to redirect to the quiz page
  const router = useRouter();

  //detect change in input
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  //submit form and validate
  const handleSubmit = (e: any) => {
    //form is not submitted automatically
    e.preventDefault();

    //We validate that it is not empty and that it is greater than 3 characters
    if (!value || value.length < 3) return;

    //We save the name in local storage
    saveToLocalStorage(value);

    //We redirect to the quiz page
    router.push("/quiz");
  };

  //local storage
  const saveToLocalStorage = (value: string) => {
    if (value) {
      localStorage.setItem("name", JSON.stringify(value));
    }
  };

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  return (
    <main className="w-full h-screen flex flex-col items-center md:pt-32 pt-10">
      <div className="md:mb-10 mb-4">
        <h1 className="md:text-8xl text-5xl font-bold">Quiz App 🏆</h1>
      </div>
      <div className="md:w-1/2 text-center flex items-center justify-center">
        <p className="md:text-2xl mx-3 font-semibold mt-4">
          Get ready to challenge your knowledge and test your programming skills
          with our exciting quiz platform!
        </p>
      </div>
      {name === "" ? (
        <FormHome
          handleSubmit={handleSubmit}
          value={value}
          handleChange={handleChange}
        />
      ) : (
        <div className="md:w-1/2 text-center flex-col items-center justify-center">
          <p className="md:text-2xl mx-3 font-medium my-4">
            Welcome back, {name}! Let's get started with the quizzes!
          </p>
          <button
            onClick={() => router.push("/quiz")}
            className="py-2 px-4 bg-[#6A5AE0] text-white font-medium text-lg rounded-md"
          >
            Start
          </button>
        </div>
      )}
    </main>
  );
}
