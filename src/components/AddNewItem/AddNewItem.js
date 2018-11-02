import React, {Component} from 'react';
import axios from "axios";
import ItemCard from "./ItemCard"

class AddNewItem extends Component {
    state = {
      url: "https://api.themoviedb.org/3/search/multi?api_key=6f6604c96529de61d3211c71e39ad9cf&query=",
      searchResult: [],
      query: "",
      loaderVisible: false
    };

    searchItems = async (e) => {
        e.preventDefault();
        const { url, query } = this.state;
        try {
            let searchResult = await axios.get(`${url}${query.trim().toLowerCase()}`);
            if (searchResult.data.results.length > 0) {
                this.setState(() => ({
                    searchResult: searchResult.data.results.slice(0, 3),
                    query: ""
                }));
            }
        } catch (e) {

        }
    };

    inputHandler = (e) => {
        e.persist();
        this.setState(() => ({
            query: e.target.value
        }));
    };

    clearWindow = () => {
        this.setState(() => ({
            query: "",
            searchResult: []
        }));
    };

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add new item</h5>
                            <button type="button" className="close" data-dismiss="modal" onClick={ this.clearWindow } aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <form onSubmit={ this.searchItems }>
                                            <div className="row">
                                                <div className="col-12">
                                                    <label htmlFor="search-item">Search for a movie or a TV show:</label>
                                                </div>
                                                <div className="col-9">
                                                    <input type="text" onChange={ this.inputHandler } value={this.state.query} id="search-item" className="form-control"/>
                                                </div>
                                                <div className="col-3">
                                                    <button type="submit" className="w-100 btn btn-outline-success">Find</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {
                                        this.state.searchResult && this.state.searchResult.map((item) => {
                                            return (
                                                <div className="col-4" key={item.id}>
                                                    <ItemCard movies={this.props.movies} item={item}/>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNewItem;