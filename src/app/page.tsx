'use client';
import { api } from "@/lib/api";
import { useState, useEffect } from "react";

interface Video {
  title: string;
  rating: number;
}

export default function Home() {
  const [videoList, setVideoList] = useState<Video[]>([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await api.get('/videos/listrating');
        setVideoList(list.data);
      } catch (error) {
        console.log(error);
      }
    }
      fetchData();
  }, []);

  return (
    <div className="mt-20 justify-center h-screen items-center">

      <div>
        {videoList.slice(0, showMore ? videoList.length : 3).map((video, index) => (
          <div key={video.rating} className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <p className="font-bold mr-2">{index + 1}.</p>
              <p>{video.title}</p>
            </div>
            <p className="font-semibold">{video.rating}</p>
          </div>
        ))}
        {videoList.length > 3 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className={`text-blue-500 hover:underline ${showMore ? 'mt-4' : 'mt-2'}`}
          >
            {showMore ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>

      <div className="mt-10">
        
        <button className="bg-gray-900 text-white font-semibold py-4 px-8 rounded-md mb-2 hover:bg-gray-800">Play Now</button>
      </div>

    </div> 
  );
}