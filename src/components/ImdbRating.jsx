export default function ImdbRating({ onRatingChange, rating }) {

    const ratingArray = ["Any", "9+", "8+", "7+", "6+", "5+", "4+", "3+", "2+", "1+", "0+"];

    return (
        <>
            <div className="flex space-x-4">
                <label>
                    Rating:
                    <select value={rating} onChange={onRatingChange}>
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