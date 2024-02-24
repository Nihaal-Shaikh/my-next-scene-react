import React, { useState } from 'react';
import BasicRadioButtons from './BasicRadioButtons';
import BasicCheckboxes from './BasicCheckboxes';
import BasicTimePeriod from './BasicTimePeriod';

const BasicTab = () => {

    return (
        <>
            <BasicRadioButtons />
            <BasicCheckboxes />
            <BasicTimePeriod />
            <label htmlFor="basicInput1">Basic Input 1:</label>
            <input type="text" id="basicInput1" className="border rounded-md p-2 mt-2 block w-full" />

            <label htmlFor="basicInput2">Basic Input 2:</label>
            <input type="text" id="basicInput2" className="border rounded-md p-2 mt-2 block w-full" />
        </>
    );
};

export default BasicTab;
