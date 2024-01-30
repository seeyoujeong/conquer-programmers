// 다리를 지나는 트럭

function solution(bridgeLength, weight, truckWeights) {
  let totalSeconds = 1;
  let truckWeightOnBridge = 0;
  let truckPassingBridge = [];

  while (truckWeights.length > 0 || truckPassingBridge.length > 0) {
    if (
      truckWeightOnBridge + truckWeights[0] <= weight &&
      truckPassingBridge.length < bridgeLength
    ) {
      const truckWeight = truckWeights.shift();
      truckPassingBridge.push([truckWeight, totalSeconds + bridgeLength]);
      truckWeightOnBridge += truckWeight;
      totalSeconds += 1;
    } else {
      const [truckWeight, passedSeconds] = truckPassingBridge.shift();

      if (totalSeconds < passedSeconds) {
        totalSeconds = passedSeconds;
      }

      truckWeightOnBridge -= truckWeight;
    }
  }

  return totalSeconds;
}
