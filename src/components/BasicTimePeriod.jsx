export default function BasicTimePeriod({ onFromChange, onToChange, from, to }) {

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, index) => currentYear - index);

    return(
        <>
        <div className="flex space-x-4">
                <label>
                    From:
                    <select value={from} onChange={onFromChange}>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    To:
                    <select value={to} onChange={onToChange}>
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