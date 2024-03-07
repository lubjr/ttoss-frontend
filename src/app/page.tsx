import { Chosen } from "@/components/Chosen";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-950 text-zinc-50">
      <h1 className="text-4xl font-bold mb-14">The best youtube video of "All time"</h1>
      <Chosen />
    </div>
  );
}