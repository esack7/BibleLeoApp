import React from 'react';
import PropTypes from 'prop-types';
import { Title, HeaderComponent } from '../style/Styles';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HeaderComponent>
        <Title>LEO - Reading the Word of God daily</Title>
        <button
          type="submit"
          onClick={this.props.showSettings}
        >Settings</button>
      </HeaderComponent>
    )
  }
}

Header.propTypes = {
  showSettings: PropTypes.func.isRequired
}

export default Header;