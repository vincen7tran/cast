import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component{
  componentDidMount() {
    const { fetchStreams } = this.props;

    fetchStreams();
  }

  renderList() {
    const { streams } = this.props;

    return streams.map(stream => {
      const { id, title, description } = stream;

      return (
        <div key={id} className="item">
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
  const { streams } = state;

  return {
    streams: Object.values(streams)
  };
};

export default connect(mapStateToProps, {
  fetchStreams
})(StreamList);