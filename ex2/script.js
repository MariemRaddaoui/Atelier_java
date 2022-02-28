const p = document.getElementById("test");

const change_font = () => {
    font = document.querySelector("select").value
    p.style.fontFamily = font;

}


const change_color = () => {
    color = document.getElementById("color_select").value;
    p.style.color = color;

}


const change_size = () => {
    size = document.getElementById("size_number").value;
    p.style.fontSize = size + 'px';
}