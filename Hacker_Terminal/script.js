function getRandomNumber1to7() {
    return Math.floor(Math.random() * 7) + 1;
}
// Example usage:
console.log(getRandomNumber1to7());

function a () {
    setTimeout(() => {
        return document.querySelector('.terminal').innerHTML
    }, getRandomNumber1to7()*7000);
}