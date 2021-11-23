import './header.css';

export function Header(props) {

return (
    <div className="header">
        <div className="title-container">
            <h1 className="header-title">
                {props.headerTitle}
            </h1>
        </div>

        <nav className="navbar">
            <ul className="navbar-list">
                {(props.navbarItems).map((item, index) => {
                    return (
                    <li key={index}>
                        <div className="list-item">{item}</div>
                    </li>
                    )
                })}
            </ul>
        </nav>
    </div>
);
}