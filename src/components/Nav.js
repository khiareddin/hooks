import { Navbar, Container, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Nav = ({search,handlesearch, rating, handlerating, handelShow}) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://play-lh.googleusercontent.com/0rgPYj0GwZ6txpYZrzoMdhwzqg7vY6C9B-Ol7jlaz-Ox2rgpD4Tr82ZgDqkirrEohbGm"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    Netflix Movies
                </Navbar.Brand>
            <input onChange={handlesearch} value={search} placeholder="search Movies"/>
            <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                isHalf={false}
                value={rating}
                onChange={handlerating}
            />
            <Button onClick={handelShow}>AddMovie</Button>
            </Container>

            

        </Navbar>
    );
};

export default Nav;
