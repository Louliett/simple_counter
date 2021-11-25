import './counter-functional.css';

export function CounterFunctional(props) {

    return (
        <div className="counter-functional-container">
            <h1>Functional Page</h1>
            <div className="counter_panel">
                <button className="decrease_button">-</button>
                <div className="counter_screen">{props.counter}</div>
                <button className="increase_button">+</button>
            </div>
        </div>

    );

}