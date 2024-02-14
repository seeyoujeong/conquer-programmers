// 호텔 대실

function solution(book_time) {
  const sortedBookTime = [...book_time].sort(
    ([aIn], [bIn]) => convertTimeToMinutes(aIn) - convertTimeToMinutes(bIn)
  );
  let count = 1;
  let rooms = [0];

  sortedBookTime.forEach(([inTime, outTime]) => {
    const inMinutes = convertTimeToMinutes(inTime);
    const outMinutes = convertTimeToMinutes(outTime);
    const availableRoomNumber = rooms.findIndex(
      (minutes) => minutes <= inMinutes
    );

    if (availableRoomNumber === -1) {
      count += 1;
      rooms.push(outMinutes + 10);
    } else {
      rooms[availableRoomNumber] = outMinutes + 10;
    }
  });

  return count;
}

function convertTimeToMinutes(stringTime) {
  const [hours, minutes] = stringTime.split(":").map(Number);
  return hours * 60 + minutes;
}
