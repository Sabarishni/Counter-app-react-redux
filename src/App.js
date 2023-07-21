import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, login, logout } from './actions/counterAction';


function App() {

  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  const handleLogin = ()=> {
    if(!auth){
      dispatch(login());
    }
  }

  const handleLogout = () => {
    if(auth){
      dispatch(logout());
    }
  }

  return (
    <div className="App">

          <div>
            { auth ? <div className='auth-info'>You have successfully logged in!</div> : null}
          </div>
          <h1 className='pt-5'>The count is:</h1>
          <div className='counter-value mt-3 mb-5'>{ counter }</div>
          <button className='btn action-btn' onClick={() => dispatch(increment())}>+</button>
          <button className='btn action-btn' onClick={() => dispatch(decrement())}>-</button>
          <button className='btn reset-btn' onClick={() => dispatch(reset())}>Reset</button> 
          <br />


          <button className='btn auth-btn' onClick={handleLogin}>Login</button> 
          <button className='btn auth-btn' onClick={handleLogout}>Logout</button> 

    </div>
  );
}

export default App;
