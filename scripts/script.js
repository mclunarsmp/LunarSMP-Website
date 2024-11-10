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
lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
lFollowY = (10 * lMouseY) / 100;

});

function copyToClipboard(text) {
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.style.position = 'absolute';
    tempInput.style.left = '-9999px';
    tempInput.value = text;
    document.body.appendChild(tempInput);
    
    // Select the text in the input and copy it
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    
    // Remove the temporary input element
    document.body.removeChild(tempInput);
    
    // Optionally, show an alert or message to confirm the copy
    alert('Đã copy địa chỉ vào server: ' + text);
}
animate();
