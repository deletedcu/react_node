import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'

class HorizontalSelectionGrid extends Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedIndex: 0,
    }
  }

  onSelect = (index) => {
    this.setState({
      selectedIndex: index,
    })
  }

  render () {
    const values = this.props.values

    return (
      <div className='selection-grid'>
       {
        values.map((value, index) => {
          return (<div 
                    key={ index }
                    className={ classNames('selection-grid-cell', 'clickable', {'selection-grid-cell-selected': this.state.selectedIndex === index}, {'selection-grid-cell-has-separator': index < values.length - 1}) }
                    onClick={ () => {this.onSelect(index)} }
                    >
                    { value }
                  </div>
          )
         })
       }
      </div>
    )
  }
}

export default HorizontalSelectionGrid
