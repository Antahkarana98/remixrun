import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegacion from './navegacion'

const Header = () => {



  return (
    <div>
      <header className='header'>
        <div className='contenedor barra'>
          <Link to="/">
            <img className='logo' src={logo} alt='logo' />
          </Link>
          <Navegacion />
        </div>
      </header>
    </div>
  )
}

export default Header
