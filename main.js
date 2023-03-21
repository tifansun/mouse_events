div = document.getElementById('detectar_evento');
mouse_event = "empty";
evento_detectado = document.getElementById('evento_detectado');

div.addEventListener("mousedown", function (e) {
    div.style.background = "#feb236";
    mouse_event = "clicked";
    evento_detectado.innerHTML = "mouse down";
});

div.addEventListener("mousemove", function (e) {
    div.style.background = "#d64161#d64161";
    evento_detectado.innerHTML = "mouse move";

    if (mouse_event == "clicked") {
        evento_detectado.innerHTML = "mouse down <br>+<br> mouse move";
        div.style.background = "#ff7b25";
    }
});

div.addEventListener("mouseup", function (e) {
    div.style.background = "#6b5b95";
    mouse_event = "mouseUp";
    evento_detectado.innerHTML = "mouse up";
});

div.addEventListener("mouseleave", function (e) {
    div.style.background = "grey";
    mouse_event = "mouseDown";
    evento_detectado.innerHTML = "mouse leave";
});
