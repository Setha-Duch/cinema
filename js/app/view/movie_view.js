var MovieView={
    renderList: function($element,movie){
        $element.append("<li><a href='#movie-detail' onclick='MovieController.getDetail("+movie.id+")'><img src='"+movie.img+"'>"+movie.name+"<p>"+movie.description+"<br>ID: "+movie.id+"</p></a></li>");
    },
    renderDetail: function(movie){
        $("#header").html("<b>"+movie.name+"</b");
        $("#sub-header").html("<b>"+movie.name+"</b>");
        $("#movie-detail-image").attr("src",movie.img);
        $("#rating").html(movie.rating);
        $("#runtime").html(movie.runtime);
        $("#genre").html(movie.genre);
        $("#content-advice").html(movie.content_advice);
        $("#brief").html(movie.brief);
        $("#trailer-link").attr("src",movie.trailer); 
        $("#mi").hide();
        $("#id").val(movie.id);
        $("#cine").hide();
        $("#tp").hide();
        $("#nos").hide();
        $("#tt").hide();
        $("#n").hide();
        $("#pn").hide();
        $("#iHead").hide();
        $("#btnBook").hide();
        MovieController.getShow(movie.id);
    },
    renderTime: function(time){
        $("#time").append("<option selected='false'>"+time+"</option");
    },
    renderCinema: function(cinema){
        $("#cinema").append("<option value='"+cinema+"' selected='false'>"+cinema+"</option");
    },
    renderPrice: function(price){
        $("#price").val(price);        
    },
    renderTotal: function(total){        
        $("#total").val(total);
    }
};


