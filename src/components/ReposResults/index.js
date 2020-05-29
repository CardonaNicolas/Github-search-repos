import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import ReposResultsStyled from './ReposResultsStyled';

const ReposResults = ({ items }) => (
  <ReposResultsStyled>
    {items.map((item) => (
      <Card
        key={item.id}
        image={item.owner.avatar_url}
        header={item.name}
        meta={item.full_name}
        description={item.description}
        extra={<a href={"https://github.com/" + item.full_name}>Lien du repo GIT</a>}
      />
    ))}
  </ReposResultsStyled>
);

ReposResults.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ReposResults;
