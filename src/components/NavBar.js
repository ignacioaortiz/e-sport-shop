import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex='0' className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h7' />
            </svg>
          </label>
          <ul tabIndex='0' className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            <Link to='/'>
              <a>Home</a>
            </Link>
            <li class='menu-title'>
              <span>Shop</span>
            </li>
            <Link to='category/Pro_Kit'>
              <a>Pro Kit</a>
            </Link>
            <Link to='category/Crest_Collection'>
              <a>Crest Collection</a>
            </Link>
          </ul>
        </div>
      </div>
      <div className='navbar-center'>
        <Link to='/'>
          <a className='btn btn-ghost normal-case text-xl'>medusa e-sports</a>
        </Link>
      </div>
      <CartWidget />
    </div>
  );
};

export { NavBar };
