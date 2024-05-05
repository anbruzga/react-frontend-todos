import './Counter.css'
import {useState} from "react"
import CounterButton from "./CounterButton";
import ResetButton from "./ResetButton";


export default function Counter() {
    const [count, setCountTotal] = useState(0)

    function incrementCounterParentFunction(by){
        setCountTotal(count+by)
    }

    function decrementCounterParentFunction(by){
        setCountTotal(count-by)
    }

    return (
        <div className="Counter">
            <span className="countTotal">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <ResetButton to={0} resetButtonAction={setCountTotal} />
        </div>
    )
}