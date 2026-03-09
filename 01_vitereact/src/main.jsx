import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createElement } from 'react'

const element = (
  <a href="https://google.com" target='_blank'>Google</a>
)

const element2 = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Google'
);

createRoot(document.getElementById('root')).render(
  element2
)
