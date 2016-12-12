window.addEventListener('mouseup', function(event){
  var box = document.getElementById('box1');
  if(event.target != box && event.target.parentNode != box) {
    box.style.display = 'none';
  }
});

window.addEventListener('touchstart', function(event){
  var box = document.getElementById('box1');
  if(event.target != box && event.target.parentNode != box) {
    box.style.display = 'none';
  }
});