import styled from 'styled-components';

export const ContainerModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - ${({ theme }) => theme.spacing.md});
  border-radius: ${({ theme }) => theme.borders.borderRadius};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.paper};
  padding: ${({ theme }) => theme.spacing.lg};
  max-height: 95vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 690px;
  box-sizing: border-box;
`;

export const ContainerHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
