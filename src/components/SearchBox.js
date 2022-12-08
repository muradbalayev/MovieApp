import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='For example, Shawshank Redemption'
			></input>
		</div>
	);
};

export default SearchBox;