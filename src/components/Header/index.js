import './index.css'

const Header=()=>{
    return(
        <nav className="nav-header">
            <div className="nav-content">
                <p className="website-logo">AB</p>
                <ul className="nav-menu">
                    <li className='menu-item'><p>LinkedIn</p></li>
                    <li className='menu-item'><p>GitHUB</p></li>
                    <li className='menu-item'><p>Naukari</p></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header