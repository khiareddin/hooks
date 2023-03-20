import Nav from "./components/Nav";
import MovieContainer from "./components/MovieContainer";
import Addmovies from "./components/Addmovies";

import { useState } from "react";

function App() {
    // const[getter(parametre), setter(fonction de state)]= useState(valeur initial (exp: 0, [],(),false, true)
    //state of functional component via Hooks (stockage des données)(useState)
    const [Movies, SetMovies] = useState([
        {
            id: Math.random(),
            img: "https://i.pinimg.com/originals/c4/1f/38/c41f3825633d80e0ecd833468db92c05.jpg",
            name: "Jhon Wick",
            rating: 4,
        },
        {
            id: Math.random(),
            img: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg",
            name: "Avatar",
            rating: 2,
        },
        {
            id: Math.random(),
            img: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
            name: "Iron Man 2",
            rating: 5,
        },
        {
            id: Math.random(),
            img: "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
            name: "Batman",
            rating: 5,
        },
        {
            id: Math.random(),
            img: "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg",
            name: "Deadpool 2",
            rating: 4,
        },
        {
            id: Math.random(),
            img: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            name: "Jumnanji",
            rating: 3,
        },
        {
            id: Math.random(),
            img: "https://starzplay-img-prod-ssl.akamaized.net/474w/MGM/VIKINGSY2013S06E001/VIKINGSY2013S06E001-474x677-PST.jpg",
            name: "Vikings",
            rating: 1,
        },
    ]);

    const [search, setsearch] = useState("");
    const handlesearch = (event) => {
        setsearch(event.target.value);
    };

    const [rating, setrating] = useState(0);
    const handlerating = (newRating) => {
        setrating(newRating);
    };

    const [show, setShow] = useState(false);
    const handelShow = () => {
        setShow(!show);
    };

    const [newMovie, setNewMovie] = useState({
        id: Math.random(),
        img: "",
        name: "",
    });

    const handelNewMovie = (e) => {
      
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value,
        });
        console.log(e.target.value);
    };

    const handeladdMovie = () => {
        if (newMovie.rating >= 1 && newMovie.rating <= 5) {
            SetMovies([...Movies, newMovie]);
            handelShow();
        } else {
            alert("The rating is between 1 and 5 :D");
        }
    };

    return (
        <div className="App">
            <Nav
                search={search}
                handlesearch={handlesearch}
                rating={rating}
                handlerating={handlerating}
                handelShow={handelShow}
            />

            <MovieContainer Movies={Movies} search={search} rating={rating} />

            <Addmovies
                show={show}
                handelShow={handelShow}
                newMovie={newMovie}
                handelNewMovie={handelNewMovie}
                handeladdMovie={handeladdMovie}
            />
            {/* Methode2 par props <MovieContainer Movies=Movies/>  */}
            {/* //destruction Method*/}
        </div>
    );
}

export default App;
