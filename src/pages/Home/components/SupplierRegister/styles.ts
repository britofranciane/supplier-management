import styled from 'styled-components';

export const ContainerSupplierRegister = styled.div`
  max-width: 690px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing.md};
  height: 100%;
  box-sizing: border-box;
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

export const ContainerFields = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacing.sm};
  grid-template-columns: 1fr 1fr;
`;

export const ContainerFieldsBasics = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};
`;

export const ContainerContact = styled.div`
  display: flex;
  align-items: end;
  gap: ${(props) => props.theme.spacing.xs};
  width: 100%;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: ${(props) => props.theme.spacing.xs};
  padding-bottom: 1.25rem;
`;
