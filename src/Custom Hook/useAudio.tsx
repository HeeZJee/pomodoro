import { useState, useEffect } from "react";

const useAudio = (url: string): [boolean, () => void] => {
  const [audio] = useState<HTMLAudioElement>(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);
  audio.loop = true;

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  return [playing, toggle];
};

export default useAudio;
