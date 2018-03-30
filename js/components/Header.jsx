import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>LEO - Reading the Word of God daily</h1>
        <button
          type="submit"
          onClick={this.props.showSettings}
        >Settings</button>
      </div>
    )
  }
}

Header.propTypes = {
  showSettings: PropTypes.func.isRequired
}

export default Header;