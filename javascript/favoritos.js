window.addEventListener("load",  function(){
  
    var arrayDePelisFavoritas = JSON.parse(window.sessionStorage.getItem("favorita"));
console.log(arrayDePelisFavoritas);
    if (arrayDePelisFavoritas.length>0) {
   
      for (var i = 0; i < arrayDePelisFavoritas.length; i++) {

        var url = "https://api.themoviedb.org/3/movie/"+arrayDePelisFavoritas[i]+"?api_key=d72b8119ca0d802447ebd91bded10750&language=en"
        var urlImg = "https://image.tmdb.org/t/p/original"
        fetch(url)
            .then(function(respuesta) {
             return respuesta.json()
           })
            .then(function(informacion) {
             
        console.log(informacion);
          
           
             var url = 'https://image.tmdb.org/t/p/w500/'
             var img =  informacion.poster_path;
             var id = informacion.id
             console.log(id);
             var titulo = informacion.title
           
            
             li = '<li>'
             li += "<a href='file:///C:/Users/Adm/Desktop/programacion1/html/detalle.html?id="+id+"'>"
           li += '<div class="uk-panel">'    
          
           li += '<img src=' + url + img + ' width="304" height="236" >'
           li += '</div>'
           li += '</a>'
           li += '<button id="fav" onclick="agregarFavoritos('+id+')" > &#9733; </button>'
           li+= '<h4 class="text-white text-center">' + titulo + '</h4>'
        
           li += '</li>'
             document.querySelector("#Favs").innerHTML += li
            
    
            })
            .catch(function(error) {
            console.log("error "+ error)
            })
    
      }
    
    }
    agregarFavoritos = (id)=> {
      
        if (arrayDePelisFavoritas.indexOf(id)===-1) {
          alert("The selected movie has been saved in your favorite movies")
        
         
          arrayDePelisFavoritas.push(id)
  
          
  
            window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
        } 
          else {
        
          alert("The selected movie has been removed from your favorite movies")
               
          arrayDePelisFavoritas.splice(arrayDePelisFavoritas.indexOf(id),1)
          location.reload();
         
          window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
        }
      
    

       
        }
    
    })