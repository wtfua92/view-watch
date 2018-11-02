import React from 'react';
import TvItem from "../TvItem/TvItem";
import MovieItem from "../MovieItem/MovieItem";

const Column = ({ title, items, columns, id }) => {
    return (
        <div>
            <h2 className="text-center">{ title }</h2>
            {
                items.length > 0 ? items.map((i) => {
                    if (i.media_type === "movie" || i.original_title) {
                        return (<MovieItem {...i} columns={columns} currentCategory={id} key={i.id}/>)
                    } else if (i.media_type === "tv" || i.first_air_date) {
                        return (<TvItem {...i} columns={columns} currentCategory={id} key={i.id}/>)
                    }
                    return null;
                }) : <p className="text-center">Category is empty</p>
            }
        </div>
    );
};

export default Column;
