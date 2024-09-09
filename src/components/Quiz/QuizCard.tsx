import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

export default function QuizCard() {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="font-bold md:text-large text-sm my-1">
          Basic Programming Concepts
        </p>
        <small className="text-tiny uppercase font-bold mb-1">
          10 questions
        </small>
        <h4 className="text-tiny mb-1">60 minutes</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex items-center w-full h-full">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://www.superprof.co/blog/wp-content/uploads/2024/07/test-programacion-nivel.jpg"
        />
      </CardBody>

      <Button className="py-2 mx-3 bg-[#6A5AE0] text-white font-medium text-lg rounded-md">
        Take Quiz
      </Button>
    </Card>
  );
}
