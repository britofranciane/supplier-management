import styled, { keyframes } from 'styled-components';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const spinAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const OverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey500};
`;

export const IconContainer = styled.div`
  margin-bottom: 1.25rem;
`;

export const PulsatingIcon = styled(PersonAddIcon)`
  color: ${({ theme }) => theme.colors.primary};
  animation: ${pulseAnimation} 1.5s infinite;
`;

export const Message = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.grey500};
    opacity: 0.8;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.grey500};
    opacity: 0.6;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
`;

export const Loader = styled.div`
  width: 40px;
  height: 40px;
  border: 0.25rem solid ${({ theme }) => theme.colors.grey300};
  border-left-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;
