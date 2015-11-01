var MovieController= {
    get: function(){
        var movies = MovieModel.getMovies();
        var $element = $("#list-movies");
        $element.html="";
        $.map(movies, function(movie){
           MovieView.renderList($element,movie); 
        });
    },
    getDetail: function(id){        
        var movies=MovieModel.getMovies();
        $.map(movies, function (movie){
            if (movie.id==id){
                MovieView.renderDetail(movie);
            }
        });        
    },
    getShow: function(id){        
        var shows=MovieModel.getMovieShow();
        $("#time").html("");
        $.map(shows, function (show){
           if(show.id==id){
               var times=show.time.split('|');
               $.map(times,function(time){
                  MovieView.renderTime(time);                           
               });
           }
        });
    },
    getCine:function(){
        $("#cine").show();
        $("#cinema").html("");        
        var shows=MovieModel.getMovieShow();        
        $.map(shows,function(show){
          var times=show.time.split('|');
          $.map(times,function(time){
            if(time==$("#time option:selected").text()&&show.id==$("#id").val()){
                MovieView.renderCinema(show.cinema);
            }
          });
        });
        
    },
    getPrice: function(){
        $("#tp").show();
        $("#nos").show();
        var shows=MovieModel.getMovieShow();
        $.map(shows, function(show){
            if(show.id==$("#id").val()){
               if(show.cinema==$("#cinema option:selected").text()){
                MovieView.renderPrice(show.price);                 
               }
            }
        });
    },
    calTotal: function(){        
        if($("#seat").val()){
            $("#tt").show();
            $("#iHead").show();
            $("#n").show();
            $("#pn").show();
        }else {
            $("#tt").hide();
            $("#iHead").hide();
            $("#n").hide();
            $("#pn").hide();
        }
        var tPrice=$("#price").val();        
        var seat=$("#seat").val();        
        var total=tPrice*seat;
        MovieView.renderTotal(total);
    },
    checkEmpty: function(){
        if($("#name").val()){
            $("#nerror").html("");
        }else{
            $("#nerror").html("*");
        }
        if($("#phone").val()){
            $("#perror").html("");
        }else{
            $("#perror").html("*");
        }
        if($("#name").val()&&$("#phone").val()){
            $("#btnBook").show();
        }else{
            $("#btnBook").hide();
        }
    },
    book: function(){
        var id,name,mName,cinema,time,price,seat,total;
        id=$("#id").val();
        name=$("#name").val();
        var movies=MovieModel.getMovies();
        $.map(movies,function(movie){
           if(movie.id==id){
               mName=movie.name;
           } 
        });
        cinema=$("#cinema option:selected").text();
        time=$("#time option:selected").text();
        price=$("#price").val();
        seat=$("#seat").val();
        total=$("#total").val();
        $("#pHead").html("Dear "+name);
        $("#pMovie").html(mName);
        $("#pTime").html(time);
        $("#pCinema").html(cinema);
        $("#pPrice").html(price);
        $("#pSeat").html(seat);
        $("#pTotal").html(total);
    }
};


