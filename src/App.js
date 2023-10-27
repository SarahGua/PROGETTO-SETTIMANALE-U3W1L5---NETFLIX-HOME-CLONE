import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Main from './Components/Main';
import FilmList from './Components/FilmList';

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <FilmList saga={'Harry Potter'}/>
      <FilmList saga={'Star Wars'}/>
      <FilmList saga={'Lord of the rings'}/>
      <FilmList saga={'Avengers'}/>
      <Footer/>
    </div>
  );
}

export default App;
