import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCTE0f_jcDhYsJZP-oxe1tqHfJO7MM5mWQ'

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

ReactDOM.render(<App/>,document.querySelector(".container"))