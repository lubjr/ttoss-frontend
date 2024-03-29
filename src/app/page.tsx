'use client';
import SignButtons from "@/components/SignButtons";
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
    <div className="justify-center h-screen items-center">
      
      <SignButtons />

      <div className="mt-10">
        {videoList.slice(0, showMore ? videoList.length : 3).map((video, index) => (
          <div key={video.rating} className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <p className="font-bold mr-2">{index + 1}.</p>
              <p>{video.title}</p>
            </div>
            <p className="font-semibold">Score: {video.rating}</p>
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

      <div className="max-w-screen-xl mx-auto text-center mt-10">
        <a href="/game" className="bg-gray-900 text-white font-semibold py-4 px-8 rounded-md mb-2 inline-block hover:bg-gray-800">Play Now</a>
      </div>

      
      <div className="max-w-screen-xl mx-auto text-center mt-5">
        <p className="mb-4">"To add video, please create an account or sign up"</p>
      </div>
      
    </div> 
    
  );
}