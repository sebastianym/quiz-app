"use client";
import FormHome from "@/components/Home/FormHome";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/QuizContext";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import Header from "@/components/Home/Header";

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
    <main className="flex flex-col justify-evenly h-full">
      <Header />
      <div className="flex flex-col md:flex-row justify-between gap-2 md:m-5 lg:m-20">
        <div className="flex flex-col items-center h-auto">
          <div className="px-5 text-start flex items-center justify-center lg:mt-12">
            <p className="lg:text-[48px] md:text-[36px] text-3xl mx-3 font-semibold mt-4 leading-snug">
              Get ready to challenge your knowledge with our exciting Quiz
              platform!
            </p>
          </div>
          {name === "" ? (
            <FormHome
              handleSubmit={handleSubmit}
              value={value}
              handleChange={handleChange}
            />
          ) : (
            <div className="w-full text-start flex-col px-5 items-center justify-center md:mt-6 mt-2">
              <p className="lg:text-xl md:text-lg text-black/70 mx-3 font-medium my-4">
                Welcome back, <span className="text-[#b249f8]">{name}</span>!
                Let's get started with the quizzes!
              </p>
              <Button
                onClick={() => router.push("/quiz")}
                className="lg:py-2 py-1 px-5 lg:px-10 mx-3 bg-[#6A5AE0] text-white font-medium lg:text-lg md:text-base rounded-sm"
              >
                Start
              </Button>
            </div>
          )}
        </div>
        <Image
          alt="Image Home"
          className="object-cover rounded-xl rounded-b-none h-auto"
          src="/images/imageHome.png"
        />
      </div>
    </main>
  );
}
