window.addEventListener("load",  function(){

var peliculasFavoritas = [];
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=d72b8119ca0d802447ebd91bded10750")
        .then(function(respuesta) {
         return respuesta.json()
       })
        .then(function(informacion) {
         var peliculas = informacion.results
   
    
         for (var i = 0; i < 10 ; i++) { 
  
           var titulo = peliculas[i].title
           var url = 'https://image.tmdb.org/t/p/w500/'
           var img =  peliculas[i].poster_path;
           var id = peliculas[i].id
    
        
            li = '<li>'
            li += "<a href='file:///C:/Users/Adm/Desktop/programacion1/html/detalle.html?id="+id+"'>"
          li += '<div class="uk-panel">'    
         
          li += '<img src=' + url + img + ' width="304" height="236" >'
          li += '</div>'
          li += '</a>'
          li += '<button id="fav" onclick="agregarFavoritos('+id+')" > &#9733; </button>'
          li+= '<h4 class="text-white text-center">' + titulo + '</h4>'
    
          li += '</li>'
    
    
         document.querySelector("#Populares").innerHTML += li
         }
        })
    
     .catch(function(error) {
       console.log("error "+ error)
     })
  
     fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US&page=1")
            .then(function(respuesta) {
              return respuesta.json()
            })
            .then(function(informacion) {
              var peliculas = informacion.results

              for (var i = 0; i < 10 ; i++) { 

             
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
              li += '<button id="fav" onclick="agregarFavoritos('+id+')" > &#9733; </button>'
          li+= '<h4 class="text-white text-center">' + titulo + '</h4>'
              
              li += '</li>'
             
        
              document.querySelector("#MejoresPuntuadas").innerHTML += li
              }
            })
        
          .catch(function(error) {
            console.log("error "+ error)
          })
        
         
     fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US&page=1")
          .then(function(respuesta) {
            return respuesta.json()
          })
          .then(function(informacion) {
            var peliculas = informacion.results

            for (var i = 0; i < 10 ; i++) { 

           
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
            li += '<button id="fav" onclick="agregarFavoritos('+id+')" > &#9733; </button>'
            li+= '<h4 class="text-white text-center">' + titulo + '</h4>'
         
            li += '</li>'
           
      
            document.querySelector("#Estreno").innerHTML += li
            }
          })
      
        .catch(function(error) {
          console.log("error "+ error)
        })
      
      
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US")
          .then(function(respuesta) {
          return respuesta.json()
        })
        .then(function(informacion) {
        
          var generos = informacion.genres

   
            
           
              
            div = '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'
            
            +  "Genres" +  '</a>'
            
            div +=  ' <div class="dropdown-menu " aria-labelledby="navbarDropdown">'



             for (var i = 0; i < generos.length; i++) {
              var nombre =  generos[i].name
             
              var id = generos[i].id
     
   
            div += '<a  href="file:///C:/Users/Adm/Desktop/programacion1/html/porGenero.html?idGenero='+id+ "&"+'nombre='+nombre+'" class="dropdown-item" > ' + nombre + '</a>'
      
            }
            div += '</div>'
            document.querySelector("#dropdown").innerHTML += div
          })

          agregarFavoritos = (id)=> {
      
            if (peliculasFavoritas.indexOf(id)===-1) {
              alert("The selected movie has been saved in your favorite movies")
            
             
                peliculasFavoritas.push(id)
      
              
      
                window.sessionStorage.setItem("favorita",JSON.stringify(peliculasFavoritas))
            } 
              else {
            
              alert("The selected movie has been removed from your favorite movies")
                   
              peliculasFavoritas.splice(peliculasFavoritas.indexOf(id),1)
   
             
              window.sessionStorage.setItem("favorita",JSON.stringify(peliculasFavoritas))
            }
          
        
 
           
            }
  


})
    








