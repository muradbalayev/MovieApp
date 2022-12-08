import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<div className='container'>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start' key={movie.imdbID}>

					<img src={movie.Poster} alt='movie'></img>
					<div>
						<h4>{movie.Title} ({movie.Year})</h4>
						<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>

					</div>
					
				</div>
			))}
		</div>
	);
};

export default MovieList;