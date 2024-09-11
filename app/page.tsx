"use client";

import { trpc } from "@/server/client";

export default function Home() {
  const users = trpc.users.get.useQuery();

  return (
    <div className="w-full h-screen border border-slate-900 px-4 py-4 text-center">{JSON.stringify(users.data)}</div>
  );
}
