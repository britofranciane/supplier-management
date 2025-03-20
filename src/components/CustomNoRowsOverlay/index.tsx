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
          Não há fornecedores cadastrados ou a busca não retornou resultados. Clique em 'Cadastrar Fornecedor' para
          adicionar novos fornecedores.
        </p>
      </Message>
      {/* <AnimationContainer>
        <Loader />
      </AnimationContainer> */}
    </OverlayContainer>
  );
};

export default CustomNoRowsOverlay;
