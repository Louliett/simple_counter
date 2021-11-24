import { HeaderContainer } from '../header/HeaderContainer';
import './counter-functional.css';

export function CounterFunctional(props) {

    return (
        <div className="counter-functional-page">
            <HeaderContainer />
            <h1>Functional Page</h1>
            <div className="counter_container">
                <button className="counter_button">-</button>
                <div className="counter_screen">{props.counter}</div>
                <button className="counter_button">+</button>
            </div>
        </div>

    );

}