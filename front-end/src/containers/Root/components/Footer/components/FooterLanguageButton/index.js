import React, { Component } from 'react'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

import 'react-simple-dropdown/styles/Dropdown.css'
import './styles.css'

import imgPlus from '../../../../../../assets/images/plus_white.svg'
import imgMinus from '../../../../../../assets/images/minus_white.svg'

export const Languages = {
  Japan: 'JAPAN',
  Korea: 'KOREA',
  Spanish: 'SPANISH',
  Espanol: 'Español',
  English: 'English',
  Portugues: 'Português',
  Deutsch: 'Deutsch',
  Francais: 'Français',
}

class FooterLanguageButton extends Component {

  constructor (props) {
    super(props)

    this.state = {
      showGlobalLanguages: false,
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
    const { showGlobalLanguages, selectedLanguage } = this.state

    return (
      <Dropdown ref='languagesDropdown' className='language-dropdown'>
        <DropdownTrigger>
          <div className='div-footer-language-button-container clickable'>
            <span>{(selectedLanguage === Languages.Japan || selectedLanguage === Languages.Korea || selectedLanguage === Languages.Spanish) ? selectedLanguage : `Global-${selectedLanguage}` }</span>
            <div className='img-globe'/>
          </div>
        </DropdownTrigger>
        <DropdownContent>
          <div className='main-language-menu' onClick={() => this.onSelectLanguage(Languages.Japan)}>
            <span>JAPAN</span>
          </div>
          <div className='main-language-menu' onClick={() => this.onSelectLanguage(Languages.Korea)}>
            <span>KOREA</span>
          </div>
          <div className='main-language-menu' onClick={() => this.onSelectLanguage(Languages.Spanish)}>
            <span>SPANISH</span>
          </div>
          <div className='main-language-menu' onClick={this.onToggleGlobalLanguages}>
            <span>GLOBAL</span>
            <img src={ showGlobalLanguages ? imgMinus : imgPlus} alt='plus'/>
          </div>
          { showGlobalLanguages &&
            <div className='sub-language-menus'>
              <div className='sub-language-menu' onClick={() => this.onSelectLanguage(Languages.Espanol)}>Español</div>
              <div className='sub-language-menu' onClick={() => this.onSelectLanguage(Languages.English)}>English</div>
              <div className='sub-language-menu' onClick={() => this.onSelectLanguage(Languages.Portugues)}>Português</div>
              <div className='sub-language-menu' onClick={() => this.onSelectLanguage(Languages.Deutsch)}>Deutsch</div>
              <div className='sub-language-menu' onClick={() => this.onSelectLanguage(Languages.Francais)}>Français</div>
            </div>
          }
        </DropdownContent>
      </Dropdown>
    )
  }
}

export default FooterLanguageButton
