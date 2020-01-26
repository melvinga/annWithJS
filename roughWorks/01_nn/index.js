const X_MAX = 500;
const Y_MAX = 500;
const TOTAL_NUM_OF_POINTS = 3000;
const TRAINING_SET_SIZE = 200;
const LEARNING_RATE = 0.01;
const randomWeights = {
  x: randomWeightGenerator(),
  y: randomWeightGenerator()
};
const randomPoints = generatePoints(TOTAL_NUM_OF_POINTS);

function randomWeightGenerator() {
  let num = Math.random();
  num *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
  
  return num;
}
function generatePoints(numOfPoints) {
  let arrOfPoints = [];

  for(var i=0;i<numOfPoints;i++) {
    arrOfPoints.push({
      x: Math.floor(Math.random() * X_MAX),
      y: Math.floor(Math.random() * Y_MAX) 
    });
  }

  return arrOfPoints;
}

function isBelowLine(point) {
  return point.x < point.y ? true : false;
}

function isOnLine(point) {
  return point.x === point.y ? true : false;
}

function guess(weights, point) {
  let retVal = 'aqua';

  const sum = point.x * weights.x
            + point.y * weights.y;
  // console.log('sum: ',sum);
  const compareNum = Math.floor((X_MAX + Y_MAX) / 2);

  retVal = sum > compareNum ? 'red' : sum < compareNum ? 'green' : 'blue';

  return retVal;
}

function actualColorOfPoint(point) {
  return isBelowLine(point) ? 'green' : isOnLine(point) ? 'blue' : 'red';
}

function train(weights, point, actualColor) {
  const guessResult = guess(weights, point);
  const error = (guessResult !== actualColor)
                  ? (((guessResult === 'green') && (actualColor === 'blue'))
                      || ((guessResult === 'blue') && (actualColor === 'red')))
                    ? 1
                    : (guessResult === 'green') && (actualColor === 'red')
                      ? 2
                      : (((guessResult === 'blue') && (actualColor === 'green'))
                          || ((guessResult === 'red') && (actualColor === 'blue')))
                        ? -1
                        : -2
                  : 0;
  return {
    x: weights.x + (point.x * error * LEARNING_RATE),
    y: weights.y + (point.y * error * LEARNING_RATE)
  };
}

function testTrain() {
  const point = {x: 200, y: 200}; // green
  return train(randomWeights, point, actualColorOfPoint(point));
}

function trainedWeights() {
  const examplePoints = generatePoints(TRAINING_SET_SIZE).map(point => ({
    point,
    color: actualColorOfPoint(point)
  }));

  let currentWeights = JSON.parse(JSON.stringify(randomWeights));
  for(const examplePoint of examplePoints) {
    currentWeights = train(currentWeights, examplePoint.point, examplePoint.color);
  }

  return currentWeights;
}

document.body.innerHTML = (
  `<p>Random Weights are x = ${randomWeights.x} and y = ${randomWeights.y}</p>
  <p>trainedWeights() returns ${JSON.stringify(trainedWeights(),null,2)}</p>
  <svg width="${X_MAX}" height="${Y_MAX}">
    ${randomPoints.map(point => 
      `<circle cx="${point.x}" cy="${point.y}" r="3"
        fill="${guess(trainedWeights(), point)}"
      />`
    )}
    <line x1="0" x2="${X_MAX}" y1="0" y2="${Y_MAX}"
      stroke="purple"
    />
  </svg>`
);