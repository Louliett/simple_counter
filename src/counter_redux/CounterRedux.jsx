import './counter-redux.css';

export function CounterRedux(props) {

    return (
        <div className="counter-redux-container">
            <h1>Redux Page</h1>
            <div className="counter_panel">
                <button className="increase_button">-</button>
                <div className="counter_screen">{props.counter}</div>
                <button className="decrease_button">+</button>
            </div>
        </div>

    );

}