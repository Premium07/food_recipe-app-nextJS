import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full min-h-screen rounded bg-zinc-500">
      <Skeleton />
    </div>
  );
};

export default Loading;
