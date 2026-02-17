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
      className="cursor-pointer text-zinc-600 underline mt-24"
      onClick={() => scrollTop()}
    >
      Return to top
    </button>
  );
}
