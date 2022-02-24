window.addEventListener("load",  function(){
    var queryString = location.search

    var searchParams = new URLSearchParams(queryString);

    var buscador = searchParams.get("q")
    console.log(buscador);


 fetch("https://api.themoviedb.org/3/search/movie?api_key=489728903a2b25dc358b98664c14a627&query="  + buscador +  "&page=1&include_adult=true")
 .then(function(respuesta) {
   return respuesta.json()
 })

 .then(function(informacion) {
    console.log(informacion);
    var peliculas = informacion.results

console.log(peliculas);
     
      for (var i = 0; i < peliculas.length ; i++) { 

           
        var url = 'https://image.tmdb.org/t/p/w500/'
        var img =  peliculas[i].poster_path;
        var id = peliculas[i].id
        var titulo = peliculas[i].title

     
        li = '<li>'
        li += "<a href='file:///C:/Users/Adm/Desktop/programacion1/html/detalle.html?id="+id+"'>"
      li += '<div class="uk-panel">'    
     
      li += '<img src=' + url + img + ' width="304" height="236" >'
      li += '</div>'
      li += '</a>'

      li+= '<h4 class="text-white text-center">' + titulo + '</h4>'
   
      li += '</li>'
     
      document.querySelector("#Buscador").innerHTML += li
      }
    })

  .catch(function(error) {
    console.log("error "+ error)
  })

   

})