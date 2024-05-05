import './Counter.css'

export default function ResetButton({to = 0, resetButtonAction}) {

    return (
        <div className="Counter">
            <button className="resetButton"   onClick={() => resetButtonAction(to)}>Reset</button>
        </div>
    )
}