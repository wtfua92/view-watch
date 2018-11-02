import React, {Component} from 'react';
import "../MovieItem/MovieItem.scss";
import { connect } from "react-redux";
import { makeFavorite, moveToCategory } from "../../store/actions/movieActions";
import { changeCurrentItem } from "../../store/actions/currentItemActions";


class MovieItem extends Component {

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
        const { original_title, poster_path, release_date, runtime, budget, currentCategory, columns, favorite } = this.props;
        return (
            <div className="item mb-3">
                <div className="item__title font-weight-bold">
                    <p>
                        {`${original_title.slice(0, 25)} (${release_date.slice(0, 4)})`}
                    </p>
                    <span className="badge badge-dark">Movie</span>
                </div>
                <div className="item__details">
                    <div className="item__details__poster" data-toggle="modal" data-target="#itemDetailsModal" onClick={ () => { this.props.changeCurrentItem(this.props) } } style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`
                    }}>
                    </div>
                    <div className="item__details__stats">
                        <span className="font-weight-bold">
                            Duration:
                        </span>
                        <span>{runtime ? `${runtime} min` : 'N/A'}</span>
                        <span className="font-weight-bold">
                            Budget:
                        </span>
                        <span>{budget ? `$${budget / 1000000} m` : 'N/A'}</span>
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

export default connect(null, mapDispatchToProps)(MovieItem);