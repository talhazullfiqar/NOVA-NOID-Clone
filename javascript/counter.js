
function animateCounter(id, start, end, duration) {
    const element = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// window.onload = function () {
//     animateCounter("clients-counter", 0, 1642, 2000);
//     animateCounter("projects-counter", 0, 2758, 2000);
//     animateCounter("countries-counter", 0, 53, 2000);
//     animateCounter("offices-counter", 0, 3, 2000);
// };

export default animateCounter;