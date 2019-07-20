import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;

    fetchStream(match.params.id);
  }

  onSubmit = (formValues) => {
    const { editStream, match } = this.props;

    editStream(match.params.id, formValues);
  };

  render() {
    const { stream } = this.props;

    if (!stream) return <div>Loading...</div>;
    
    const { title, description } = stream;

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={{ title , description }}
          onSubmit={this.onSubmit}
        />
      </div>
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
  fetchStream,
  editStream
})(StreamEdit);