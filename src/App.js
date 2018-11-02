import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import Column from "./components/Column/Column";
import AddNewItemModal from "./components/AddNewItem/AddNewItem"
import ItemDetailsModal from "./components/ItemDetailsModal/ItemDetailsModal";

class App extends Component {
  filterMovies = (movies, query) => {
    let newMovies = {};
    for (let cat in movies) {
        newMovies[cat] = {
            ...movies[cat],
            items: movies[cat].items.filter(i =>
                (i.name && i.name.includes(query)) ||
                (i.original_title && i.original_title.includes(query)) ||
                (query.includes("fav") && i.favorite)
            )
        };
    }
    return newMovies
  };

  render() {
    const {query} = this.props.search;
    const columns = query.length > 0 ? Object.values(this.filterMovies(this.props.movies, query)) : Object.values(this.props.movies);
    const columnsWithoutItems = columns.map(i => ({ title: i.title, id: i.id }));
    return (
      <div className="App">
          <NavBar />
          <div className="container-fluid">
              <AddNewItemModal movies={this.props.movies} />
              <ItemDetailsModal currentItem={ this.props.currentItem } />
              <div className="row mt-2">
                  {
                      columns.map((c, i) => (
                        <div key={`column-${i}`} className="col-12 col-md-6 col-lg-3">
                            <Column columns={ columnsWithoutItems } {...c}/>
                        </div>
                      ))
                  }
              </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movie,
        modals: state.modal,
        search: state.search,
        currentItem: state.currentItem.currentItem
    };
};

export default connect(mapStateToProps)(App);
