function Header() {
  return (
    <header className="flex md:flex-row flex-col justify-between items-center mx-2 md:mx-5 lg:mx-20 border-b-1 py-4">
      <h1 className="text-[#242424] font-bold text-lg md:text-3xl mb-2 md:mb-0">
        <a href="/">QuizApp</a>
      </h1>
      <nav>
        <ul className="flex justify-between items-center gap-10 text-sm md:text-xl font-semibold text-black/60">
          <li>
            <a href="/how-it-works">How it works?</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
