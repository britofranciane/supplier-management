import React from 'react';
import { OverlayContainer, IconContainer, PulsatingIcon, Message } from './styles';

const CustomNoRowsOverlay: React.FC = () => {
  return (
    <OverlayContainer>
      <IconContainer>
        <PulsatingIcon />
      </IconContainer>
      <Message>
        <h2>Nenhum Fornecedor encontrado!</h2>
        <p>
          Parece que ainda não há fornecedores cadastrados. Clique no botão "Cadastrar Fornecedor" para adicionar novos
          fornecedores e começar!
        </p>
      </Message>
      {/* <AnimationContainer>
        <Loader />
      </AnimationContainer> */}
    </OverlayContainer>
  );
};

export default CustomNoRowsOverlay;
