import React, {Component} from 'react';
import "./TvItem.scss";
import { connect } from "react-redux";
import { makeFavorite, moveToCategory } from "../../store/actions/movieActions";
import { changeCurrentItem } from "../../store/actions/currentItemActions";

class TvItem extends Component {

    makeFavoriteHandler = () => {
        const { id, currentCategory, makeFavorite } = this.props;
        makeFavorite(id, currentCategory);
    };

    moveToCategoryHandler = (e) => {
        const newCategoryId = e.target.value;
        const { id, currentCategory: oldCategoryId, moveToCategory } = this.props;
        moveToCategory(
            id,
            oldCategoryId,
            newCategoryId
        );
    };

    render() {
        const { name, first_air_date, last_episode_to_air, next_episode_to_air, last_episode_watched, in_production, poster_path, currentCategory, columns, favorite } = this.props;
        return (
            <div className="item mb-3">
            <div className="item__title font-weight-bold">
                <p>
                    {`${name.slice(0, 25)} (${first_air_date.slice(0, 4)}${ !in_production ? ` - ${last_episode_to_air.air_date.slice(0, 4)}` : '' }) | `}
                    <span title={`Last aired episode: ${last_episode_to_air.name}`}>{`S${last_episode_to_air.season_number < 10 ? `0${last_episode_to_air.season_number}` : last_episode_to_air.season_number}E${last_episode_to_air.episode_number < 10 ? `0${last_episode_to_air.episode_number}` : last_episode_to_air.episode_number}`}</span>
                </p>
                <span className="badge badge-dark">TV</span>
            </div>
            <div className="item__details">
                <div className="item__details__poster" data-toggle="modal" data-target="#itemDetailsModal" onClick={ () => { this.props.changeCurrentItem(this.props) } } style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`
                }}>

                </div>
                <div className="item__details__stats">
                    <span className="font-weight-bold">
                        Last watched:
                    </span>
                    <span title={last_episode_watched.name}>{`S${last_episode_watched.season_number < 10 ? `0${last_episode_watched.season_number}` : last_episode_watched.season_number}E${last_episode_watched.episode_number < 10 ? `0${last_episode_watched.episode_number}` : last_episode_watched.episode_number}`}</span>
                    <span className="font-weight-bold">
                        Next episode:
                    </span>
                    <span title={next_episode_to_air ? next_episode_to_air.name : "N/A"}>
                        {next_episode_to_air ? next_episode_to_air.air_date : "N/A"}
                    </span>
                </div>
                <div className="item__details__btns">
                    <button type="button" onClick={this.makeFavoriteHandler} className={ favorite ? "btn btn-info" : "btn btn-outline-info" }>
                        <i className="fa fa-star"></i>
                    </button>
                    <form>
                        <div className="form-group-sm">
                            <label htmlFor="item-status" className="sr-only">Status</label>
                            <select name="item-status" value={currentCategory} onChange={this.moveToCategoryHandler} id="item-status" className="form-control">
                                {
                                    columns && columns.map(c => {
                                            return (
                                                <option key={c.id} value={c.id}>{c.title}</option>
                                            )
                                    })
                                }
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        makeFavorite: (project_id, category_id) => dispatch(makeFavorite(project_id, category_id)),
        moveToCategory: (project_id, old_category_id, new_category_id) => dispatch(moveToCategory(project_id, old_category_id, new_category_id)),
        changeCurrentItem: (item) => dispatch(changeCurrentItem(item))
    }
};

export default connect(null, mapDispatchToProps)(TvItem);