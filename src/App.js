import { Amplify } from 'aws-amplify'
import { useAuthenticator } from "@aws-amplify/ui-react";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Container } from 'react-bootstrap'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '@aws-amplify/ui-react/styles.css'
import awsExports from './aws-exports'
import './App.css'
import Simulate from './routes/Simulate'
import Practice from './routes/Practice'
import Home from './routes/Home'
import Navigation from './components/Navbar';
import Signout from './components/Signout';
import Login from './components/Login'
import PrivacyPolicy from './routes/PrivacyPolicy';

Amplify.configure(awsExports)

const App = () => {
  const { user } = useAuthenticator();

  if (!user) {
    return (
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/" element={<Login />} />
      </Routes>
    )
  }

  const routes = (
    <Routes>
      <Route path="/simulate" element={<Simulate user={user} />} />
      <Route path="/practice" element={<Practice user={user} />} />
      <Route path="/signout" element={<Signout />} />
      <Route path="/" element={<Home user={user} />} />
    </Routes>
  )

  return (
    <ThemeProvider>
      <Container>
       <Navigation user={user} />
        {routes}
      </Container>
    </ThemeProvider>
  )
}

export default App
