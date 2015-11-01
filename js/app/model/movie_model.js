var MovieModel = {
    movies: [],
    setMovies: function (){
        MovieModel.movies.push({
            "id": "1",
            "name": "Crimson Peak",
            "img": "img/movies/1.png",
            "description": "Hollywood Drama",
            "trailer": "https://www.youtube.com/embed/oquZifON8Eg",
            "rating": "R15",
            "runtime": "120minutes",
            "genre": "Drama",
            "content_advice": "US",
            "brief": "In the aftermath of a family tragedy, an aspiring author is torn between love for her childhood friend and the temptation of a mysterious outsider. Trying to escape the ghosts of her past, she is swept away to a house that breathes, bleeds...and remembers.",
            "time": "8:00am"
        },{
            "id": "2",
            "name": "Goosebumps",
            "img": "img/movies/2.png",
            "description": "Sci-fi",
            "trailer": "https://www.youtube.com/embed/7Cn716jv61s",
            "rating": "G",
            "runtime": "105 Minutes",
            "genre": "Adventure",
            "content_advice": "USA",
            "brief": "A young kid teams up with the niece of young adult horror author R.L. Stine after the writer's imaginary demons are set free on the town of Greendale, Maryland."
        },{
            "id": "3",
            "name": "Monkey",
            "img": "img/movies/Monkey.png",
            "description": "Action",
            "trailer": "https://www.youtube.com/embed/l3ay5R00D_k",
            "rating": "G",
            "runtime": "105 Minutes",
            "genre": "Adventure",
            "content_advice": "USA",
            "brief": ""
        },{
            "id": "4",
            "name": "Heart Attack",
            "img": "img/movies/Heart.png",
            "description": "Drama",
            "trailer": "https://www.youtube.com/embed/zIKfGBG8EVc",
            "rating": "G",
            "runtime": "110 Minutes",
            "genre": "Action",
            "content_advice": "Khmer",
            "brief": "Khmer big scene movie"
        });
    },
    getMovies: function(){
        return MovieModel.movies;
    },
    movieShow: [],
        setMovieShow: function(){
            MovieModel.movieShow.push({
               "id":"2",
               "time":"8:00am|9:00am",          
               "cinema":"Legend",
               "price":"2.5"
            },{
               "id":"2",
               "time":"9:00am",               
               "cinema":"Major",
               "price":"3"
            },{
               "id":"1",
               "time":"9:30am|10:00am",               
               "cinema":"Platinum",
               "price":"2.5"              
            },{
               "id":"1",
               "time":"9:30am|9:00am",               
               "cinema":"Major",
               "price":"3" 
            });
        },
        getMovieShow: function(){
            return MovieModel.movieShow;
        }
};


