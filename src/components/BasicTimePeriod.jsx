import { useState } from "react";

export default function BasicTimePeriod() {

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

    return(
        <>
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
        </>
    )
}