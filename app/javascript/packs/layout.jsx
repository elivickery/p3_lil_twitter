import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from './Header'
import Timeline from './Timeline'
import Tweet from './Tweet'
import Composition from './Composition'
import Hashtags from './Hashtags'
import Hashtag from './Hashtag'

const Layout = props => (
  <div>
    <Header />
      <section className="container">
        <Composition />
        <Timeline />
        <Hashtags />
      </section>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Layout />,
    document.querySelector('#react-target'),
  )
})
