import { Component } from "react";
import { Col, Row } from "react-bootstrap";

class FilmList extends Component {
    state = {
        movies: []
    }

    getMovies = () => {
        fetch(`https://www.omdbapi.com/?apikey=54c122f&s=${this.props.saga}`)
        .then((res) => {
            if(res.ok){
                return res.json()
            } else {
                throw new Error ('Errore nel recupero dei film')
            }
        })
        .then((data) => {
            console.log('DATI RECUPERATI', data)
            this.setState({
                movies: data.Search
            })
        })
        .catch((err) => console.log('ERRORE NEL RICHIAMO DEI DATI', err))
    }

    componentDidMount(){
        this.getMovies()
    }

    render(){
        return (
        <div className="container-fluid pt-4 bg-dark text-white" data-bs-theme="dark">
            <h4>{this.props.saga}</h4>
            <Row>
            {
                this.state.movies.map((movie) => {
                    return (
                        <>
                            <Col>
                            <img className="img-fluid" src={movie.Poster} alt="movie" key={movie.imdbID}/>
                            </Col>
                        </>
                    )
                }) 
            } 
            </Row>
        
            {/* <h4>Trending Now</h4>
            <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 pb-4"
            >
            <div className="col mb-2 text-center px-1">
                <img className="img-fluid" src="./netflix-clone/assets/1.png" alt="movie" />
            </div>
            <div className="col mb-2 text-center px-1">
                <img className="img-fluid" src="assets/2.png" alt="movie" />
            </div>
            <div className="col mb-2 text-center px-1">
                <img className="img-fluid" src="assets/3.png" alt="movie" />
            </div>
            <div className="col mb-2 text-center px-1">
                <img className="img-fluid" src="assets/4.png" alt="movie" />
            </div>
            <div className="col mb-2 text-center px-1">
                <img className="img-fluid" src="assets/5.png" alt="movie" />
            </div>
            <div className="col mb-2 text-center px-1">
                <img className="img-fluid" src="assets/6.png" alt="movie" />
            </div>
            </div>                  */}
        </div>
        )
    }
}

export default FilmList