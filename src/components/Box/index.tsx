import React from 'react';
import { BoxContainer, ContentContainer } from './styles';

interface Props {
  children: React.ReactNode;
}

const Box: React.FC<Props> = ({ children }) => {
  return (
    <BoxContainer>
      <ContentContainer>{children}</ContentContainer>
    </BoxContainer>
  );
};

export default Box;
