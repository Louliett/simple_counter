import './header.css';

export function Header(props) {

return (
    <div className="header">
        <div className="title-container">
            <p className="header-title">
                {props.headerTitle}
            </p>
        </div>

        <nav className="navbar">
            <ul className="navbar-list">
                {(props.navbarItems).map((item, index) => {
                    return (
                    <li key={index}>
                        {item}
                    </li>
                    )
                })}
            </ul>
        </nav>
    </div>
);
}