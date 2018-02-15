//Parte del JQuery Formulario
$(document).ready(function(){
    console.log("Inicio de Jquery");
    $("#informacion").submit(function(e){
        e.preventDefault();
        
        var id = $("#id").val() ;
        console.log(id);
        
        if(id != ""){
            var url  = "insertar/"+id;
            console.log("Actualizar...");
           }else{
               var url = "datos.php?ac=2";
               console.log("Agregar...");
           }
        $.ajax({
                url: url,
                type: 'POST',
                data: new FormData( this ),
                processData: false,
                contentType: false,
				success:function(data){
                    console.log(data);
                    $("#resultado").html(data);
                    if(data=="OK"){
                        alert("Se agrego correctamente");
                        $("#informacion")[0].reset();
                    }else{
                        alert("No se Agrego ");
                    }
				},
                error : function(xhr, status) {
                    alert('Error, existió un problema');
                },
        });
    });
    
});

//Funciones 
function parametro(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function datos(da){
        $(da).css("background-color", "red");
        console.log( $("#producto").val() + $("#modelo").val() + $("#sku").val() );
        $.ajax({
            url: "datos.php?ac=5",//"datos.php?ac=2"
            type: 'POST',
            data: { producto : $("#producto").val() ,modelo : $("#modelo").val()  , sku : $("#sku").val() },
            success:function(data){
                console.log(data);
                $("#resultado").html(data);
                if(data=="OK"){
                    //alert("No se encontro duplicado");
                    $("#producto").css("background-color", "green");
                    $("#modelo").css("background-color", "green");
                    $("#sku").css("background-color", "green");
                }
            },
            error : function(xhr, status) {
                alert('Error, existió un problema');
            },
        });
    }