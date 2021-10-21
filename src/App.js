import './App.css';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, editExpense} from './actions/expenses';
import { Provider } from 'react-redux';
import './firebase/firebase'


const expensifyStore = configureStore();
expensifyStore.subscribe( () =>
  console.log(expensifyStore.getState())
)

const expense1 = expensifyStore.dispatch(
  addExpense({
    description: 'Dell XPS',
    note:'I am broke!',
    amount: 11000,
    createdAt : 35000

  })
)


const expense2 = expensifyStore.dispatch(
  addExpense({
    description: 'Tram',
    note:'I am broke!',
    amount: 12,
    createdAt : 5000

  })
)

expensifyStore.dispatch(
  addExpense({
    description: 'oglobe',
    note:':(',
    amount: 14,
    createdAt : 3000

  })
)






function App() {

  return (
    <div className="App" >
      <Provider store={expensifyStore}>
          <AppRouter />
      </Provider>  
    </div>
  );
}
 
export default App;
