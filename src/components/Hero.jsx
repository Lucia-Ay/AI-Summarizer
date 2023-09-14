import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className=" flex justify-center items-center gap-2">
          <img src={logo} alt="logo" className="w-12" />
          <h1 className="text-stone-700 text-2xl font-black font-satoshi">
            SUMZ
          </h1>
        </div>
        <button
          type="button"
          className="black_btn"
          onClick={() =>
            window.open('https://github.com/Lucia-Ay/AI-Summarizer')
          }
        >
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='pink_gradient'>OpenAI GPT-3.5</span>
      </h1>
      <h2 className='description'>
        Simplify your reading with SUMZ, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
