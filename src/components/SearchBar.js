import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {

    const [term, setTerm] = useState('');

    // const onInputChange = event => {
    //     setTerm(event.target.value);
    // }

    const onSubmit = event => {
        event.preventDefault();

        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form" action="">
                <div className="field">
                    <label htmlFor="videoInput">Search a Video</label>
                    <input
                        type="text"
                        name=""
                        id="videoInput"
                        value={term}
                        onChange={event => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>);
}



export default SearchBar;