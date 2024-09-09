function FormHome({
  handleSubmit,
  value,
  handleChange,
}: {
  handleSubmit: any;
  value: string;
  handleChange: any;
}) {
  return (
    <form className="flex justify-between my-10" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-black/10 mx-4 rounded-md text-black/80 text-lg p-2 md:w-96"
        placeholder="Enter your name"
        value={value}
        onChange={handleChange}
      />
      <button className="py-2 px-4 bg-[#6A5AE0] text-white font-medium text-lg rounded-md">
        Start
      </button>
    </form>
  );
}

export default FormHome;
