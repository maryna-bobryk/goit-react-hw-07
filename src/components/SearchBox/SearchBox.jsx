import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  const handleFilter = e => {
    const query = e.target.value;
    dispatch(changeFilter(query));
  };

  return (
    <div className={s.searchBoxWrapper}>
      <label className={s.searchBoxLabel}>
        <span>Finde contact by name</span>
        <input
          type="text"
          className={s.searchBoxInput}
          value={value}
          onChange={handleFilter}
        ></input>
      </label>
    </div>
  );
};

export default SearchBox;
