import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Main from './Components/Main';
import FilmList from './Components/FilmList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TvShows from './Components/TVShows';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Main />
      <Routes>
      <Route element={<TvShows />} path='/tvshows' />
      <Route element={
        <>
          <FilmList saga={'Harry Potter'}/>
          <FilmList saga={'Star Wars'}/>
          <FilmList saga={'Lord of the rings'}/>
          <FilmList saga={'Avengers'}/>
        </>
      } path="/"/>
      <Route element={MovieDetails} path='/moviedetail/:movieId'/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
