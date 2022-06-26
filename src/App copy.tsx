import React, { useEffect } from 'react';
import './scss/app.sass'; 
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { getUsers } from './features/userSlice'
import type { RootState, AppDispatch } from './store'

function App() { 
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const user = useAppSelector(state => state.user)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Prueba</h1> 
        {JSON.stringify(user)}
      </header>
    </div>
  );
}

export default App;
