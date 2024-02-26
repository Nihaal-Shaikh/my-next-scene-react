import React, { useState } from 'react';
import BasicRadioButtons from './BasicRadioButtons';
import BasicCheckboxes from './BasicCheckboxes';
import BasicTimePeriod from './BasicTimePeriod';
import ImdbRating from './ImdbRating';
import LanguageDropdown from './LanguageDropdown';

const BasicTab = ({ onSearch }) => {

    const handleSearchClick = () => {
        // Example URL parameters
        const params = {
          type: 'movie',
          genres: 'Action',
          from: '2019',
          to: '2023',
        };
    
        // Perform your API call here
        fetch(`http://127.0.0.1:8000/api/example?type=${params.type}&genres=${params.genres}&from=${params.from}&to=${params.to}`, {
          method: 'GET', // 'GET' method for retrieving data
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers if required
          },
        })
          .then(response => response.json())
          .then(data => {
            // console.log(data);
            onSearch(data);
            return;
            // Handle the response data
            const primaryTitles = data.movies.map(movie => movie['original_title']);
    
            // Update the state with the primary titles
            setMovieData(primaryTitles);
          })
          .catch(error => {
            // Handle errors
            console.error('Error:', error);
          });
      };
    
      const [selectedType, setSelectedType] = useState('Series');
      const [selectedGenres, setSelectedGenres] = useState([]);

      const [fromYear, setFromYear] = useState(new Date().getFullYear());
      const [toYear, setToYear] = useState(new Date().getFullYear());

      const [rating, setRating] = useState('Any');
  
      const handleRatingChange = (event) => {
          setRating(event.target.value);
      };
  
      const handleFromYearChange = (event) => {
          setFromYear(parseInt(event.target.value));
      };
  
      const handleToYearChange = (event) => {
          setToYear(parseInt(event.target.value));
      };
  
  
      const handleTypeChange = (type) => {
        setSelectedType(type);
      };

      const handleGenreChange = (genre) => {
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
            <BasicRadioButtons onTypeChange={handleTypeChange} type={selectedType} />
            <BasicCheckboxes onGenreChange={handleGenreChange} genres={selectedGenres} />
            <BasicTimePeriod onFromChange={handleFromYearChange} onToChange={handleToYearChange} from={fromYear} to={toYear} />
            <ImdbRating onRatingChange={handleRatingChange} rating={rating} />
            <LanguageDropdown />
            <button onClick={handleSearchClick}>Search</button>
        </>
    );
};

export default BasicTab;
