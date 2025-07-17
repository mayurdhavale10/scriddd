"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function SkeletonLoader({
  className,
  width = "w-full",
  height = "h-4",
}: {
  className?: string;
  width?: string;
  height?: string;
}) {
  return (
    <div
      className={cn(
        "animate-pulse rounded bg-gray-200 dark:bg-gray-700",
        width,
        height,
        className
      )}
    />
  );
}
