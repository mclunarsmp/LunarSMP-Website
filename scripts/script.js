var lFollowX = 0,
lFollowY = 0,
x = 0,
y = 0,
friction = 1 / 30;

function animate() {
x += (lFollowX - x) * friction;
y += (lFollowY - y) * friction;

translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

$('.page').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
});

window.requestAnimationFrame(animate);
}

$(window).on('mousemove click', function (e) {

var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
lFollowX = (20 * lMouseX) / 100; 
lFollowY = (10 * lMouseY) / 100;

});

function setBackground() {
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  let folderName;

  if (currentHour >= 5 && (currentHour < 12 || (currentHour === 11 && currentMinute < 59))) {
      folderName = 'Morning';
  } else if ((currentHour === 12 && currentMinute === 0) || (currentHour >= 12 && currentHour < 16) || (currentHour === 16 && currentMinute < 30)) {
      folderName = 'Afternoon';
  } else if (currentHour === 16 && currentMinute >= 30 || (currentHour === 17 && currentMinute < 30)) {
      folderName = 'Evening';
  } else {
      folderName = 'Night';
  }

  const images = {
      Morning: ['morning1.jpg', 'morning2.jpg', 'morning3.jpg'],
      Afternoon: ['afternoon1.jpg', 'afternoon2.jpg', 'afternoon3.jpg'],
      Evening: ['evening1.jpg', 'evening2.jpg', 'evening3.jpg'],
      Night: ['night1.jpg', 'night2.jpg', 'night3.jpg', 'night4.jpg']
  };


  const imageList = images[folderName];
  const randomImage = imageList[Math.floor(Math.random() * imageList.length)];

  const backgroundPath = `assets/backgrounds/DayTime/${folderName}/${randomImage}`;
  document.querySelector('.page').style.backgroundImage = `url('${backgroundPath}')`;
}

document.addEventListener('DOMContentLoaded', setBackground);

  
  

function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.style.position = 'absolute';
    tempInput.style.left = '-9999px';
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Đã copy địa chỉ vào server: ' + text);
}

animate();