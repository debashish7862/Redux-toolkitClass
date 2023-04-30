import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../Redux/Counter";


export default function Comp() {
    const count =useSelector((store)=>store.data.counter)
    const data =useSelector((store)=>store.data.data)
    const myName =useSelector((store)=>store.data.name)
    console.log(count)
    const dispatch=useDispatch();
  return (
    <div>
        <h1>Comp Element</h1>
        <h1>{count} <button onClick={()=>dispatch(increment())}>increment</button></h1>
        <h1>{count} <button onClick={()=>dispatch(decrement())}>decrement</button></h1>
        <h1>{data}</h1>
        <h1>{myName}</h1>

    </div>
  )
}
