import { Link } from 'react-router-dom' 

function Header () {
  return (
    <header>
        <div className='logo'>
          <h2>LOGO</h2>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Pokemon</Link></li>
            <li><Link to="/rick">Rick</Link></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header