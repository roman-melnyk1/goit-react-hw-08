// SearchBox.jsx
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/filtersSlice';
import { selectNameFilter } from '../../redux/filters/filtersSelectors';  // Імпортуємо селектор по імені
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.box}>
      <label className={css.label}>
        Пошук за імʼям
        <input
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
}
