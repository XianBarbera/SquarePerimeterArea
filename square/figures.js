function squarePerimeter(side) {

    return side * 4;

}

perimetroCuadrado()


function squareArea(side) {

    return side * side;

}

function calculateSquarePerimeter() {
    const input = document.getElementById("InputSquare")
    const value = input.value;

    const perimeter = squarePerimeter(value);

    document.getElementById("sideValue").innerHTML = perimeter;
}

function calculateSquareArea() {
    const input = document.getElementById("InputSquare")
    const value = input.value;

    const area = squareArea(value);
    document.getElementById("sideValue").innerHTML = area;
}