import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../style/Styles';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Title>LEO - Reading the Word of God daily</Title>
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