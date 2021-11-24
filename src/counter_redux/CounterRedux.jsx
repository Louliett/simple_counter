import { HeaderContainer } from '../header/HeaderContainer';
import './counter-redux.css';

export function CounterRedux(props) {

    return (
        <div className="counter-redux-page">
            <HeaderContainer />
            <h1>Redux Page</h1>
            <div className="counter_container">
                <button className="counter_button">-</button>
                <div className="counter_screen">{props.counter}</div>
                <button className="counter_button">+</button>
            </div>
        </div>

    );

}