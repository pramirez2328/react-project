import { Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
  return (
    <header >
      <Navbar className='navbar-dark'>
        <NavbarBrand className='navbar-brand'>
          <img src={NucampLogo} className='App-logo' alt='logo' />
        </NavbarBrand>
      </Navbar>
    </header>
  );
};

export default Header;
