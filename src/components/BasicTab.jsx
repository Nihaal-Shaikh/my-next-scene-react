import React from 'react';
import BasicRadioButtons from './BasicRadioButtons';
import BasicCheckboxes from './BasicCheckboxes';
import BasicTimePeriod from './BasicTimePeriod';
import ImdbRating from './ImdbRating';
import LanguageDropdown from './LanguageDropdown';

const BasicTab = () => {

    return (
        <>
            <BasicRadioButtons />
            <BasicCheckboxes />
            <BasicTimePeriod />
            <ImdbRating />
            <LanguageDropdown />
            <button>Search</button>
        </>
    );
};

export default BasicTab;
