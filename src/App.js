import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import CakeAndIceCreamContainer from './components/CakeAndIceCreamContainer'
import UserContainer from './components/UserContainer'
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <IceCreamContainer />
        <HooksCakeContainer />
        <CakeAndIceCreamContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  )
}

export default App;
