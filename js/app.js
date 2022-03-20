document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random() * 80;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';   

    let tranformValue = Math.random() * 360;
    heart.style.transform = 'rotate('+ tranformValue +'deg)';

    body.appendChild(heart);

    setTimeout(function() {
        heart.remove();

    }, 1000)
    console.log(heart);
})
