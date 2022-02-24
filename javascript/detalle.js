window.addEventListener("load",  function(){

var queryString = location.search

var searchParams = new URLSearchParams(queryString);

var idPeli = searchParams.get("id")

//"https://api.themoviedb.org/3/movie/" + id +"?api_key=28ca9e8a47aca9cc2017e244348ea36b&language=en-US"

var url = "https://api.themoviedb.org/3/movie/" + idPeli +"?api_key=28ca9e8a47aca9cc2017e244348ea36b&language=en-US"
var article = ""
  fetch (url)
    .then(function(respuesta) {
     return respuesta.json()
   })
    .then(function(informacion) {
    
     var titulo = informacion.title
     var original = informacion.original_title
     div =  titulo   
     document.querySelector("#titulo").innerHTML += div
    
     var resumen = informacion.overview
     div +=  resumen
         
     document.querySelector("#resumen").innerHTML += div
    
    
     var url = 'https://image.tmdb.org/t/p/w500/'
     var poster =informacion.poster_path

     document.querySelector("#poster").innerHTML = '<img  width="330" height="240" src=' + url + poster + '>'

            li =  "<text>" + original + "</text"

            document.querySelector("#originaltitle").innerHTML += li
           
            var arrayDeGeneros = informacion.genres
          

            for (let i = 0; i < arrayDeGeneros.length; i++) {
                const element = arrayDeGeneros[i];
               var genero = element.name
                var id = element.id
             
                
                li = '<a  href="file:///C:/Users/Adm/Desktop/programacion1/html/porGenero.html?idGenero='+id+ "&"+'nombre='+genero+'" > ' + genero + '</a>'

                document.querySelector("#generos").innerHTML += li
            }

            var fechaEstreno = informacion.release_date

            li = "<strong>" + "Fecha de Estreno:  " + "</strong>" +  "<text>" + fechaEstreno + "</text>"
            document.querySelector("#estreno").innerHTML = li

            var arrayDeIdiomas = informacion.spoken_languages
            for (var i = 0; i < arrayDeIdiomas.length; i++) {
              document.querySelector("#idiomas").innerHTML += "<text>" + arrayDeIdiomas[i].name+ "</text>"
            }
            var trailer ="https://api.themoviedb.org/3/movie/"+idPeli+"/videos?api_key=28ca9e8a47aca9cc2017e244348ea36b&language=en-US"
            fetch (trailer)
          
            .then(function(respuesta) {
             return respuesta.json()
      
           })
           .then (function(data){
            console.log(data);
             var trailer = data.results
          console.log(trailer);
         
            if (data.results.length !== 0) {
                var key =  trailer[0].key
                console.log(key);
                document.querySelector("#iframe").src = "https://www.youtube.com/embed/"+key
            } else {
                var novideo = "No tiene trailer"
                document.querySelector("#novideo").innerHTML = "<text>" + novideo + "</text>"
            }
           
           })
    
      
       .catch(function(error) {
         console.log("error "+ error)
    
      })
            
var reco = document.querySelector("#oculto")
var boton = document.querySelector("#boton")
var recout = document.querySelector("#recout")
boton.onclick = function (event) {
    boton.style.display = "none"
    reco.style.display ="block";  }

    recout.onclick = function (event) {
        boton.style.display = "block"
        reco.style.display ="none";  } 

      fetch("https://api.themoviedb.org/3/movie/"+id+"/recommendations?api_key=28ca9e8a47aca9cc2017e244348ea36b&language=en-US&page=1")
      .then(function(respuesta){
      return respuesta.json()
      })
      .then(function(datos){
      console.log(datos)
      var recomendaciones = datos.results
      console.log("1");
      console.log(recomendaciones);
      for (var i = 0; i < recomendaciones.length ; i++) { 

             
        var url = 'https://image.tmdb.org/t/p/w500/'
        var img =  recomendaciones[i].poster_path;
        var id = recomendaciones[i].id
        var titulo = recomendaciones[i].title


        li = '<li>'
        li += "<a href='file:///C:/Users/Adm/Desktop/programacion1/html/detalle.html?id="+id+"'>"
      li += '<div class="uk-panel">'    
     
      li += '<img src=' + url + img + ' width="304" height="236" >'
      li += '</div>'
      li += '<h4 class="text-white text-center">' + titulo + '</h4>'
      li += '</a>'
      li += '</li>'
     

      document.querySelector("#reco").innerHTML += li
      }
    


     })
      .catch(function(){
       console.log(error)
      })


})






})