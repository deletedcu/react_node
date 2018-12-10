import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isMobileOnly } from 'react-device-detect'
import Button from '../../components/Button'
import Term from './Term'
import './styles.css'

import { hideSidebar } from '../../redux/actions/sideBar'

class TermsOfService extends Component {

  componentDidMount () {
    this.props.dispatch(hideSidebar())
  }

  onDownload = () => {

  }

  render () {
    return (
      <div className='div-terms-of-service-container'>
  
        {/* Content */}
        <div className='div-terms-of-service-content'>
          <div className='div-terms-of-service-header'>
            <div className='div-terms-of-service-header-left'>
              <span className='title'>Terms of Service</span>
              <span className='timestamp'>Last Updated: June 13, 2018</span>
            </div>
            <Button className='btn-download' onClick={this.onDownload}>Download</Button>
          </div>
  
          <div className='div-separator'/>
  
          <div className='div-terms-of-service-body'>
            <div className='div-terms-of-service-paragraph bold'>Welcome to Mealpost (“MP”). By using our website (“Site”) or placing an order, you accept and agree to be bound by these Terms and Conditions (“Terms and Conditions”) and our Privacy Policy. Use of the Site is only available to users who are 18 years of age or older and reside in the United States, or its possessions AND territories. MP makes NO claims that the Site OR ANY of its content is accessible from outside the United States. Should you access our Site outside of the United States, you do so on your own initiative and are responsible for compliance with local laws.</div>
            <div className='div-terms-of-service-paragraph'>We may update these Terms and Conditions from time to time at our sole discretion. The modified Terms and Conditions will be effective 30 days following posting and you agree to the new posted Terms and Conditions by continuing your use of the Site and/or placing an order. Each time you use the Site or place an order, you reaffirm your acceptance of the then-current Terms and Conditions, and your agreement to be bound hereby. You are responsible for staying informed of any changes and are expected to check this page from time to time so you are aware of any changes. If you do not agree with the modified Terms and Conditions, you should stop using the Site.</div>
            <div className='div-terms-of-service-paragraph'>PLEASE READ THIS AGREEMENT CAREFULLY TO ENSURE THAT YOU UNDERSTAND EACH PROVISION, INCLUDING OUR USE OF YOUR LOCATION INFORMATION. THIS AGREEMENT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS, AND ALSO LIMITS THE REMEDIES AVAILABLE TO YOU IN THE EVENT OF A DISPUTE.</div>
            
            <Term
              title='ELIGIBILITY'
              content={['By using our Site, you represent that you have reached the age of majority where you live and that you have the legal ability to accept these Terms and Conditions and to use the Site in accordance with these Terms and Conditions.']}
              collapsed={isMobileOnly}
            />

            <Term
              title='IMPORTANT HEALTH INFORMATION'
              content={['People with certain conditions MUST HAVE physician approval prior to ordering any MP consumable goods; these include, but are not limited to people who: (a) are pregnant, (b) have anorexia or bulimia, (c) have chronic kidney disease, (d) children under 17 years old, or (e) nursing mothers. People with these or any other serious health conditions must seek physician approval before ordering any MP consumables.']}
              collapsed={isMobileOnly}
            />

            <Term
              title='NUTRITION INFORMATION'
              content={['Please note that nutritional information on our site reflects recent updates to meals based on evolving ingredients. The nutritional information for meals at the time of their preparation is reflected on the labels on our meal containers.']}
              collapsed={isMobileOnly}
            />

            <Term
              title='CREDITS AND REFUNDS'
              content={['If you are not satisfied with a meal for any reason, please contact our customer service team at support@mealpost.io. If you need to cancel your order, we ask that you contact us directly before Friday at 11:59pm for a full refund. Any cancellation made after this time will not be refunded. Unfortunately, we have a strict policy regarding cancelling orders due to the fact that once your order has been placed, we have to proceed to purchase and prepare all meals before they actually get cooked on Saturday.']}
              collapsed={isMobileOnly}
            />

            <Term
              title='PAUSE OR CANCEL A SUBSCRIPTION'
              content={['Following your subscription placement and receipt of your first weekly order, you may pause or cancel a subscription to a Plan at any time online by emailing us at support@mealpost.io. Please note, however, that any amounts charged to or paid by your prior to such pause or cancellation will not be refunded, and a pause or cancellation may not impact any active order for which you have already been charged, depending on the status of the order.', 'You are able to resume subscription and the remaining meals will be delivered weekly according to your plan.']}
              collapsed={isMobileOnly}
            />

            <Term
              title='FOOD SUBSTITUTION POLICY'
              content={['Although MP takes every reasonable measure to have sufficient inventory to fill your order, availability of product(s) may change without notice. MP is not responsible for unavailability of product due to popular demand, whether discontinued or still in production.', 'In the completion of orders, MP reserves the right to substitute a similar product. When making substitutions, MP takes great care to meet the requirements of your particular program or order. Substituted food items may contain different ingredients and allergens than those in items originally ordered. Prior to consumption, please be sure to carefully check all individual product packages for the most updated information regarding ingredients and nutritional content for any/all of MP’s food products, including new and improved items, if you have any food allergies or if you are otherwise concerned about any particular ingredients.']}
              collapsed={isMobileOnly}
            />

            <Term
              title='Delivery/Pick up Terms'
              content={['We ask all customer to please take into consideration that our delivery time is Sunday from 9am to 3pm. Please include any gate codes or specific delivery instructions in our “Order Notes” section especially if you live in a complex. Mealpost is not responsible for theft, rodents, or spoilage during delivery drop off. Customer who fail to pick up or receive delivery within the allotted time will be forced to pick up from the following day or following week.']}
              collapsed={isMobileOnly}
            />

            <Term
              title='INTELLECTUAL PROPERTY'
              content={[
                'The entire contents of the Site or Sites are copyrighted as a collective work under the laws of the United States and other copyright laws. MP holds the copyright in the collective work. The collective work includes works which may be property of other members. You may display and, subject to any expressly stated restrictions or limitations relating to specific material, download portions of the material from the different areas of the Site or Sites solely for your own non-commercial use, unless otherwise permitted (e.g., in the case of electronic coupons, etc.). Any redistribution, retransmission or publication of any copyrighted material is strictly prohibited without the express written consent of the copyright owner. You agree not to change or delete any proprietary notices from materials downloaded from the Site or Sites.', 
                'The Site and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof), are owned by MP or its affiliates, its licensors or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.', 
                'These Terms and Conditions permit you access to the Site for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works from, publicly display, publicly perform, republish, <span class="bold">download, store or transmit any of the material on our Site.</span>',
                '<span class="bold">You must not (i) modify copies of any materials from the Site; (ii) use any illustrations, photographs, video or audio sequences or any graphics separately from the accompanying text, and (iii) delete or alter any copyright, trademark or other proprietary rights notices from copies of materials from the Site. You must not access or use for any commercial purposes any part of the Site or any services or materials available through the Site.</span>',
                '<span class="bold">If you print, copy, modify, download or otherwise use or provide any other person with access to any part of the Site in breach of the Terms and Conditions, your right to use the Site will cease immediately and you must, at our option, return or destroy any copies of the materials you have made. No right, title or interest in or to the Site or any content on the Site is transferred to you, and all rights not expressly granted are reserved by MP. Any use of the Site not expressly permitted by these Terms and Conditions is a breach of these Terms and Conditions and may violate copyright, trademark and other laws.</span>'
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='TRADEMARKS'
              content={[
                'The MP name, logo and all related names, logos, product and service names, designs and slogans are trademarks of MP or its affiliates or licensors. You must not use such marks without the prior written permission of MP. All other names, logos, product and service names, designs and slogans on this Site are the trademarks of their respective owners.', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='COPYRIGHT PROTECTION'
              content={[
                'If you believe any materials accessible on or from the Site infringe your copyright, you may request removal of those materials (or access thereto) from this Site by contacting MP (as set forth below) and providing the following information:', 
                'Identification of the copyrighted work that you believe to be infringed. Please describe the work and, where possible, include a copy or the location (e.g., URL) of an authorized version of the work.', 
                'Identification of the material that you believe to be infringing and its location. Please describe the material, and provide us with its URL or any other pertinent information that will allow us to locate the material.',
                'Your name, address, telephone number, and e-mail address',
                'A statement that you have a good faith belief that the complained use of the materials is not authorized by the copyright owner, its agent, or the law.',
                'A statement that the information that you have supplied is accurate, and indicating that “under penalty of perjury,” you are the copyright owner or are authorized to act on the copyright owner’s behalf.',
                'A signature or the electronic equivalent from the copyright holder or authorized representative.',
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='CHANGES TO THE SITE'
              content={[
                'MP may update the content on this Site from time to time, but its content is not necessarily complete or up-to-date. Any of the material on the Site may be out of date at any given time, and MP is under no obligation to update such material.', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='INFORMATION ABOUT YOU AND YOUR VISITS TO THE SITE'
              content={[
                'All information we collect on this Site is subject to our Privacy Policy. By using the Site, you consent to all actions taken by MP with respect to your information in compliance with the Privacy Policy.', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='ONLINE PURCHASES AND OTHER TERMS AND CONDITIONS'
              content={[
                'All purchases through this Site or other transactions for the sale of goods or services or information formed through the Site or as a result of visits made by you are governed by these Terms and Conditions.', 
                'Additional terms and conditions may also apply to specific portions, services or features of the Site. All such additional terms and conditions are hereby incorporated by this reference into these Terms and Conditions.', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='WARRANTIES'
              content={[
                '<span class="bold">The Sites and/or Site and the content are provided on an “as is” and “as available” basis.</span>', 
                'MP makes no warranty as to the reliability, accuracy, timeliness, usefulness, adequacy, completeness or suitability of the Sites and/or Site. MP cannot and does not warrant against human and machine errors, omissions, delays, interruptions or losses, including loss of data. MP cannot and does not guarantee or warrant that files available for downloading from these Sites and/or Site will be free of infection by viruses, worms, Trojan horses, or other codes that manifest contaminating or destructive properties. MP cannot and does not guarantee or warrant that any content you post on the Sites will remain on the Sites. MP does not warrant or guarantee that the functions or services performed on the Sites and/or Site will be uninterrupted or error-free or that defects in the Sites and/or Site will be corrected.', 
                'MP may disable all or any social media features and any links at any time without notice in our discretion.',
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='Limitation of Liability'
              content={[
                'MEALPOST’S ENTIRE LIABILITY AND YOUR EXCLUSIVE REMEDY WITH RESPECT TO ANY DISPUTE WITH MEALPOST IS TO DISCONTINUE YOUR USE OF THE SITE. MEALPOST AND ITS VENDORS SHALL NOT BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES ARISING FROM YOUR USE OF THE SITES AND/OR SITE OR FOR ANY OTHER CLAIM RELATED IN ANY WAY TO YOUR USE OF THE SITES AND/OR SITE. THESE EXCLUSIONS FOR INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES INCLUDE, WITHOUT LIMITATION, DAMAGES FOR HEALTH-RELATED ISSUES, LOST PROFITS, LOST DATA, LOSS OF GOODWILL, WORK STOPPAGE, COMPUTER FAILURE OR MALFUNCTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, EVEN IF MEALPOST HAD BEEN ADVISED OF THE POSSIBILITY THEREOF AND REGARDLESS OF THE LEGAL OR EQUITABLE THEORY UPON WHICH THE CLAIM IS BASED. BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES OR JURISDICTIONS, MEALPOST’S AND ITS VENDORS’ LIABILITY SHALL BE LIMITED TO THE EXTENT PERMITTED BY LAW.', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='INDEMNIFICATION'
              content={[
                'You agree to indemnify, defend, and hold MP, its officers, directors, employees, agents, licensors, and suppliers, harmless from and against any claims, actions or demands, liabilities and settlements including without limitation, reasonable legal and accounting fees, resulting from, or alleged to result from, your violation of these Terms and Conditions or your use of the Sites and/or Site, including, but not limited to, any content that you may post, any use of the Sites’ AND/OR Site’s content, services and products other than as expressly authorized in these Terms and Conditions or your use of any information obtained from the Sites and/or Site.', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='GOVERNING LAW AND JURISDICTION'
              content={[
                'These Terms and Conditions shall be governed by and construed in accordance with the laws of the People of California, without regard to its conflict of laws rules.', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='WAIVER AND SEVERABILITY'
              content={[
                'No waiver by MP of any of the terms and conditions set forth in these Terms and Conditions shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of MP to assert a right or provision under these Terms and Conditions shall not constitute a waiver of such right or provision.', 
                'If any provision of these Terms and Conditions is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms and Conditions will continue in full force and effect.',
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='PRIVACY'
              content={[
                'This Privacy Policy describes how Mealpost LLC. and its subsidiaries and affiliates (collectively, “Mealpost”) handle and protect the information that we collect through our websites, mobile apps, and other interactive software products and services that we operate and that link to this Privacy Policy (collectively, our “Services”).', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='I. INFORMATION WE COLLECT'
              content={[
                'We collect information when you provide it to us, when you communicate with others, and when you use the Services. We also may collect information about you from other sources.', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='Information We Collect Automatically'
              content={[
                'When you access or use the Sites, the types of information we may automatically collect about you include:',
                '(a) Log Information: When you visit the Sites, our servers automatically record certain log file information, such as your Internet Protocol (“IP”) address, operating system, browser type and language, referring URLs, access times, pages viewed, links clicked and other information about your activities on the Sites.',
                '(b) Mobile Device Information: We collect information about the mobile device you use to access or use the Sites, including the hardware model, operating system and version, unique device identifiers, mobile network information and information about your use of our mobile applications. With your consent, we may also collect information about the location of your device and access and collect information from certain native applications on your device (such as your device’s camera, photo album and phonebook applications) to facilitate your use of certain features of the Sites. For more information about how you can control the collection of location information and/or our access to other applications on your device, please see “Your Choices” below.',
                '(c) Information Collected by Cookies and Other Tracking Technologies: We and our service providers use various tracking technologies, including cookies and web beacons, to collect information about you when you interact with our Sites, including information about your browsing and purchasing behavior. Cookies are small data files stored on your hard drive or in device memory that help us improve the Sites and your experience, see which areas and features of the Sites are popular, and count visits. Web beacons are electronic images that may be used in the Sites or emails and help deliver cookies, count visits and understand usage and campaign effectiveness. For more information about cookies, and how to disable them, please see “Your Choices” below.',
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='Interest-Based Ads'
              content={[
                'We may allow others to serve advertisements on our behalf across the Internet and to provide analytics services. These entities may use cookies, web beacons and other technologies to collect information about your use of the Sites and other websites, including your IP address, web browser, pages viewed, time spent on pages, links clicked and conversion information. This information may be used by us and others to, among other things, analyze and track data, determine the popularity of certain content, deliver advertising and content targeted to your interests on the Sites and other websites and better understand your online activity.', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='Customized Ad Campaigns'
              content={[
                'We may also work with third party social media sites, such as Facebook, to serve ads to you as part of a customized campaign, unless you notify us that you prefer not to have information about you used in this way.', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='Security'
              content={[
                'Mealpost takes reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. Please understand, however, that no security system is impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that the information you supply will not be intercepted while being transmitted to or from us over the Internet. In particular, email sent to or from the Sites may not be secure, and you should therefore take special care in deciding what information you send to us via email.', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='Account Information'
              content={[
                'You may update, correct or modify information about you at any time by logging into your online account or by emailing us at support@mealpost.io. If you wish to deactivate your account, please email us at support@mealpost.io, but note we may continue to store information about you as required by law or for legitimate business purposes.', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='Location Information'
              content={[
                'With your consent, we may collect information about your actual location when you use our mobile applications. You may stop the collection of this information at any time by changing the settings on your mobile device, but note that some features of our mobile applications may no longer function if you do so.', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='Cookies'
              content={[
                'Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of the Sites.', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='Your California Privacy Rights'
              content={[
                'California law permits residents of California to request certain details about how their information is shared with third parties for direct marketing purposes.', 
              ]}
              collapsed={isMobileOnly}
            />

            <Term
              title='ENTIRE AGREEMENT'
              content={[
                'These Terms and Conditions and our Privacy Policy constitute the sole and entire agreement between you and MP with respect to the Sites and/or Site and supersede all prior and contemporaneous understandings, agreements, representations and warranties, both written and oral, with respect to the Sites and/or Site.', 
              ]}
              collapsed={isMobileOnly}
            />

            <div className='div-terms-of-service-paragraph bold'>Updated: June 23rd, 2018</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(TermsOfService)
