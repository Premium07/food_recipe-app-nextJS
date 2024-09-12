import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-10">
      <h2 className="text-2xl font-bold">
        <code className="italic font-extrabold">Error 404</code> : This Page
        cannot be found.
      </h2>
      <Link
        href={"/"}
        className="rounded-sm bg-zinc-900 text-slate-200 py-2 px-5"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
