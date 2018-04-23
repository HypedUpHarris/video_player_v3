const video = document.querySelector('video');
const span = document.querySelectorAll('span');

video.addEventListener('timeupdate', () => {
    let time = video.currentTime;
    for (i = 0; i < span.length; i++){
        if(span[i].getAttribute('data-start') < time && time < span[i].getAttribute('data-end')) {
            span[i].style.color = "rgba(112, 253, 230, 0.7)";
            span[i].style.backgroundColor = "#4F4E49";
        } else {
            span[i].style.color = "initial"
            span[i].style.backgroundColor = "initial";
        }
    }
});

for(i= 0; i < span.length; i++){
    span[i].addEventListener('click', (e) => {
        video.currentTime = e.target.getAttribute('data-start');
        video.play();
    })
}
