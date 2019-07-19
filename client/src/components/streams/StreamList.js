import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component{
  componentDidMount() {
    const { fetchStreams } = this.props;

    fetchStreams();
  }

  renderAdmin({ userId }) {
    const { currentUserId } = this.props;

    if (userId === currentUserId) {
      return (
        <div className="right floated content">
          <button className="button ui primary">Edit</button>
          <button className="button ui negative">Delete</button>
        </div>
      );
    }
  }

  renderList() {
    const { streams } = this.props;

    return streams.map(stream => {
      const { id, title, description } = stream;

      return (
        <div key={id} className="item">
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {title}
            <div className="description">{description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { streams, auth } = state;

  return {
    streams: Object.values(streams),
    currentUserId: auth.userId
  };
};

export default connect(mapStateToProps, {
  fetchStreams
})(StreamList);