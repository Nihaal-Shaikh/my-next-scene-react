import React, { useState } from 'react';

const BasicTab = () => {

    const [selectedOption, setSelectedOption] = useState('Series');

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, index) => currentYear - index);
  
    const [fromYear, setFromYear] = useState(currentYear);
    const [toYear, setToYear] = useState(currentYear);
  
    const handleFromYearChange = (event) => {
      setFromYear(parseInt(event.target.value));
    };
  
    const handleToYearChange = (event) => {
      setToYear(parseInt(event.target.value));
    };

    return (
        <div>
            <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        value="Series"
                        checked={selectedOption === 'Series'}
                        onChange={() => handleOptionChange('Series')}
                        className="form-radio h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Series</span>
                </label>
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        value="Movies"
                        checked={selectedOption === 'Movies'}
                        onChange={() => handleOptionChange('Movies')}
                        className="form-radio h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Movies</span>
                </label>
            </div>
            <p>Select your poison</p>
            <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Checkbox 1</span>
                </label>

                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Checkbox 2</span>
                </label>

                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Checkbox 3</span>
                </label>

                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Checkbox 4</span>
                </label>

                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Checkbox 5</span>
                </label>
            </div>
            <div className="flex space-x-4">
      <label>
        From:
        <select value={fromYear} onChange={handleFromYearChange}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>

      <label>
        To:
        <select value={toYear} onChange={handleToYearChange}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
    </div>
            <label htmlFor="basicInput1">Basic Input 1:</label>
            <input type="text" id="basicInput1" className="border rounded-md p-2 mt-2 block w-full" />

            <label htmlFor="basicInput2">Basic Input 2:</label>
            <input type="text" id="basicInput2" className="border rounded-md p-2 mt-2 block w-full" />
        </div>
    );
};

export default BasicTab;
