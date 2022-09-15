

// var progress_bar = [document.getElementById('first'), document.getElementById('second')];
// console.log("prog len " + progress_bar[0])

// console.log("prog len " + progress_bar.length)
// var i = 0;
// var n = 0;
// while (n <= progress_bar.length) {
//     move(); 
//     n++
//     console.log("n =" + n);
// };
function move() {
    var progress_bar = document.getElementById('first');

    // progress_bar = progress_bar[i];
    // console.log("i =" + i);
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            // width = width + 0.07;
            width++
            progress_bar.style.width = width + '%';

        }
    }
    // i++
    // console.log("i =" + i);
    // console.log("prog len " + progress_bar[1])


}

// move();



// document.addEventListener('DOMContentLoaded', () => {
//     let box = document.querySelector('.card_item');
//     box.addEventListener('click', chooseSide);
// });

// function chooseSide(e) {
//     const { clientX, clientY } = e;
//     const { clientHeight, clientWidth } = box
//     if (clientY > (clientHeight / 2)) {
//         console.log('bottom')
//     } else if (clientX < (clientWidth / 2)) {
//         console.log('left')
//     } else {
//         console.log('right')
//     }
// }