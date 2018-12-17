$( document ).ready(function(){
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    
     
     // Y mettre le code jQuery pour valider tous les champs du formulaire
     $("#submit").on("click",function(event){
       
        event.preventDefault();
        if($("#adresse").val().length < 5){
            $(".modal-body").text("adresse requise");
            $("#myModal").modal("show");
        }else  if($("#name").val().length < 5){
            $(".modal-body").text("nom requis");
            $("#myModal").modal("show");
        }else  if($("#firstname").val().length < 5){
            $(".modal-body").text("prenom requis");
            $("#myModal").modal("show");
        } 
        else if($("#mail").val().length < 5){
            $(".modal-body").text("email requis");
            $("#myModal").modal("show");
        }
        else  if($("#birth").val().length == ""){
            $(".modal-body").text("date requis");
            $("#myModal").modal("show");
        }

        else{
            $(".modal-title").html("Bienvenue " + $("#name").val() );
            
            $(".modal-body").html(" vous etes né le  : " + $("#birth").val());
            $(".modal-body").append("<img src = 'https://maps.googleapis.com/maps/api/staticmap?markers="+ $("#adresse").val()+
            "&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' >");
            $('#myModal').modal("show");
            }
        
     });

     $("#gps").on("click",function(event){

        event.preventDefault();
        getLocation();
     });
     
     $(document).ready(function(){
        $("#name").keypress(function(){
          $("#span1").text($("#name").val().length);
        });
        $("#name").keyup(function(){
            $("#span1").text($("#name").val().length);
          });
          $("#name").keydown(function(){
            $("#span1").text($("#name").val().length);
          });
      });
  

 });