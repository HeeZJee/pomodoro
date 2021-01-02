const songsCollections = [
  "http://www.music.helsinki.fi/tmt/opetus/uusmedia/esim/a2002011001-e02.wav",
  "http://www.noiseaddicts.com/samples_1w72b820/2563.mp3",
  "http://www.noiseaddicts.com/samples_1w72b820/2558.mp3",
];

const getRandomFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randomSongIndex = getRandomFromRange(0, songsCollections.length);

console.log("Random song index is ", randomSongIndex);

const randomSong = songsCollections[randomSongIndex];
new Audio(randomSong).play();
