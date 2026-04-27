import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage'
import { MainLayout } from './layouts/MainLayout'
import { Standings } from './pages/Standings'
import { Teams } from './pages/Teams'
import { TeamPage } from './pages/TeamPage'
import { PlayerPage } from './pages/PlayerPage'

function App() {

  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/swV2.js')
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.error('service worker not registered', err)) 
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:id" element={<TeamPage />} />
            <Route path="/player/:id" element={<PlayerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
