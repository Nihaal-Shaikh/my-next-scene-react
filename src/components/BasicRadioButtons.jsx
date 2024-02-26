export default function BasicRadioButtons({ onTypeChange, type }) {

    return (
        <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
                <input
                    type="radio"
                    value="Series"
                    checked={type === 'Series'}
                    onChange={() => onTypeChange('Series')}
                    className="form-radio h-5 w-5 text-blue-500"
                />
                <span className="ml-2 text-gray-700">Series</span>
            </label>
            <label className="inline-flex items-center">
                <input
                    type="radio"
                    value="movie"
                    checked={type === 'Movies'}
                    onChange={() => onTypeChange('movie')}
                    className="form-radio h-5 w-5 text-blue-500"
                />
                <span className="ml-2 text-gray-700">Movies</span>
            </label>
        </div>
    );
}