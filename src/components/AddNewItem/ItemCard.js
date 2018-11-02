import React from 'react';
import axios from "axios";
import "./ItemCard.scss";
import { connect } from "react-redux";
import { addItem } from "../../store/actions/movieActions";

const ItemCard = ({item, addItem, movies}) => {

    async function getItem ({ id, media_type }) {
        try {
            const item = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=6f6604c96529de61d3211c71e39ad9cf&language=en-US`);
            addItem({
                ...item.data,
                "last_episode_watched": {
                    "air_date": "2016-03-18",
                    "episode_number": 12,
                    "id": 1175523,
                    "name": "A Hot Day in Hell's Kitchen",
                    "overview": "In the season finale, Daredevil is backed into the ultimate showdown for his own life -- and the future of Hell's Kitchen.",
                    "production_code": null,
                    "season_number": 2,
                    "show_id": 61889,
                    "still_path": "/elTucMpUqGnrz7aZJuV0uFvTMt3.jpg",
                    "vote_average": 7.393,
                    "vote_count": 14
                },
                favorite: false
            });
            return null;
        } catch (e) {

        }
    }

    function itemPresent ({ id }) {
        let itemFound = false;
        for (let i in movies) {
            if (movies[i].items.find((j) => j.id === id)) {
                itemFound = true;
            }
        }
        return itemFound
    }

    itemPresent(item);

    function makeTitle(item) {
        if (item.media_type === "tv") {
            return `${item.original_name.slice(0, 25)} (${item.first_air_date.slice(0,4)})`
        } else if (item.media_type === "movie") {
            return `${item.original_title.slice(0, 25)} (${item.release_date.slice(0,4)})`
        }
    }

    return (
        <div className="item-card">
            <div className="item-card__poster" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.poster_path})`}}>
            </div>
            <div className="item-card__details">
                <p className="item-card__details__name text-center font-weight-bold">
                    {
                        makeTitle(item)
                    }
                </p>

            </div>
            <button type="button" disabled={ itemPresent(item) } onClick={ () => { getItem(item) }} className="w-100 btn btn-warning">Add</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
      addItem: (item) => { dispatch(addItem(item)) },
  }
};

export default connect(null, mapDispatchToProps)(ItemCard);
