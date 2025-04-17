import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <div className={css.container}>
      <AppBar />
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  );
}