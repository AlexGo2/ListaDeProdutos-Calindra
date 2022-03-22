


$( '#procurar').on( 'click', function() { 
  var pesquisa = $( '#search' ).val();
  
  $.ajax({
    url: `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${pesquisa}&source=nanook`,
    success( request ) {
        console.log(request);
        var conteudo = "";
        for(let i=0; i < request.products.length; i++ ){
          conteudo += "<h1>" + request.products[i].name + "</h1>"

        }
          $('#produto').html(conteudo)
          
        
    }
  })
})