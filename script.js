
$(function(){
    
    $( "#searchBar" ).focus(function() {
        $( "#form" ).css( "opacity", "1" );
    });
    $( "#searchBar").focusout(function() {
        $( "#form" ).css( "opacity", "0.2" );
  }) 
    
    $("#form").submit(function(e) {
    e.preventDefault();
        var search = $("#searchBar").val();
        search = search.replace(/\s/g,"%20");
        search = "action=query&generator=allpages&gaplimit=15&gapfilterredir=nonredirects&gapfrom="+search+"&prop=extracts"
            +"&exintro=true&exlimit=15&exsentences=3&explaintext=true&format=json";
        $("#searchBar").val("");
        $.ajax({
    url: "https://en.wikipedia.org/w/api.php",
    data: search,
    dataType: 'jsonp',
    method: 'PUT',
    success: function(output){
        $("#entries").empty();
        for(x in output.query.pages){
            var temp = "<div class='row' style='border-style:solid;border-color:black'><a href='http://en.wikipedia.org/?curid="+x+"' target='_blank'><h1>"+output.query.pages[x].title+"</h1></a><br><p>"+output.query.pages[x].extract+"</p></div>";
        $("#entries").append(temp);
            }
        }
    });
       

    });
     $("#random").click(function(){   
            var search = "action=query&generator=random&grnfilterredir=nonredirects&grnlimit=15&grnnamespace=0&prop=extracts"
            +"&exintro=true&exlimit=15&exsentences=3&explaintext=true&format=json";
         $.ajax({  
             url: "https://en.wikipedia.org/w/api.php",
             data: search,
             dataType: 'jsonp',
             method: 'PUT',
            success: function(output){
                $("#entries").empty();
                for(x in output.query.pages){
                    var temp = "<div class='row' style='border-style:solid;border-color:black'><a href='http://en.wikipedia.org/?curid="+x+"' target='_blank'><h1>"+output.query.pages[x].title+"</h1></a><br><p>"+output.query.pages[x].extract+"</p></div>";
                    $("#entries").append(temp);
                }
            }
         });         
        
        
        });
   
});

