const leftHandCanvas = document.getElementById('leftHand');
const rightHandCanvas = document.getElementById('rightHand');

// Get the context for each canvas
const ctxLeft = leftHandCanvas.getContext('2d');
const ctxRight = rightHandCanvas.getContext('2d');

// Function to draw the image on the canvas with proper scaling
function drawImageScaled(ctx, img) {
  const canvasWidth = ctx.canvas.width;
  const canvasHeight = ctx.canvas.height;

  // Calculate the scaling factors to fit the image into the canvas
  const scaleX = canvasWidth / img.width;
  const scaleY = canvasHeight / img.height;
  const scale = Math.min(scaleX, scaleY);

  // Calculate the new width and height of the scaled image
  const newWidth = img.width * scale;
  const newHeight = img.height * scale;

  // Calculate the offset to center the scaled image on the canvas
  const offsetX = (canvasWidth - newWidth) / 2;
  const offsetY = (canvasHeight - newHeight) / 2;

  // Draw the scaled image on the canvas
  ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
}

// Function to draw a highlight at the clicked position
function drawHighlight(ctx, x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
}

// Event listener for the click on the left-hand canvas
leftHandCanvas.addEventListener('click', function(event) {
  // Get the mouse position relative to the canvas
  const rect = leftHandCanvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  if(count==0){
    frontX = x
    frontY = y
    count++
  }
  else{
    backX = x
    backY = y
    count = 0
    const key = `${keyHead}${idx}`
    keyDict[key] = [frontX,frontY,backX,backY]
    idx++
  }
  // Draw the highlight at the clicked position on the left-hand canvas
  drawHighlight(ctxLeft, x, y);
});

// Event listener for the click on the right-hand canvas
let count = 0
let idx=1;
let frontX,frontY,backX,backY;
rightHandCanvas.addEventListener('click', function(event) {
  // Get the mouse position relative to the canvas
  const rect = rightHandCanvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  if(count==0){
    frontX = x
    frontY = y
    count++
  }
  else{
    backX = x
    backY = y
    count = 0
    const key = `${keyHead}${idx}`
    keyDict[key] = [frontX,frontY,backX,backY]
    idx++
  }

  // Draw the highlight at the clicked position on the right-hand canvas
  drawHighlight(ctxRight, x, y);
});

// After the images have loaded, draw them onto the canvases with proper scaling
const leftHandImage = document.getElementById('leftImage');
const rightHandImage = document.getElementById('rightImage');

const leftImageReload = () =>{
  leftHandCanvas.width = leftHandImage.width;
  leftHandCanvas.height = leftHandImage.height;
  drawImageScaled(ctxLeft, leftHandImage);
}

leftHandImage.onload = leftImageReload

const rightImageReload = () =>{
  rightHandCanvas.width = rightHandImage.width;
  rightHandCanvas.height = rightHandImage.height;
  drawImageScaled(ctxRight, rightHandImage);
}
rightHandImage.onload = rightImageReload

let keyHead
let keyDict = {}

document.addEventListener('keydown', (event) => {
  var name = event.key;
  // Alert the key name and key code on keydown
  if(name == 'n')
    keyHead = prompt("Enter the name of section:")
  if(name == 's'){
    console.log(JSON.stringify(keyDict))
    rightImageReload()
    leftImageReload()
  }
  if(name =='r'){
    keyDict = {}
    keyHead = null
    rightImageReload()
    leftImageReload()
    console.log("Reset")
  }
}, false);