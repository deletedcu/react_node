import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AsyncImport extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
  }

  state = {
    component: null
  }

  toggleFoucClass () {
    const root = document.getElementById('root')
    console.log(root);
    
    if (root.className.includes('fouc')) {
      root.className = root.className.replace('fouc', '')
    } else {
      root.className = root.className + ' fouc'
    }
  }

  componentWillMount () {
    this.toggleFoucClass()
  }

  componentDidMount () {
    this.props.load()
      .then((component) => {
        setTimeout(() => this.toggleFoucClass(), 0)
        this.setState(() => ({
          component: component.default
        }))
      })
  }

  render () {
    return this.props.children(this.state.component)
  }
}

const asyncRoute = (importFunc) =>
  (props) => (
    <AsyncImport load={importFunc}>
      {(Component) => {
        return Component === null
          ? null
          : <Component {...props} />
      }}
    </AsyncImport>
  )

export default asyncRoute
