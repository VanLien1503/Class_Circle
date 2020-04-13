let Circle = function (radius) {
    this.getRadius = function () {
        return radius;
    };
    this.getArea = function () {
        return Math.PI * radius * radius
    };
    this.getPerimeter = function () {
        return 2 * radius * Math.PI
    }
};
let circle = new Circle(parseInt(prompt("Nhập bán Kính")));
let area = circle.getArea();
let radius = circle.getRadius();
let perimter = circle.getPerimeter();
document.getElementById('result').innerHTML='area= ' + area + '<br>' +
    'radius = ' + radius + '<br>'+'preimter = ' + perimter;
