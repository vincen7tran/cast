import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;

    fetchStream(match.params.id);
  }

  render() {
    const { stream } = this.props;

    if (!stream) return <div>Loading...</div>;
    
    return (
      <div>StreamEdit</div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const { params } = ownProps.match;
  const { streams } = state;

  return {
    stream: streams[params.id]
  };
}

export default connect(mapStateToProps, {
  fetchStream
})(StreamEdit);