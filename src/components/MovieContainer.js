import { useEffect, useState } from "react";
import Movie from "./Movie";

const MovieContainer = ({Movies, search, rating}) => {
    // const MovieContainer = (props) => {
        // console.log(props.Movies or props.Movies.id or props.Movies.rating)

    const [filtredMovie, setfiltredMovie]=useState(Movies)
    //useEffet=3assess wa9t user yktb
    useEffect(() => {
    setfiltredMovie(Movies.filter(filtree=>filtree.name.toLowerCase().includes(search.toLowerCase())
    && rating === 0 ? Movies:filtree.rating===rating ))
    },[search, rating, Movies])

    return <Movie Movies={filtredMovie}/>;
};

export default MovieContainer;
