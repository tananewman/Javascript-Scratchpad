window.onload = () => {
    var isBlack = false;
    document.getElementById("clickMe").addEventListener("click", () => {
        if (isBlack){
            document.body.style.backgroundColor = "white";
        } else {
            document.body.style.backgroundColor = "black";
        }
        isBlack = !isBlack;
    });
}
