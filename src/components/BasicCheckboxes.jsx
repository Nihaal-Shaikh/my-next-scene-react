export default function BasicCheckboxes() {

    return (
        <>
            <p>Select your poison</p>
            <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Checkbox 1</span>
                </label>
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Checkbox 2</span>
                </label>
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Checkbox 3</span>
                </label>
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Checkbox 4</span>
                </label>
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Checkbox 5</span>
                </label>
            </div>
        </>
    )
}