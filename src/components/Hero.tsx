/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { logo } from "../assets"

export function Hero() {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex w-full mb-10 pt-3 justify-between items-center">
        <img src={logo} alt="Sumz Logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/mateus-holanda")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Web Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Boost your productivity by simplifying your reading with Sumz, an
        open-source article summarizer that transforms lengthy articles into
        clear and concise paragraphs.
      </h2>
    </header>
  )
}