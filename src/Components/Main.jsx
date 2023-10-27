import { Component } from "react";

class Main extends Component {
    render(){
        return(
            <div className="container-fluid pt-4 bg-dark text-white" data-bs-theme="dark">
                <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <h2 className="mb-4">TV Shows</h2>
                    <div className="btn-group" role="group">
                    <div className="dropdown ms-4 mt-1">
                        <button
                        type="button"
                        className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        Genres
                        </button>
                        <ul className="dropdown-menu">
                        <li className="dropdown-item" href="#"> Comedy</li>
                        <li className="dropdown-item" href="#">Drama</li>
                        <li className="dropdown-item" href="#">Thriller</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div>
                    <i className="bi bi-grid icons"></i>
                    <i className="bi bi-grid-3x3 icons"></i>
                </div>
                </div>
                {/* <h4>Trending Now</h4>
                <div
                class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4"
                >
                <div class="col mb-2 text-center px-1">
                    <img class="img-fluid" src="./netflix-clone/assets/1.png" alt="movie" />
                </div>
                <div class="col mb-2 text-center px-1">
                    <img class="img-fluid" src="assets/2.png" alt="movie" />
                </div>
                <div class="col mb-2 text-center px-1">
                    <img class="img-fluid" src="assets/3.png" alt="movie" />
                </div>
                <div class="col mb-2 text-center px-1">
                    <img class="img-fluid" src="assets/4.png" alt="movie" />
                </div>
                <div class="col mb-2 text-center px-1">
                    <img class="img-fluid" src="assets/5.png" alt="movie" />
                </div>
                <div class="col mb-2 text-center px-1">
                    <img class="img-fluid" src="assets/6.png" alt="movie" />
                </div>
                </div> */}
            </div>

        )
    }
}

export default Main