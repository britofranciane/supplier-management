import styled from 'styled-components';

export const HeadContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  place-items: center;
  gap: ${(props) => props.theme.spacing.md};

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: start;
  gap: ${(props) => props.theme.spacing.md};
`;

export const Title = styled.h2`
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.typography.h4};
  }
`;
