import React from 'react';
import "./MovieItemDetails.scss";

const MovieItemDetails = ({
        original_title,
        poster_path,
        genres,
        production_countries,
        overview,
        tagline,
        budget,
        release_date
    }) => {
    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5>{ `${original_title} (${release_date.slice(0,4)})` } <br/> {tagline && <small>{tagline}</small>}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="container-fluid movie-modal-body">
                    <div className="row">
                        <div className="col-3 movie-modal-body__poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})` }}>

                        </div>
                        <div className="col-9 movie-modal-body__stats">
                            <div className="movie-modal-body__stats__budget">
                        <span className="font-weight-bold">
                            Budget:
                        </span>
                                <span>{ `${budget ? " $" + budget / 1000000 + "m" : " N/A"}` }</span>
                            </div>
                            <div className="movie-modal-body__stats__countries">
                        <span className="font-weight-bold">
                            Countries:
                        </span>
                                { production_countries ? production_countries.map((c, i) => (
                                    <span>{ ` ${c.iso_3166_1}${i !== production_countries.length - 1 ? ', ' : ''}` }</span>
                                )) : ' N/A'}
                            </div>
                            <div className="movie-modal-body__stats__genres">
                        <span className="font-weight-bold">
                            Genres:
                        </span>
                                {
                                    genres ?
                                        genres.map((c, i) => (
                                            <span>{ ` ${c.name}${i !== genres.length - 1 ? ', ' : ''}` }</span>
                                        )) :
                                        ' N/A'
                                }
                            </div>
                            <br/>
                            <div className="movie-modal-body__stats__tagline">
                        <span className="font-weight-bold">
                            Description:
                        </span>
                                <span>
                            { ` ${overview}` }
                        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieItemDetails;