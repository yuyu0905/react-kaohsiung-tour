import { Link } from "react-router-dom";

function Header () {
    return (
        <header className="header">
            <nav className="container nav">
                <h1 className="fw-bold"><Link to="/">高雄旅遊網</Link></h1>
                <ul>
                    <li><Link to="/">首頁</Link></li>
                    <li><Link to="/tour">景點列表</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;