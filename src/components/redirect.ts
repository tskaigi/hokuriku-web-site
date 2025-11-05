"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {
  path: string;
};

export const Redirect = ({ path }: Props) => {
  const router = useRouter();
  useEffect(() => {
    router.push(path);
  }, [path]);

  return null;
};
