import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';


const ThemeButton = ({ handleChangeTheme }) => (
  <Button.Group>
    <Button
      onClick={handleChangeTheme}
      positive
    >
      Light
    </Button>
    <Button.Or />
    <Button onClick={handleChangeTheme}>Dark</Button>
  </Button.Group>
);

ThemeButton.propTypes = {
  handleChangeTheme: PropTypes.func.isRequired,
};

export default ThemeButton;
