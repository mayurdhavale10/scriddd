import React from "react";

export const Skeleton = ({ name }: { name: string }) => {
  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm">
      <p className="text-sm text-gray-400">Loading {name}...</p>
      <div className="mt-2 h-4 bg-gray-600/30 animate-pulse rounded w-1/2" />
      <div className="mt-2 h-4 bg-gray-600/20 animate-pulse rounded w-1/3" />
    </div>
  );
};
