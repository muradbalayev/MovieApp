import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import RemoveList from './components/RemoveList';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [favourites, setFavourites] = useState([]);

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();
    
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};
  

	const addFavouriteMovie = (movie) => {
    const favouriteFilter = favourites.filter((e)=>{
      return e.imdbID === movie.imdbID;
    })
    if(favouriteFilter.length == 0){
      const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
    }
		
    console.log(favouriteFilter)
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center'>
				<MovieListHeading heading='MustSee' />
			</div>
      <div className='search'>
        <div>
        <p>Искать фильм по названию:</p>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
      </div>
      <div className='remove'>
        <input placeholder='Enter list name'/>
				<RemoveList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
        <button>Save List</button>
			</div>
			<div className='wrapper d-flex'>
				<MovieList
					movies={movies}
					favouriteComponent={AddFavourites}
					handleFavouritesClick={addFavouriteMovie}
				/>
			</div>
		</div>
	);
};

export default App;