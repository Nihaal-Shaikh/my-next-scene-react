import React, { useState } from 'react';

export default function GenreCheckboxes() {
  const genres = [
    "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime",
    "Documentary", "Drama", "Family", "Fantasy", "Film-Noir", "Game-Show",
    "History", "Horror", "Music", "Musical", "Mystery", "News", "Reality-TV",
    "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western",
  ];

  const genresPerRow = 5;
  const initialVisibleRows = 2;

  const [visibleRows, setVisibleRows] = useState(initialVisibleRows);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genresInRows = [];
  for (let i = 0; i < genres.length; i += genresPerRow) {
    const rowGenres = genres.slice(i, i + genresPerRow);
    genresInRows.push(rowGenres);
  }

  const handleMoreClick = () => {
    setVisibleRows(visibleRows + 1);
  };

  const handleCheckboxChange = (genre) => {
    const updatedGenres = [...selectedGenres];
    const genreIndex = updatedGenres.indexOf(genre);

    if (genreIndex !== -1) {
      // Genre is already selected, remove it
      updatedGenres.splice(genreIndex, 1);
    } else {
      // Genre is not selected, add it
      updatedGenres.push(genre);
    }
    setSelectedGenres(updatedGenres);
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
                checked={selectedGenres.includes(genre)}
                onChange={() => handleCheckboxChange(genre)}
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
