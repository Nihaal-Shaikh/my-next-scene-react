import React, { useState } from 'react';

const LanguageDropdown = () => {
    const languages = [
        "English", "Chinese", "Spanish", "Hindi", "Arabic", "Bengali", "Portuguese", "Russian", "Urdu", "Indonesian",
        "German", "French", "Italian", "Turkish", "Vietnamese", "Telugu", "Marathi", "Tamil", "Urdu", "Polish", "Dutch",
        "Kannada", "Malayalam", "Filipino", "Thai", "Swahili", "Korean", "Malay", "Japanese", "Romanian", "Sinhalese",
        "Farsi", "Sindhi", "Amoy (Min Nan Chinese)", "Bulgarian", "Azerbaijani", "Haitian Creole", "Czech", "Macedonian",
        "Lao", "Latvian", "Lithuanian", "Nepali", "Norwegian", "Slovenian", "Others"
    ];
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <div>
            <label>Select a Language:</label>
            <select value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="">-- Select Language --</option>
                {languages.map((language, index) => (
                    <option key={index} value={language}>
                        {language}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageDropdown;
