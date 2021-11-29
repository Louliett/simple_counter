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
                <li key='0'>
                    <div className="list-item">
                        Class
                    </div>
                </li>
                <li key='1'>
                    <div className="list-item">
                        Functional
                    </div>
                </li>
                <li key='2'>
                    <div className="list-item">
                        <a href={"http://localhost:3000/counter-redux"}>Redux</a>
                    </div>
                </li>
                
                {/* {(props.navbarItems).map((item, index) => {
                    return (
                    <li key={index}>
                        <div className="list-item">
                                <a href="`${}/`">{item}</a>
                        </div>
                    </li>
                    )
                })} */}
            </ul>
        </nav>
    </div>
);
}