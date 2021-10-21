import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default function facebookLogin () {
    const responseFacebook = (response) => {
        console.log(response)
          }
          return (
            <div>
            <FacebookLogin
      appId="2984120755187172"
      autoLoad={true}
      callback={responseFacebook} />
            </div>
          )
}