import { Component } from "react";
import { Carousel, Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

class FilmList extends Component {
    state = {
        movies: [],
        isLoading: true,
    }

    getMovies = () => {
        fetch(`https://www.omdbapi.com/?apikey=54c122f&s=${this.props.saga}`)
        .then((res) => {
            if(res.ok){
                return res.json()
            } 
            if (res.status >= 100 && res.status < 200) {
                console.log("Informazioni per il client");
            }
            if (res.status >= 300 && res.status < 399) {
                console.log("Redirezione");
            }
            if (res.status >= 400 && res.status < 499) {
                console.log("Richiesta errata");
            }
            if (res.status >= 500 && res.status < 599) {
                console.log("Errore sul server");
            } else {
                throw new Error ('Errore nel recupero dei film')
            }
        })
        .then((data) => {
            console.log('DATI RECUPERATI', data)
            this.setState({
                movies: data.Search,
                isLoading: false,
            })
        })
        .catch((err) => {
            console.log('ERRORE NEL RICHIAMO DEI DATI', err)
            this.setState({
                isLoading: false,
            })
        })
    }

    componentDidMount(){
        this.getMovies()
    }

    render(){
        return (
        <div className="container-fluid pt-4 bg-dark text-white" data-bs-theme="dark">
            <h4 className="mt-5">{this.props.saga}</h4>
            <Row className="">
            {this.state.isLoading && (
                <div className="text-center mt-2">
                    <Spinner animation="border" variant="danger" />
                </div>
                                    
            )}
            {
                this.state.movies.map((movie, index) => {
                    if (index<6){

                        return (
                            <>
                                <Col xs={12} sm={6} md={4} lg={2} className="col mt-3 d-flex justify-content-center">
                                <Link><img className="img-fluid" src={movie.Poster} alt="movie" key={movie.imdbID} /></Link>
                                </Col>
                            </>
                        )
                    }
                }) 
            } 
            </Row>


            {/* <Carousel>
                <Carousel.Item>
                    <ExampleCarouselImage text="First slide" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage text="Second slide" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage text="Third slide" />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        
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