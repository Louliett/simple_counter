import './counter-class.css';

export function CounterClass(props) {

    return (
        <div className="counter-class-container">
            <h1>Class Page</h1>
            <div className="counter_panel">
                <button className="decrease_button">-</button>
                <div className="counter_screen">{props.counter}</div>
                <button className="increase_button">+</button>
            </div>
        </div>

    );

}