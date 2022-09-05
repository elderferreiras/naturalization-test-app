import { Amplify } from 'aws-amplify'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Container } from 'react-bootstrap'
import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Route, Routes } from 'react-router-dom'
import '@aws-amplify/ui-react/styles.css'
import awsExports from './aws-exports'
import './App.css'
import Simulate from './routes/Simulate'
import Practice from './routes/Practice'
import Home from './routes/Home'

Amplify.configure(awsExports)

class App extends React.Component {
  render() {
    const { user } = this.props

    const routes = (
      <Routes>
        <Route path="/simulate" element={<Simulate user={user} />} />
        <Route path="/practice" element={<Practice user={user} />} />
        <Route path="/" element={<Home user={user} />} />
      </Routes>
    )

    return (
      <ThemeProvider>
        <Container>
          {routes}
        </Container>
      </ThemeProvider>
    )
  }
}

export default withAuthenticator(App)
