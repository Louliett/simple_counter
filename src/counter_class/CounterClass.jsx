import { HeaderContainer } from '../header/HeaderContainer';
import './counter-class.css';

export function CounterClass(props) {

    return (
        <div className="counter-class-page">
            <HeaderContainer />
            <h1>Class Page</h1>
            <div className="counter_container">
                <button className="counter_button">-</button>
                <div className="counter_screen">{props.counter}</div>
                <button className="counter_button">+</button>
            </div>
        </div>

    );

}