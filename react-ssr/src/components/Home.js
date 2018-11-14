import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Test</p>
        <button>change text!</button>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
