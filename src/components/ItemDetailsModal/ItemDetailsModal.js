import React from 'react';
import MovieItemDetails from "./MovieItemDetails";
import TvItemDetails from "./TvItemDetails";

const ItemDetailsModal = ({ currentItem }) => {
    return (
        <div className="modal fade" id="itemDetailsModal" tabIndex="-1" role="dialog" aria-labelledby="itemDetailsModalLabel"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                    {
                        currentItem.name ? <TvItemDetails {...currentItem} /> :
                        currentItem.original_title ? <MovieItemDetails {...currentItem} /> : null
                    }
            </div>
        </div>
    );
};

export default ItemDetailsModal;