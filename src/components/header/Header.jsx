import React, { useEffect } from 'react';
import { useDispatch, useTheme } from '../../hooks/appContext';
import styles from './Headers.css';

const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({ type: 'TOGGLE_THEME'});
  }

  useEffect(() => {
    document.body.style = `background-color: var(--${theme}-bg-color); color: var(--${theme}-fg-color)`
  }, [theme]);

  return (
    <section className={styles.Header}>
      <input id="toggle" type="checkbox" name="theme" onChange={handleChange} checked={theme === 'light'} />
      <label htmlFor="toggle"></label>
    </section>
  );
};

export default Header;
