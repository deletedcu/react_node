import React, { Component } from 'react'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

import 'react-simple-dropdown/styles/Dropdown.css'
import './styles.css'

export const Languages = {
  English: 'English',
  Espanol: 'Español (LA)',
  Portugues: 'Português',
  Deutsch: 'Deutsch',
  Japan: '日本語',
  Korea: '한국어',
  Turkish: 'Türkçe',
}

class FooterLanguageButton extends Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedLanguage: Languages.English,
    }
  }

  onToggleGlobalLanguages = () => {
    this.setState({
      showGlobalLanguages: !this.state.showGlobalLanguages,
    })
  }

  onSelectLanguage = (language) => {
    this.setState({
      selectedLanguage: language,
    }, () => {
      this.refs.languagesDropdown.hide()
    })
  }

  render () {
    const { selectedLanguage } = this.state

    return (
      <Dropdown ref='languagesDropdown' className='language-dropdown'>
        <DropdownTrigger>
          <div className='div-footer-language-button-container clickable'>
            <span>{`Global-${selectedLanguage}`}</span>
            <div className='img-globe'/>
          </div>
        </DropdownTrigger>
        <DropdownContent>
          <div className='main-language-menu' onClick={() => this.onSelectLanguage(Languages.English)}>English</div>
          <div className='main-language-menu' onClick={() => this.onSelectLanguage(Languages.Espanol)}>Español</div>
          <div className='main-language-menu' onClick={() => this.onSelectLanguage(Languages.Portugues)}>Português</div>
          <div className='main-language-menu' onClick={() => this.onSelectLanguage(Languages.Deutsch)}>Deutsch</div>
          <div className='main-language-menu' onClick={() => this.onSelectLanguage(Languages.Japan)}>日本語</div>
          <div className='main-language-menu' onClick={() => this.onSelectLanguage(Languages.Korea)}>한국어</div>
          <div className='main-language-menu' onClick={() => this.onSelectLanguage(Languages.Turkish)}>Türkçe</div>
        </DropdownContent>
      </Dropdown>
    )
  }
}

export default FooterLanguageButton
