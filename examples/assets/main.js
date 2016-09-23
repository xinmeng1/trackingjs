/**
 * Created by mengxin on 23/09/16.
 */
window.onload = function() {
  var img = document.getElementById('img');
  //var img2 = document.getElementById('img2');
  var img3 = document.getElementById('img3');
  var tracker = new tracking.ObjectTracker(['face']);
  tracker.setStepSize(1.7);

  tracking.track('#img', tracker);
  //tracking.track('#img2', tracker);
  //tracking.track('#img3', tracker);
  tracker.on('track', function(event) {
    event.data.forEach(function(rect) {
      window.plot(rect.x, rect.y, rect.width, rect.height);
    });
  });

  var tracker2 = new tracking.ObjectTracker(['face']);
  tracker2.setStepSize(1.7);
  tracking.track('#img3', tracker2);
  //tracking.track('#img2', tracker);
  //tracking.track('#img3', tracker);
  tracker2.on('track', function(event) {
    event.data.forEach(function(rect) {
      window.plot(rect.x, rect.y, rect.width, rect.height);
    });
  });

  window.plot = function(x, y, w, h) {
    var rect = document.createElement('div');
    document.querySelector('.demo-container').appendChild(rect);
    rect.classList.add('rect');
    rect.style.width = w + 'px';
    rect.style.height = h + 'px';
    rect.style.left = (img.offsetLeft + x) + 'px';
    rect.style.top = (img.offsetTop + y) + 'px';
  };
};
