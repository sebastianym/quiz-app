import { Button } from "@nextui-org/button";

function FormHome({
  handleSubmit,
  value,
  handleChange,
}: {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <form className="flex w-full m-10 p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-black/10 mx-4 rounded-md ps-5 text-black/80 text-lg p-2 w-3/4"
        placeholder="Enter your name"
        value={value}
        onChange={handleChange}
      />
      <Button
        type="submit"
        className="py-2 text-center px-10 mx-3 bg-[#6A5AE0] text-white font-medium md:text-lg rounded-md"
      >
        Start
      </Button>
    </form>
  );
}

export default FormHome;
