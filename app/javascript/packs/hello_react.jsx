// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div style={{
    marginTop: '80px',
    border: '2px solid black',
    borderRadius: '10px',
    padding: '10px 20px'
  }}>
    <p>Hello from {props.name}!</p>
    <p>
      The code in this box was generated from these files:
    </p>
    <ul>
      <li><code>app/javascript/packs/hello_react.jsx</code></li>
      <li><code>app/javascript/packs/application.js</code></li>
      <li><code>app/views/pages/_react.html.erb</code></li>
    </ul>
    <p>The code for the rest of this page is in <code>app/views/pages/home.html.erb</code></p>
    <p>Re-implement all of <code>home.html.erb</code> in pure React.</p>
  </div>
)

Hello.defaultProps = {
  name: 'Webpacker'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.querySelector('#react-target'),
  )
})
