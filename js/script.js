document.getElementById("formContacto").addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let ciudad = document.getElementById("ciudad").value;
    let mensaje = document.getElementById("mensaje").value;

    document.getElementById("resultado").innerHTML =
        `<b>Nombre:</b> ${nombre}<br>
         <b>Apellido:</b> ${apellido}<br>
         <b>Correo:</b> ${correo}<br>
         <b>Teléfono:</b> ${telefono}<br>
         <b>Ciudad:</b> ${ciudad}<br>
         <b>Mensaje:</b> ${mensaje}`;

    document.getElementById("modal").style.display = "flex";
});

function cerrarModal(){
    document.getElementById("modal").style.display = "none";
}
