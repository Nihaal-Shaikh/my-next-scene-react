import React from 'react';
import BasicRadioButtons from './BasicRadioButtons';
import BasicCheckboxes from './BasicCheckboxes';
import BasicTimePeriod from './BasicTimePeriod';

const BasicTab = () => {

    return (
        <>
            <BasicRadioButtons />
            <BasicCheckboxes />
            <BasicTimePeriod />
            <button>Search</button>
        </>
    );
};

export default BasicTab;
