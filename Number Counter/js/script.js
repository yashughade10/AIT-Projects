let score = 0;
const decreaseCounter = () => {
    score -= 1;
    document.getElementById('count').innerHTML = score;
}
const increaseCounter = () => {
    score += 1;
    document.getElementById('count').innerHTML = score;
}
const resetCounter = () => {
    score = 0;
    document.getElementById('count').innerHTML = score;
}