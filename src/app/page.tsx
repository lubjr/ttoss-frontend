export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-950 text-zinc-50">
      <h1 className="text-4xl font-bold mb-8">The best youtube video of "All time"</h1>
      <div className="flex space-x-8">
        <div className="relative w-[520px] h-[380px] rounded-lg overflow-hidden">
          <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/Oa_RSwwpPaA?si=8Oowkn4oK4kJh3Jv"></iframe>
          <button className="absolute bottom-0 left-0 w-full py-2 text-center text-zinc-900 bg-gray-200 rounded-lg hover:bg-gray-300">Winner</button>
        </div>
        <div className="relative w-[520px] h-[380px] rounded-lg overflow-hidden">
          <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/gVAy3IZiL0s?si=ekz_hBjpIZg8-IrA"></iframe>
          <button className="absolute bottom-0 left-0 w-full py-2 text-center text-zinc-900 bg-gray-200 rounded-lg hover:bg-gray-300">Winner</button>
        </div>
      </div>
    </div>
  );
}