// empty function will soon hold search bar
import React from 'react';
// importing search button into search bar component instead of importing to main App
import SearchButton from './SearchButton';

const SearchBar = () => {
    return (
        <div>

        {/* add searchbar input here */}



            {/* submit search button will render right next to search bar input */}
            <SearchButton />
        </div>
    );
};

export default SearchBar;