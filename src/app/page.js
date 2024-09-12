import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-start justify-center">
      <div className="w-10/12 flex flex-col justify-start mt-20 items-center gap-20">
        <h1 className="text-center text-5xl font-semibold uppercase">
          Search all the Recipes you want....
        </h1>
        <Link
          href={"recipes"}
          className="py-5 px-20 rounded border-2 border-zinc-900 text-2xl font-semibold text-zinc-900 shadow-[-7px_7px_0px_#000] duration-150"
        >
          Explore Recipies
        </Link>
      </div>
    </main>
  );
}
