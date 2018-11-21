import React, { Component } from 'react'
import HelpRecentActivity from '../HelpRecentActivity'

import './styles.css'

import imgLoadMore from '../../../../assets/images/load_more.svg'

class HelpRecentActivityList extends Component {

  onLoadMore = () => {
    
  }

  render () {
    return (
      <div className='help-recent-activity-list'>
        <div className='help-recent-activity-list-title'>Recent Activity</div>
        <HelpRecentActivity
          title='About the Food'
          question='Can I make special requests to my meal?'
          timestamp='Commend added about 9 months ago'
        />
        <HelpRecentActivity
          title='About the Food'
          question='Can I make special requests to my meal?'
          timestamp='Commend added about 9 months ago'
        />
        <HelpRecentActivity
          title='About the Food'
          question='Can I make special requests to my meal?'
          timestamp='Commend added about 9 months ago'
        />
        <HelpRecentActivity
          title='About the Food'
          question='Can I make special requests to my meal?'
          timestamp='Commend added about 9 months ago'
        />
        <img className='img-load-more clickable' src={imgLoadMore} alt='more' onClick={this.onLoadMore}/>
      </div>
    )
  }
}

export default HelpRecentActivityList
