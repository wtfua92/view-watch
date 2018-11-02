import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateQuery } from "../../store/actions/searchActions";

class NavBar extends  Component {
   searchHandler = (e) => {
       this.props.updateQuery(e.target.value);
   };

    render () {
        return (
            <nav className="navbar bg-secondary justify-content-between">
                <a href="/" className="brand text-light">View Watch</a>
                <div className="d-flex right">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" onChange={ this.searchHandler } type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <button
                        type="button"
                        data-toggle="modal" data-target="#exampleModal"
                        className="btn btn-outline-light ml-4">Add new item</button>
                </div>
            </nav>
        )
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateQuery: (query) => dispatch(updateQuery(query))
    }
};

export default connect(null, mapDispatchToProps)(NavBar);
