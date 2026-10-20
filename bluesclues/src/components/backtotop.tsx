"use client";

export default function BackToTop() {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className="cursor-pointer text-zinc-600 mt-24 hover:text-blue-600 underline"
      onClick={() => scrollTop()}
    >
      Return to top
    </button>
  );
}
