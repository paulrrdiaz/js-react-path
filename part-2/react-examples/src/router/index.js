import React from 'react'
import { Router } from '@reach/router'

import Home from '../views/Home';
import Calculator from '../views/Calculator';

export default () => {
  return (
    <Router>
      <Home path="/" />
      <Calculator path="/calculator" />
    </Router>
  )
}