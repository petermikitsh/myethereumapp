import { connect } from 'react-redux';

function Root({ test }) {
  return `testing ${test}`;
}

function mapStateToProps() {
  return {
    test: '123',
  };
}

export default connect(mapStateToProps)(Root);
