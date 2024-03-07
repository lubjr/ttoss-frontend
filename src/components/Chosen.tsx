export function Chosen() {
  return (
    <div className="flex space-x-8">

          <div className="text-center">
          <p className="text-1xl font-bold">Benson Boone - Beautiful Things (Official Music Video)</p>
          <p className="text-sm mb-2">rating: <span className="text-sm font-bold">1000</span></p>
            <div className="relative w-[520px] h-[380px] rounded-lg overflow-hidden">
              
              <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/Oa_RSwwpPaA?si=8Oowkn4oK4kJh3Jv"></iframe>
              
            </div>
            <button className="m-2 p-8 py-2 text-center text-zinc-900 bg-gray-200 rounded-lg hover:bg-gray-300">Winner</button>
          </div>
          
          <div className="text-center">
          <p className="text-1xl font-bold">Seafret - Atlantis (Official Video)</p>
          <p className="text-sm mb-2">rating: <span className="text-sm font-bold">1000</span></p>
            <div className="relative w-[520px] h-[380px] rounded-lg overflow-hidden">
              
              <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/gVAy3IZiL0s?si=ekz_hBjpIZg8-IrA"></iframe>
              
            </div>
            <button className="m-2 p-8 py-2 text-center text-zinc-900 bg-gray-200 rounded-lg hover:bg-gray-300">Winner</button>
          </div>

    </div>
  );
}
