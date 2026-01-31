export default function ABoutMe() {
  return (
    <>
      <ul className="flex flex-col gap-4">
        <p className="text-lg text-zinc-900 mb-10">
          Currently studying at Monash University majoring in Bsc. of Computer
          Science (Advanced CS Specialisation), in my year 3 semester 2. During
          free time, I build web apps, games and even desktop tools for
          productivity (and fun!).
        </p>
      </ul>

      <div className="flex justify-end">
        <a
          href="https://www.linkedin.com/in/aaron-lam-609bb1309/"
          target="_blank"
        >
          Contact me on LinkedIn!
        </a>
      </div>
      <div className="flex justify-end">
        <a href="https://github.com/Kyblue11?tab=repositories" target="_blank">
          Check out my Github projects!
        </a>
      </div>
      <div className="flex justify-end">
        <a href="https://www.youtube.com/@kyblue11/videos" target="_blank">
          See me talking!
        </a>
      </div>
    </>
  );
}
