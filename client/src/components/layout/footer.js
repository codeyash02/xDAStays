import React from 'react'
import '../../styles/components/Footer.css'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import Instagram from '../../assets/instagram.svg'
function footer() {
    return (
        <div className='footer'>
            <div className='footer_heading'>
                <div className='footer_heading_left'>
                    <h4>Useful Links</h4>
                </div>


                <div className='footer_heading_right'>
                    <h4>Social</h4>
                </div>
            </div>
            <div className='footer_container'>

                <div className='content_left'>

                    <div className='content_left_col'>
                        <p>Guest Policy</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='content_left_col'>
                        <p>Guest Policy</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='content_left_col'>
                        <p>Guest Policy</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className='content_right'>


                    <div className='content_row'>
                        <span >
                         <img className='footer_icon' src={Facebook} alt=''/>
                        </span>
                        <span >
                          <img className='footer_icon' src={Twitter} alt=''/>
                        </span>
                        <span >
                        <img className='footer_icon' src={Instagram} alt=''/>
                        </span>
                    </div>
                </div>
            </div>
            <div className='footer_bottom'>
                <div className='footer_bottom_heading'>
                    <h4 style={{paddingTop:'30px'}}>xDA© 2021. All Rights Reserved</h4>
                </div>
            </div>

        </div>
    )
}

export default footer
