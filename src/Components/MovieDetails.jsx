import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

const MovieDetails = () => {

    const params = useParams()
    console.log('parametri', params.movieId)

    const [movieDetails, setMovieDetails] = useState(null)

    const getMovie = () => {
        fetch(`http://www.omdbapi.com/?apikey=54c122f&i=${params}`)
        .then((res) => {
            if(res.ok){
                return res.json()
            }
        })
        .then((data) => {
            setMovieDetails(data)
        })
        .catch((err) => {console.log('errore nel recupero dei film', err)})
    }

    useEffect(() => {
        getMovie()
    }, [params])

    if(movieDetails === null){
        return <p>Caricamento in corso...</p>
    }
    
    return(
    <>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <img src="https://placekitten.com/500" alt="movie" className="w-100"/>
                    <h2>Titolo movie</h2>
                    <p>Descrizione movie</p>
                </Col>
            </Row>
        </Container>
    </>
    )
    
}   

export default MovieDetails