window.addEventListener("load",  function(){

    var queryString = location.search
    console.log(queryString);
    var searchParams = new URLSearchParams(queryString);
    console.log(searchParams);
    var id = searchParams.get("idGenero")
    console.log(id);
    var genero = searchParams.get('nombre')


tituloGenero = '<h3>' + genero + '</h3>'
    document.querySelector("#titulo").innerHTML += tituloGenero
    console.log(genero);
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+id)
    .then(function(respuesta) {
        return respuesta.json()
      })
       .then(function(informacion) {
        var peliculas = informacion.results 
        console.log(peliculas);

  
      


        for (let i = 0; i < peliculas.length; i++) {
        
            var url = 'https://image.tmdb.org/t/p/w500/'
            var img =  peliculas[i].poster_path;
            var id = peliculas[i].id
            var titulo = peliculas[i].title
    

     
          li = '<li>'
          li += '<div class="uk-panel">'    
          li += '<img src=' + url + img + ' width="304" height="236" >'
            
          li += '</div>'
          li += '<h4 class="text-white text-center">' + titulo + '</h4>'
          li += '</li>'
    
         
    
          document.querySelector("#porGenero").innerHTML += li
          }



        
    })


    })