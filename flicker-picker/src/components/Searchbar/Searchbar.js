import React from 'react';

const Searchbar = () => {
    return ( 
        <form action="/" method="get">
        <label htmlFor="header-search">
        </label>
        <input className="search-bar" type="text" placeholder="Movie name..." />
    </form>
     );
}
 
export default Searchbar;