import { useState } from "react";

export default function BasicRadioButtons() {
    
    const [selectedOption, setSelectedOption] = useState('Series');

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    return (
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
    );
}