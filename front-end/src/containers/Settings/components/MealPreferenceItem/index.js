import React, { Component } from 'react'
import Button from '../../../../components/Button'
import MealPreferenceSlider from '../MealPreferenceSlider'

import './styles.css'

class MealPreferenceItem extends Component {

  constructor (props) {
    super(props)

    this.state = {
      editing: false,
      notes: '',
    }
  }

  onSaveEdit = () => {

  }

  onToggleEdit = () => {
    this.setState({
      editing: !this.state.editing,
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render () {
    const { editing } = this.state

    return (
      <div className='meal-preference-item'>
        <div className='meal-preference-item-name'>
          Special Herb Grilled Chicken
        </div>

        <div className='meal-preference-item-description'>
          Savory, Fatty, Delicious Premium Atlantic Salmon infused with Lemon for the perfect acerbic taste served with a generous helping of Carbs and Asparagus.
        </div>

        <div className='separator'/>

        <span className='span-edit clickable' onClick={this.onToggleEdit}>Edit Meal Preference</span>
        <span className='span-edit-description'>Meal Preferences are saved, and applied to your next reorder of this meal. </span>

        { editing &&
          <div className='meal-preference-item-edit-section'>
            <div className='separator'/>

            <div className='meal-preference-item-edit-options'>
              <div className='meal-preference-item-edit-options-title'>Options</div>
              <div className='meal-preference-item-edit-options-grid'>
                <MealPreferenceSlider
                  title='Carb Levels'
                />
                <MealPreferenceSlider
                  title='Salt Levels'
                />
                <MealPreferenceSlider
                  title='Sauce Levels'
                />
              </div>
            </div>

            <textarea className='meal-preference-item-edit-notes' name='notes' value={this.state.notes} onChange={this.onChange} placeholder='Example: I prefer my steaks medium rare.'/>

            <div className='meal-preference-item-edit-buttons'>
              <Button onClick={this.onSaveEdit}>Save</Button>
              <Button className='btn-cancel' onClick={this.onToggleEdit}>Cancel</Button>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default MealPreferenceItem
