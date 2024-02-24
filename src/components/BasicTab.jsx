import React from 'react';

const BasicTab = () => {
  return (
    <div>
      <label htmlFor="basicInput1">Basic Input 1:</label>
      <input type="text" id="basicInput1" className="border rounded-md p-2 mt-2 block w-full" />

      <label htmlFor="basicInput2">Basic Input 2:</label>
      <input type="text" id="basicInput2" className="border rounded-md p-2 mt-2 block w-full" />
    </div>
  );
};

export default BasicTab;
