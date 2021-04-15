
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import './App.css';
import { store, persistor } from './config/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/Router';
import Navigator from './navigatitor';


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <div className="App">
            <Navigator />
            <AppRouter />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
