import React, { lazy, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import MyContext from '../context';
import { retry } from '../utils/retry';
import { authRoutes, privateRoutes, publicRoute } from './route';

const PublicLayout = lazy(() => retry(() => import('../presentation/layouts/PublicLayout')));
const PrivateLayout = lazy(() => retry(() => import('../presentation/layouts/PrivateLayout')));
const AuthLayout = lazy(() => retry(() => import('../presentation/layouts/AuthLayout')));
const NotFound = lazy(() => retry(() => import('../presentation/NotFound')));

const Routing = ({ baseData, ...props }) => {
  const { data } = useContext(MyContext)

  return (
    <Routes {...props} >
      <Route path='/' element={<PublicLayout {...{ data }} defaultAccess />}>
        {
          publicRoute().map(({ id: key, ...otherData }) => <Route index key={key} {...otherData} />)
        }
      </Route>
      <Route path='/' element={<AuthLayout {...{ isLogged: data.isLogged }} />}>
        {
          authRoutes().map(({ id: key, ...otherData }) => <Route index key={key} {...otherData} />)
        }
      </Route>
      <Route path='/' element={<PrivateLayout {...{ isLogged: data.isLogged }} />}>
        {
          privateRoutes(data?.role).map(({ id: key, ...otherData }) => <Route index key={key} {...otherData} />)
        }
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routing