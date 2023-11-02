import { useEffect, useState } from "react"
import { Col, Container, ListGroup, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

const MovieDetails = () => {

    const params = useParams()
    console.log('parametri', params.movieId)

    const [movieDetails, setMovieDetails] = useState(null)
    const [movieComments, setMovieComments] = useState([])


    const getMovie = () => {
        fetch(`http://www.omdbapi.com/?apikey=54c122f&i=${params.movieId}`)
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

    const getComments = () => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${params.movieId}`, {
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQzZDdkZWI0MDZiZTAwMTRiN2I3NzAiLCJpYXQiOjE2OTg5NDQ5OTAsImV4cCI6MTcwMDE1NDU5MH0.9UUAuRm8MkY17NugnYpSQl2gg-Q5XLUc4txrrSSfB6Y"
        }
        })
    
        .then((res) => {
            if(res.ok){
                return res.json()
            } else {
                throw new Error ('Errore nel recupero dei commenti')
            }
        })
        .then((movieComments) => {
            setMovieComments(movieComments)
        })
        .catch((err) => {console.log(err)})
    }

    useEffect(() => {
        getMovie()
        getComments()
    }, [])

    if(movieDetails === null){
        return <p>Caricamento in corso...</p>
    }
    
    return(
    <>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    {
                        movieDetails && (
                            <>
                            <img src={movieDetails.Poster} alt="movie" className="w-100"/>
                            <h2>{movieDetails.Title}</h2>
                            <p>{movieDetails.Plot}</p>
                            {
                                movieComments && (
                                    <ListGroup>
                                        {
                                            movieComments.map((comment) => {
                                                return (
                                                    <ListGroup.Item key={comment._id}>
                                                    {comment.rate} | {comment.comment}
                                                    </ListGroup.Item>
                                                )
                                            })
                                        }
                                    </ListGroup>
                                )
                            }
                            </>
                        )
                    }
                </Col>
            </Row>
        </Container>
    </>
    )
    
}   

export default MovieDetails