/**
 * Created by mengxin on 23/09/16.
 */
// initialize the test canvas and wireup cut button.
(function() {
  var can = document.getElementById('test');
  var w = can.width = 400;
  var h = can.height = 200;
  var ctx = can.getContext('2d');

  ctx.fillStyle = "#336699";
  ctx.fillRect(0, 0, 200, 200);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 20;
  ctx.strokeRect(0, 0, w, h);
  ctx.strokeRect(0, 0, w / 2, h);
  var btn = document.getElementById('cut');
  btn.addEventListener('click', function() {

    var croppedCan = crop(can, {x: 0, y: 0}, {x: 200, y: 200});

    // Create an image for the new canvas.
    var image = new Image();
    image.src = croppedCan.toDataURL();

    // Put the image where you need to.
    document.getElementsByTagName('body')[0].appendChild(image);
    return image;

  });
})();


// function crop
// Returns a cropped canvas given a cavnas and crop region.
//
// Inputs:
// can, canvas
// a, {x: number, y: number} - left top corner
// b, {x: number, y: number} - bottom right corner

function crop(can, a, b) {
  // get your canvas and a context for it
  var ctx = can.getContext('2d');

  // get the image data you want to keep.
  var imageData = ctx.getImageData(a.x, a.y, b.x, b.y);

  // create a new cavnas same as clipped size and a context
  var newCan = document.createElement('canvas');
  newCan.width = b.x - a.x;
  newCan.height = b.y - a.y;
  var newCtx = newCan.getContext('2d');

  // put the clipped image on the new canvas.
  newCtx.putImageData(imageData, 0, 0);

  return newCan;
}
