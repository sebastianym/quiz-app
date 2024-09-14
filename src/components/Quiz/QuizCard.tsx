import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

export default function QuizCard() {
  return (
    <Card className="w-full max-md:mb-5">
      <CardBody className="relative w-full p-0 rounded-b-none h-[200px] overflow-hidden">
        <Image
          alt="Card background"
          className="object-cover rounded-xl rounded-b-none w-full"
          src="https://www.superprof.co/blog/wp-content/uploads/2024/07/test-programacion-nivel.jpg"
        />
        <h4 className="text-xs absolute top-4 right-4 z-10 bg-[#478CCF] py-1 px-2 rounded-md text-white font-semibold">
          60 minutes
        </h4>
      </CardBody>

      <CardHeader className="p-5 flex-col items-start">
        <div className="flex w-full justify-between items-center mb-1">
          <p className="font-semibold md:text-lg text-xs">
            Basic Programming Concepts
          </p>
        </div>
        <small className="text-xs uppercase font-medium mb-2">
          10 questions
        </small>

        <Button className="w-full rounded-lg bg-[#6A5AE0] text-white font-normal py-2 text-md">
          Take Quiz
        </Button>
      </CardHeader>
    </Card>
  );
}
