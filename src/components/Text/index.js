import React from 'react';
import PropTypes from 'prop-types';

import MessageStyled from './TextStyled';

const Text = ({ reposCounter }) => {
  let sentence = `La recherche à donnée ${reposCounter} résultats`;
  if (reposCounter === 0) {
    sentence = 'La recherche à donnée 0 résultat';
  }
  else if (reposCounter === 1) {
    sentence = 'La recherche à donnée 1 résultat';
  }
  return (
    <MessageStyled>
      <p>{sentence}</p>
    </MessageStyled>
  );
};

Text.propTypes = {
  reposCounter: PropTypes.number.isRequired,
};

export default Text;
