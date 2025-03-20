import styled from 'styled-components';

export const ContainerContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;

export const ContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};
`;
