const pickStoryToPlay = 8; // Refer storyBoardToPlay() function below to
                              // know which numbers to input
                              // and what each number refers to

const SVG_WIDTH = 500, SVG_HEIGHT = 500;

const X_MIN = 0, Y_MIN = 0;
const X_MAX = SVG_WIDTH, Y_MAX = SVG_HEIGHT;
const SVG_BORDER_CLR = 'black';
const TEAM_MID_Y = Math.floor(Y_MAX * 1/3);
const TEAM_BOTTOM_Y = Math.floor(Y_MAX * 2/3);
const TEAM_BOTTOM_CLR = 'green', TEAM_MID_CLR = 'blue', TEAM_TOP_CLR = 'red';

storyBoardToPlay(pickStoryToPlay);

function storyBoardToPlay(storySelected) {
  switch(storySelected) {
    case 0:
      showSomethingAsAlert(); break;
    case 1:
      showThatTheScriptIsLoaded(); break;
    case 2:
      makeSvgDrawingSpace(); break;
    case 3:
      makeRandomPointsInSvgSpace(); break;
    case 4:
     svgDrawingSpace(); break;
    case 5:
      svgDrawingSpace(); break;
    case 6:
      putRandomPointOnSvgSpace(); break;
    case 7:
      const numOfPoints = 50;
      makeRandomPointsWithAppropriateColors(numOfPoints); break;
    case 8:
      const weightForGuessingColor = 1.1; // Try 0.9, 1, 1.1 or anything from 0.8 to 1.2
      makeGuessForColorOfPoint(weightForGuessingColor); break;
    case 9:
      trainToGuessAndThenGuessColorOfPoint();
    default:
      alert('put a number among those listed in storyBoardToPlay() function in index.js');
  }  
}

function showSomethingAsAlert() {
  alert('Yaay! You just signed up for seeing something cool and simple.');
}

function showThatTheScriptIsLoaded() {
  document.body.innerHTML = (
    `<p>Hello! The script is loaded completely.</p>`
  );
}

function makeSvgDrawingSpace() {
  document.body.innerHTML = (
    `
    <svg width='500' height='500'>
      <line x1='0' y1='0' x2='0' y2='500' stroke='black'/>
      <line x1='0' y1='500' x2='500' y2='500' stroke='black'/>
      <line x1='500' y1='500' x2='500' y2='0' stroke='black'/>
      <line x1='500' y1='0' x2='0' y2='0' stroke='red'/>
      
      <line x1='0' y1='167' x2='500' y2='167' stroke='blue'/>
      <line x1='0' y1='334' x2='500' y2='334' stroke='green'/>
      
      <circle cx='100' cy='100' r='3' fill='red'/>
      <circle cx='200' cy='200' r='3' fill='blue'/>
      <circle cx='400' cy='400' r='3' fill='green'/>
    </svg>
    `
  );
}

function makeRandomPointsInSvgSpace() {
  document.body.innerHTML = (
    `
    <svg width='500' height='500'>
      ${[{x: Math.floor(Math.random()*500), y: Math.floor(Math.random()*500)},
          {x: Math.floor(Math.random()*500), y: Math.floor(Math.random()*500)},
          {x: Math.floor(Math.random()*500), y: Math.floor(Math.random()*500)},
          {x: Math.floor(Math.random()*500), y: Math.floor(Math.random()*500)},
          {x: Math.floor(Math.random()*500), y: Math.floor(Math.random()*500)}
        ].map(point => {
          return (
            `
            <circle cx='${point.x}' cy='${point.y}'
              r='3' fill='orange' />
            `
          );
        })
      }
    </svg>
    `
  )
}

function svgDrawingSpace() {
  document.body.innerHTML = (
    `
    <svg width='${SVG_WIDTH}' height='${SVG_HEIGHT}'>
      <line x1='${X_MIN}' y1='${Y_MIN}' x2='${X_MIN}' y2='${Y_MAX}' stroke='${SVG_BORDER_CLR}'/>
      <line x1='${X_MIN}' y1='${Y_MAX}' x2='${X_MAX}' y2='${Y_MAX}' stroke='${SVG_BORDER_CLR}'/>
      <line x1='${X_MAX}' y1='${Y_MAX}' x2='${X_MAX}' y2='${Y_MIN}' stroke='${SVG_BORDER_CLR}'/>
      
      <line x1='${X_MAX}' y1='${Y_MIN}' x2='${X_MIN}' y2='${Y_MIN}' stroke='${TEAM_TOP_CLR}'/>

      <line x1='${X_MIN}' y1='${TEAM_MID_Y}' x2='${X_MAX}' y2='${TEAM_MID_Y}' stroke='${TEAM_MID_CLR}'/>
      <line x1='${X_MIN}' y1='${TEAM_BOTTOM_Y}' x2='${X_MAX}' y2='${TEAM_BOTTOM_Y}' stroke='${TEAM_BOTTOM_CLR}'/>
    </svg>
    `
  );
}

