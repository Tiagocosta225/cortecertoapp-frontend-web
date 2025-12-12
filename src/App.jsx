import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

// Importar componentes das telas
import LoginScreen from './components/LoginScreen'
import HomeScreen from './components/HomeScreen'
import BookingScreen from './components/BookingScreen'
import ProfileScreen from './components/ProfileScreen'
import ConfirmationScreen from './components/ConfirmationScreen'

function App() {
  const [user, setUser] = useState(null)
  const [bookings, setBookings] = useState([])

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<LoginScreen setUser={setUser} />} />
          <Route path="/home" element={<HomeScreen user={user} bookings={bookings} />} />
          <Route path="/booking" element={<BookingScreen user={user} setBookings={setBookings} />} />
          <Route path="/profile" element={<ProfileScreen user={user} bookings={bookings} />} />
          <Route path="/confirmation" element={<ConfirmationScreen />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

