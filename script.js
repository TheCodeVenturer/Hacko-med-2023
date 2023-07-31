const body = document.querySelector('body');

const leftHandImage = document.getElementById('leftImage');
const rightHandImage = document.getElementById('rightImage');

const leftHandCanvas = document.getElementById('leftHand'); // Reference the canvas element
const rightHandCanvas = document.getElementById('rightHand'); // Reference the canvas element
 // Reference the canvas element
const ctxLeft = leftHandCanvas.getContext('2d');
const ctxRight = rightHandCanvas.getContext('2d');

leftHandCanvas.width = leftHandImage.width;
leftHandCanvas.height = leftHandImage.height;

rightHandCanvas.width = rightHandImage.width;
rightHandCanvas.height = rightHandImage.height;

ctxLeft.drawImage(leftHandImage, 0, 0);
ctxRight.drawImage(rightHandImage, 0, 0);

// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('change', () => {
//     ctx.clearRect(0, 0, highlightCanvas.width, highlightCanvas.height);
//     ctx.drawImage(highlightImage, 0, 0);

//     checkboxes.forEach(checkbox => {
//       const point = checkbox.getAttribute('data-point');
//       const highlightPoint = document.getElementById(`highlight-${point}`);
//       if (checkbox.checked) {
//         
//         ctx.beginPath();
//         ctx.arc(45, 50, 2, 0, 2*Math.PI);
//         ctx.stroke();
//         ctx.fillStyle = 'red'; /* Adjust the highlight color as needed */
//         ctx.fill();
//       }
//     });
//   });
// });




const downloadButton = document.getElementById('download-button');

downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = highlightCanvas.toDataURL(); // Save the canvas image as a data URL
  console.log(link.href);
  link.download = 'highlighted-image.png'; // Set the downloaded file's name
  link.click(); // Trigger the download
});