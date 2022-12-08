import React from 'react';
import RemoveFavourites from './RemoveFavourites';

const RemoveList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<div className=''>
			{props.movies.map((movie, index) => (
				<div className='d-flex justify-content-start'>
					<div className='removeElement'>
						<h4>{movie.Title} ({movie.Year})</h4>
						<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='d-flex align-items-center justify-content-center'>
						<RemoveFavourites />
					    </div>
					</div>
				</div>
			))}
		</div>
	);
};

export default RemoveList;