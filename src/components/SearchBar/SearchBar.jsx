import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filters/filtersSlice.js";

function SearchBar() {
    const dispatch = useDispatch();


    const filter = useSelector((state) => state.filters.name);

    const handleSearch = (e) => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <div>
            <input
                type="text"
                name="search"
                value={filter}
                onChange={handleSearch}
                placeholder="Search contacts..."
            />
        </div>
    );
}

export default SearchBar;