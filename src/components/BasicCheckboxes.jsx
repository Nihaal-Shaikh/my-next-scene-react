import React, { useState } from 'react';

export default function GenreCheckboxes({ onGenreChange, genres }) {
  const movieGenres = [
    "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime",
    "Documentary", "Drama", "Family", "Fantasy", "Film-Noir", "Game-Show",
    "History", "Horror", "Music", "Musical", "Mystery", "News", "Reality-TV",
    "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western",
  ];

  const genresPerRow = 5;
  const initialVisibleRows = 2;

  const [visibleRows, setVisibleRows] = useState(initialVisibleRows);

  const genresInRows = [];
  for (let i = 0; i < movieGenres.length; i += genresPerRow) {
    const rowGenres = movieGenres.slice(i, i + genresPerRow);
    genresInRows.push(rowGenres);
  }

  const handleMoreClick = () => {
    setVisibleRows(visibleRows + 1);
  };

  return (
    <>
      <p>Select your genres</p>
      {genresInRows.slice(0, visibleRows).map((rowGenres, rowIndex) => (
        <div key={rowIndex} className="flex items-center space-x-4">
          {rowGenres.map((genre, genreIndex) => (
            <label key={genreIndex} className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                checked={genres.includes(genre)}
                onChange={() => onGenreChange(genre)}
              />
              <span className="ml-2 text-gray-700">{genre}</span>
            </label>
          ))}
        </div>
      ))}
      {visibleRows < genresInRows.length && (
        <button onClick={handleMoreClick} className="mt-2 text-blue-500 cursor-pointer">
          More
        </button>
      )}
    </>
  );
}
