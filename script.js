const add = document.querySelector('.add')
const remove = document.querySelector('.remove')

window.onload = function () {

    var canvas = document.createElement("canvas"),
        c = canvas.getContext("2d");
    remove.addEventListener('click', function () {
        const context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);
    })
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.body.appendChild(canvas);


    // Function to draw Square on canvas
    add.addEventListener('click', function () {
        function drawSquare() {
            var x = Math.floor(Math.random() * canvas.width);
            var y = Math.floor(Math.random() * canvas.height);
            var color = (Math.random() * 360);
            c.fillStyle = "hsl(" + color + ", 100%, 50%)";
            c.fillRect(x, y, 10, 10);
        };
        for (let squares = 0; squares < 100; squares++) {
            drawSquare();
        }
    })
}



