import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background: red;
  marginbotton: 1.45rem;
  .header {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }
  h1 {
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className={'header'}>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </div>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
