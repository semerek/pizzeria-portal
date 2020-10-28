import React from 'react';
import PageNav from '../PageNav/PageNav';
import PropTypes from 'prop-types';



const MainLayout = props => (
  <div>
    <PageNav/>
    {props.children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;