import reactLogo from './assets/react.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { increment, incrementAmount } from './features/counter/counter-slice';
import { useAppSelector } from './hooks';

// Passar como parametros count, increment, incrementAmount como params da function App caso utilizando forma antiga

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispach = useDispatch();

  function handleOnClick() {
    //increment();
    //dispach({ type: 'counter/increment' });
    dispach(increment());
  }

  function handleOnClickAmount() {
    //incrementAmount(5);
    //dispach({ type: 'counter/incrementAmount', payload: 5 });
    dispach(incrementAmount(5));
  }
  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={handleOnClick}>count is {count}</button>
        <button onClick={handleOnClickAmount}>Increment Amount</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

//OLD SCHOOL REDUX
// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.value,
//   };
// };

// const mapDispachToProps = (dispach) => {
//   return {
//     increment: () => dispach({ type: 'counter/increment' }),
//     incrementAmount: (amount) =>
//       dispach({ type: 'counter/incrementAmount', payload: amount }),
//   };
// };

// export default connect(mapStateToProps, mapDispachToProps)(App);
