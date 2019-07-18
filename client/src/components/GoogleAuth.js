import React from 'react';
import clientId from '../clientId';

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    const { isSignedIn } = this.state;

    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return <div>I am signed in!</div>;
    } else {
      return <div>Not signed in</div>;
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
}

export default GoogleAuth;