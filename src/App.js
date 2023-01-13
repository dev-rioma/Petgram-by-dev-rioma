import React, { useContext, Suspense, lazy } from 'react'
import { AppContext } from './Context'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GlobalStyle } from './styles/Globalstyles'
import Logo from './components/Logo/Logo'
import NavBar from './components/navBar/NavBar'
import { Home } from './pages/Home'
import Detail from './pages/Detail'
import User from './pages/User'
import NotRegisteredUser from './pages/NotRegisteredUser'
import NotFound from './pages/NotFound'

const Favs = lazy(() => import('./pages/Favs'))

const App = () => {
  const { isAuth } = useContext(AppContext)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />} />
          <Route path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
          <Route path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Suspense>
  )
}

export default App
