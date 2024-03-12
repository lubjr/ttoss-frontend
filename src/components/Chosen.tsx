'use client';
import { api } from "@/lib/api";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

interface Video {
  pk: string;
  sk: string;
  title: string;
  rating: number;
  url: string;
}

export function Chosen() {
  const [videoList, setVideoList] = useState<Video[]>([]);
  const K_FACTOR = 32;
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/videos/two');
        setVideoList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    console.log(videoList);
  }, [videoList]);

  const handleWinner = (chosenVideo: Video) => {
    // Obtenha os ratings dos dois vídeos
    const rating1 = videoList[0].rating;
    const rating2 = videoList[1].rating;
  
    // Calcule as probabilidades de vitória para cada vídeo usando a função de expectativa de vitória
    const expected1 = 1 / (1 + Math.pow(10, (rating2 - rating1) / 400));
    const expected2 = 1 / (1 + Math.pow(10, (rating1 - rating2) / 400));
  
    // Se o vídeo escolhido vencer
    if (chosenVideo === videoList[0]) {
      const newRating1 = Math.round(rating1 + K_FACTOR * (1 - expected1));
      const newRating2 = Math.round(rating2 + K_FACTOR * (0 - expected2));
      updateVideoRating(videoList[0].pk, videoList[0].sk, newRating1);
      updateVideoRating(videoList[1].pk, videoList[1].sk, newRating2);
    } else {
      // Se o vídeo escolhido perder
      const newRating1 = Math.round(rating1 + K_FACTOR * (0 - expected1));
      const newRating2 = Math.round(rating2 + K_FACTOR * (1 - expected2));
      updateVideoRating(videoList[0].pk, videoList[0].sk, newRating1);
      updateVideoRating(videoList[1].pk, videoList[1].sk, newRating2);
    }
    router.push('/');
  };
  
  const updateVideoRating = async (pk: string, sk: string, rating: number) => {
    try {
      const response = await api.post('/videos/update', null, {
        params: {
          pk: pk,
          sk: sk,
          rating: rating
        }
      });
      console.log('Rating do vídeo atualizado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao atualizar o rating do vídeo:', error);
    }
  };
  

  return (
    <div className="flex space-x-8">
      {videoList.map((video, index) => (
        <div key={index} className="text-center">
          <p className="text-1xl font-bold">{video.title}</p>
          <p className="text-sm mb-2">rating: <span className="text-sm font-bold">{video.rating}</span></p>
          <div className="relative w-[520px] h-[380px] rounded-lg overflow-hidden">
            <iframe className="absolute inset-0 w-full h-full" src={video.url}></iframe>
          </div>
          <button onClick={() => handleWinner(video)} className="m-2 p-8 py-2 text-center text-zinc-900 bg-gray-200 rounded-lg hover:bg-gray-300 font-bold">Winner</button>
        </div>
      ))}
    </div>
  );
}