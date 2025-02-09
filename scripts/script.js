// Tìm tọa độ của con chuột

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

// Làm gián điệp để theo dõi con chuột / thao tác cảm ứng 🐧

$(window).on('mousemove click', function (e) {

var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
lFollowX = (20 * lMouseX) / 100; 
lFollowY = (10 * lMouseY) / 100;

});

// Đổi nền của web theo ngày nè
// Cre: chezzakowo
// Có thể đổi vùng để thấy ảnh nền khác

function setBackground() {
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  let folderName;
   
// Theo dõi các thời điểm trong ngày theo giờ
// Thời điểm nó sẽ đổi nền theo thời điểm trong ngày là:
    // Sáng: 5:00 đến 9:59.
    // Trưa: 10:00 đến 14:59.
    // Chiều: 15:00 đến 17:45.
    // Tối: Từ 17:30 trở đi.

if (currentHour >= 5 && currentHour < 10) {  
    folderName = 'Morning';
} else if (currentHour >= 10 && currentHour < 15) {  
    folderName = 'Afternoon';
} else if (currentHour >= 15 && currentHour < 18 || (currentHour === 17 && currentMinute <= 45)) {  
    folderName = 'Evening';
} else {  
    folderName = 'Night';
}


  const images = {
    Morning: ['morning1.jpg', 'morning2.jpg', 'morning3.jpg', 'morning4.jpg', 'morning5.jpg', 'morning6.jpg', 'morning7.jpg'],
    Afternoon: ['afternoon1.jpg', 'afternoon2.jpg', 'afternoon3.jpg', 'afternoon4.jpg', 'afternoon5.jpg', 'afternoon6.jpg', 'afternoon7.jpg'],
    Evening: ['evening1.jpg', 'evening2.jpg', 'evening3.jpg', 'evening4.jpg', 'evening5.jpg', 'evening6.jpg', 'evening7.jpg'],
    Night: ['night1.jpg', 'night2.jpg', 'night3.jpg', 'night4.jpg', 'night5.jpg', 'night6.jpg', 'night7.jpg']
};



  const imageList = images[folderName];
  const randomImage = imageList[Math.floor(Math.random() * imageList.length)];

// Cấu trúc cũ: const backgroundPath = `assets/backgrounds/DayTime/${folderName}/${randomImage}`;
  const backgroundPath = `https://raw.githubusercontent.com/chezzakowo/LunarSMP-Website/refs/heads/main/assets/Backgrounds/Daytime/${folderName}/${randomImage}`
  document.querySelector('.page').style.backgroundImage = `url('${backgroundPath}')`; //Update nền trên máy người dùng
}

// Kiểm tra xem nếu người dùng đã hoàn thành việc tải trang và đặt nền
document.addEventListener('DOMContentLoaded', setBackground);


  

function copyToClipboard(text) {
    const tempInput = document.createElement('input'); // Biến tạm

    tempInput.style.position = 'absolute'; // Tuyệt đối điện ảnh 🐧

    tempInput.style.left = '-9999px';
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('THÔNG BÁO TỪ PHÍA ADMIN: Bọn mình đã đóng server vào lúc 18:00 08/02/2025 và khép lại 7 mùa rồi! Chi tiết các bạn có thể đọc tại https://discord.com/channels/1265607575060348979/1266618333311275070/1337840245739094016 nếu như bạn đã tham gia server Discord của bọn mình! Link vô server Discord đã được copy cho bạn rồi đấy! Sẵn tiện nói luôn thì biết đâu hè bọn mình mở lại nhưng mình không biết nữa á nha!' ); // + text
}

    animate();
