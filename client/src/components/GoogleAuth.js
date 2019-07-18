import React from 'react';
import clientId from '../clientId';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId,
        scope: 'email'
      });
    });
  }

  render() {
    return (
      <div>Google</div>
    );
  }
}

export default GoogleAuth;