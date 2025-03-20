import styled from 'styled-components';

export const BoxContainer = styled.div`
  min-height: 77vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: 0 ${({ theme }) => theme.spacing.lg};
  box-sizing: border-box;
`;
