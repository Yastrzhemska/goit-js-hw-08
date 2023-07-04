import Player from '@vimeo/player';
// console.log(Player);
import throttle from 'lodash.throttle';
// console.log(throttle);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = Number(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(currentTime).then(function (seconds) {

}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
        
            break;
        default:
        
            break;
    }
});

player.setColor('#45a247').then(function (color) {
    // the color that was set
}).catch(function (error) {
    
});
