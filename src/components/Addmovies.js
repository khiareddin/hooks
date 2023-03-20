import { Modal, Button } from "react-bootstrap";

function Addmovies(props) {
    return (
        <Modal
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={props.handelShow}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Movie
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: "lightblue", alignItems: "center"}}>
                <h3>Movie Name</h3>
                <input
                    value={props.newMovie.name}
                    type="text"
                    onChange={props.handelNewMovie}
                    placeholder="Movie Name"
                    name="name"
                />
                <h3>Movie Poster</h3>
                <input
                    value={props.newMovie.img}
                    type="text"
                    onChange={props.handelNewMovie}
                    placeholder="Movie Poster"
                    name="img"
                />
                <h3>Movie Rating</h3>
                <input
                    value={props.newMovie.rating}
                    type="number"
                    onChange={props.handelNewMovie}
                    placeholder="Movie Rating"
                    name="rating"
                />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handelShow} variant="danger">
                    Close
                </Button>
                <Button onClick={props.handeladdMovie} variant="success">
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default Addmovies;

//   function App() {
//     const [modalShow, setModalShow] = React.useState(false);

//     return (
//       <>
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//           Launch vertically centered modal
//         </Button>

//         <MyVerticallyCenteredModal
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//         />
//       </>
//     );
//   }

//   render(<App />);
