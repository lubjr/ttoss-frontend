import { Chosen } from "../components/Chosen";
//import { User, AtSign, Key } from 'lucide-react'

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-14 font-alt">The best youtube video of "All time"</h1>
      <Chosen />
    </div>
  );
}