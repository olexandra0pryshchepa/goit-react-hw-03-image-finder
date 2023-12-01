import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './Searchbar.css'

export const Searchbar = ({ onSubmit }) => {
    const handleSubmit = event => {
        event.preventDefault();

        const query = event.target.elements.query.value.trim();
        if (query === '') {
            Notify.info('Enter search query!');
            return;
        }

        onSubmit(query);
    };
    
    return (
      <header className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
          <button className="form-button" type="submit">
            Search
          </button>
        </form>
      </header>
    );
    
};