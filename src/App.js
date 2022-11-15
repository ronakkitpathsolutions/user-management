import React, { Suspense } from 'react'
import Loader from './presentation/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Routing from './routes';
import CustomNavBar from './common/CustomNavBar';

export const App = () => {
  return (
      <Suspense fallback={<Loader/>} >
          <div>
            <CustomNavBar bg="primary" variant="dark" />
            <Routing />      
          </div>
      </Suspense>
  )
}

export default App;