function putRandomPointOnSvgSpace() {
  document.body.innerHTML = (
    `
    <svg width='${SVG_WIDTH}' height='${SVG_HEIGHT}'>
      <line x1='${X_MIN}' y1='${Y_MIN}' x2='${X_MIN}' y2='${Y_MAX}' stroke='${SVG_BORDER_CLR}'/>
      <line x1='${X_MIN}' y1='${Y_MAX}' x2='${X_MAX}' y2='${Y_MAX}' stroke='${SVG_BORDER_CLR}'/>
      <line x1='${X_MAX}' y1='${Y_MAX}' x2='${X_MAX}' y2='${Y_MIN}' stroke='${SVG_BORDER_CLR}'/>
      
      <line x1='${X_MAX}' y1='${Y_MIN}' x2='${X_MIN}' y2='${Y_MIN}' stroke='${TEAM_TOP_CLR}'/>

      <line x1='${X_MIN}' y1='${TEAM_MID_Y}' x2='${X_MAX}' y2='${TEAM_MID_Y}' stroke='${TEAM_MID_CLR}'/>
      <line x1='${X_MIN}' y1='${TEAM_BOTTOM_Y}' x2='${X_MAX}' y2='${TEAM_BOTTOM_Y}' stroke='${TEAM_BOTTOM_CLR}'/>

      ${[{x: Math.floor(Math.random()*X_MAX), y: Math.floor(Math.random()*Y_MAX)},
        {x: Math.floor(Math.random()*X_MAX), y: Math.floor(Math.random()*Y_MAX)},
        {x: Math.floor(Math.random()*X_MAX), y: Math.floor(Math.random()*Y_MAX)},
        {x: Math.floor(Math.random()*X_MAX), y: Math.floor(Math.random()*Y_MAX)},
        {x: Math.floor(Math.random()*X_MAX), y: Math.floor(Math.random()*Y_MAX)}
        ].map(point => {
          return (
            `
            <circle cx='${point.x}' cy='${point.y}'
              r='3' fill='orange' />
            `
          );
        })
      }
    </svg>
    `
  );
}

function generateRandomPoints(numOfPoints) {
  let pointsArr = [];
  for(var i=0; i<numOfPoints; i++) {
    pointsArr.push(
      {x: Math.floor(Math.random()*X_MAX), y: Math.floor(Math.random()*Y_MAX)}
    );
  }

  return pointsArr;
}

function calculatePointColor(yPositionOfPoint) {
  if(yPositionOfPoint > TEAM_BOTTOM_Y) { return TEAM_BOTTOM_CLR; }
  else if(yPositionOfPoint > TEAM_MID_Y) { return TEAM_MID_CLR; }
  else { return TEAM_TOP_CLR; }
}

function makeRandomPointsWithAppropriateColors(numOfPoints) {
  const randomPointsArray = generateRandomPoints(numOfPoints);
  
  document.body.innerHTML = (
    `
    <svg width='${SVG_WIDTH}' height='${SVG_HEIGHT}'>
      <line x1='${X_MIN}' y1='${Y_MIN}' x2='${X_MIN}' y2='${Y_MAX}' stroke='${SVG_BORDER_CLR}'/>
      <line x1='${X_MIN}' y1='${Y_MAX}' x2='${X_MAX}' y2='${Y_MAX}' stroke='${SVG_BORDER_CLR}'/>
      <line x1='${X_MAX}' y1='${Y_MAX}' x2='${X_MAX}' y2='${Y_MIN}' stroke='${SVG_BORDER_CLR}'/>
      
      <line x1='${X_MAX}' y1='${Y_MIN}' x2='${X_MIN}' y2='${Y_MIN}' stroke='${TEAM_TOP_CLR}'/>

      <line x1='${X_MIN}' y1='${TEAM_MID_Y}' x2='${X_MAX}' y2='${TEAM_MID_Y}' stroke='${TEAM_MID_CLR}'/>
      <line x1='${X_MIN}' y1='${TEAM_BOTTOM_Y}' x2='${X_MAX}' y2='${TEAM_BOTTOM_Y}' stroke='${TEAM_BOTTOM_CLR}'/>

      ${randomPointsArray.map(point => {
          return (
            `
            <circle cx='${point.x}' cy='${point.y}'
              r='3' fill='${calculatePointColor(point.y)}' />
            `
          );
        })
      }
    </svg>
    `
  );
}

function guessColorOfPoint(yPositionOfPoint, weightForGuessingColor) {
  const sum = yPositionOfPoint * weightForGuessingColor;
  
  if(sum > TEAM_BOTTOM_Y) { return TEAM_BOTTOM_CLR; }
  else if(sum > TEAM_MID_Y) { return TEAM_MID_CLR; }
  else { return TEAM_TOP_CLR; }
}

function makeGuessForColorOfPoint(weightForGuessingColor) {
  const numOfPoints = 20;
  const randomPointsArray = generateRandomPoints(numOfPoints);
  
  document.body.innerHTML = (
    `
    <svg width='${SVG_WIDTH}' height='${SVG_HEIGHT}'>
      <line x1='${X_MIN}' y1='${Y_MIN}' x2='${X_MIN}' y2='${Y_MAX}' stroke='${SVG_BORDER_CLR}'/>
      <line x1='${X_MIN}' y1='${Y_MAX}' x2='${X_MAX}' y2='${Y_MAX}' stroke='${SVG_BORDER_CLR}'/>
      <line x1='${X_MAX}' y1='${Y_MAX}' x2='${X_MAX}' y2='${Y_MIN}' stroke='${SVG_BORDER_CLR}'/>
      
      <line x1='${X_MAX}' y1='${Y_MIN}' x2='${X_MIN}' y2='${Y_MIN}' stroke='${TEAM_TOP_CLR}'/>

      <line x1='${X_MIN}' y1='${TEAM_MID_Y}' x2='${X_MAX}' y2='${TEAM_MID_Y}' stroke='${TEAM_MID_CLR}'/>
      <line x1='${X_MIN}' y1='${TEAM_BOTTOM_Y}' x2='${X_MAX}' y2='${TEAM_BOTTOM_Y}' stroke='${TEAM_BOTTOM_CLR}'/>

      ${randomPointsArray.map(point => {
          return (
            `
            <circle cx='${point.x}' cy='${point.y}'
              r='3' fill='${guessColorOfPoint(point.y, weightForGuessingColor)}' />
            `
          );
        })
      }
    </svg>
    `
  );
}