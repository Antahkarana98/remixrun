import { Link, useLocation } from '@remix-run/react'

const Navegacion = () => {
  const location = useLocation()
  
  return (
    <nav className='navegacion'>
      <Link
        to='/'
        className={location.pathname === '/' ? 'active' : ''}
      >Home</Link>
      <Link
        className={location.pathname === '/about' ? 'active' : ''}
        to='/about'
      >About</Link>
      <Link
        to='/shop'
        className={location.pathname === '/shop' ? 'active' : ''}
      >Shop</Link>
      <Link
        to='/blog'
        className={location.pathname === '/blog' ? 'active' : ''}
      >Blog</Link>
  </nav>
  )
}

export default Navegacion
