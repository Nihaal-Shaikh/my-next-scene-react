import { useState } from "react";

export default function ImdbRating() {

    const ratingArray = ["Any", "9+", "8+", "7+", "6+", "5+", "4+", "3+", "2+", "1+", "0+"];

    const [rating, setRating] = useState('Any');

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    return (
        <>
            <div className="flex space-x-4">
                <label>
                    Rating:
                    <select value={rating} onChange={handleRatingChange}>
                        {ratingArray.map((rating) => (
                            <option key={rating} value={rating}>
                                {rating}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        </>
    )
}