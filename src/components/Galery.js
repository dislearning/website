import React from 'react';
import styled from 'styled-components';

const StyledGalery = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
`;

const StyledGaleryItem = styled.div`
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
`;

const Galery = () => {
  return (
    <StyledGalery>
      <StyledGaleryItem>
        <h1>Course 1</h1>
        <p className="legend">Legend 1</p>
      </StyledGaleryItem>
      <StyledGaleryItem>
        <h1>Course 2</h1>
        <p className="legend">Legend 2</p>
      </StyledGaleryItem>
      <StyledGaleryItem>
        <h1>Course 3</h1>
        <p className="legend">Legend 3</p>
      </StyledGaleryItem>
      <StyledGaleryItem>
        <h1>Course 4</h1>
        <p className="legend">Legend 3</p>
      </StyledGaleryItem>
      <StyledGaleryItem>
        <h1>Course 5</h1>
        <p className="legend">Legend 3</p>
      </StyledGaleryItem>
    </StyledGalery>
  );
};

export default Galery;
