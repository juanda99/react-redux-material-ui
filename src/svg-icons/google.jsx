import React from 'react'
import pure from 'recompose/pure'
import SvgIcon from 'material-ui/lib/svg-icon'

let Google = props => (
  <SvgIcon {...props}>
    <path fill={props.color} d='M14.7,2.5c0.3,0.2,0.5,0.4,0.9,0.7c0.3,0.3,0.6,0.7,0.9,1.1c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.2,0.3,2c0,1.4-0.3,2.5-1,3.4c-0.3,0.4-0.6,0.8-1,1.1c-0.4,0.3-0.8,0.7-1.2,1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1c0,0.4,0.1,0.7,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.9,0.7,1.6,1.4,2.2,2.2c0.6,0.8,0.9,1.9,0.9,3.2c0,1.9-0.9,3.6-2.6,5c-1.8,1.5-4.4,2.3-7.8,2.3c-2.8,0-4.9-0.6-6.3-1.7C0.7,28,0,26.8,0,25.3c0-0.7,0.2-1.5,0.7-2.4c0.4-0.9,1.3-1.7,2.4-2.3c1.3-0.7,2.7-1.2,4.1-1.4c1.4-0.2,2.6-0.3,3.6-0.3c-0.3-0.4-0.6-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.3,0.1-0.6,0.2-0.9c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.2,0-3.8-0.7-4.9-2C2.6,11.5,2,10.1,2,8.5c0-1.9,0.8-3.7,2.5-5.2c1.1-0.9,2.3-1.5,3.6-1.8c1.2-0.2,2.4-0.4,3.5-0.4h8.1l-2.5,1.4H14.7z M16.2,25c0-1-0.3-1.9-1-2.6c-0.7-0.7-1.8-1.6-3.3-2.6c-0.3,0-0.6,0-0.9,0c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.6,0.6c-0.2,0.1-0.5,0.2-0.9,0.3c-0.4,0.2-0.8,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.5,1.9,3.4c1.2,0.9,2.9,1.3,5,1.4c1.9,0,3.4-0.4,4.4-1.2C15.7,27.2,16.2,26.2,16.2,25z M10.6,13.6c1.1,0,2-0.4,2.7-1.1c0.3-0.5,0.6-1,0.7-1.5C14,10.4,14,10,14,9.6c0-1.5-0.4-3.1-1.2-4.7c-0.4-0.8-0.9-1.4-1.5-1.8c-0.6-0.4-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3C5.7,4.6,5.4,5.5,5.4,6.6C5.4,8,5.9,9.5,6.7,11c0.4,0.7,0.9,1.3,1.6,1.8C9,13.3,9.7,13.6,10.6,13.6z'/>
    <path fill='#444444' d='M32,15h-4v-4h-2v4h-4v2h4v4h2v-4h4V15z'/>
  </SvgIcon>
)
Google = pure(Google)
Google.displayName = 'Google'

export default Google
