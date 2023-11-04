function changebg(color) {
    document.body.style.backgroundColor = color;
    let text = document.getElementsByClassName("Textpart");
    // console.log(typeof text);
    if (color == "#000000" || color == "#0000FF" || color == "#3a5155") {
        for (let elm of text) {
            elm.style.color = "white";
        }
    }
    else {
        for (let elm of text) {
            elm.style.color = "black";
        }
    }
};
