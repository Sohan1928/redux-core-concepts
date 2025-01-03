// import { Button } from "./components/ui/button";
// import { decrement, increment } from "./redux/features/counter/counterSlice";
// import { useAppDispatch, useAppSelector } from "./redux/hook";

import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  // const dispatch = useAppDispatch();
  // const { count } = useAppSelector((state) => state.counter);

  // const handleIncrement = (amount: number) => {
  //   dispatch(increment(amount));
  // };

  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };

  return (
    // <div className="items-center mt-40 text-center">
    //   <h1 className="pb-8 text-3xl font-bold">Counter with Redux</h1>
    //   <Button onClick={() => handleIncrement(5)} className="">
    //     Increment by 5
    //   </Button>
    //   <Button onClick={() => handleIncrement(1)} className="">
    //     Increment
    //   </Button>
    //   <div className="text-2xl font-bold bg-emerald-400">{count}</div>
    //   <Button onClick={handleDecrement} className="">
    //     Decrement
    //   </Button>
    // </div>
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
