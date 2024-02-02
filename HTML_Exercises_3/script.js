function changeTextColor(){
    var textElement = document.getElementById('textToChange');
    textElement.style.color = 'red';
}

document.getElementById('changeColorBtn').addEventListener('click', changeTextColor);

