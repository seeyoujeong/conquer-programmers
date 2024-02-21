// [3차] 방금그곡

function solution(m, musicinfos) {
  const newMelody = replaceSharp(m);
  const newMusicInfos = musicinfos.map((info) => {
    const [start, end, title, melody] = info.split(",");
    const playingTime = getMinute(end) - getMinute(start);
    const newMelody = replaceSharp(melody);
    const playedMelody =
      newMelody.length > playingTime
        ? newMelody.slice(0, playingTime)
        : newMelody.repeat(Math.ceil(playingTime / newMelody.length));

    return [playingTime, title, playedMelody];
  });

  const filteredMusicInfos = newMusicInfos.filter(([, , melody]) =>
    melody.includes(newMelody)
  );

  if (filteredMusicInfos.length === 0) {
    return "(None)";
  }

  filteredMusicInfos.sort(([time1], [time2]) => time2 - time1);

  return filteredMusicInfos[0][1];
}

function getMinute(time) {
  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}

function replaceSharp(melody) {
  const sharpList = ["C#", "D#", "F#", "G#", "A#"];
  const replaceList = ["c", "d", "f", "g", "a"];

  sharpList.forEach((sharp, idx) => {
    melody = melody.replaceAll(sharp, replaceList[idx]);
  });

  return melody;
}
