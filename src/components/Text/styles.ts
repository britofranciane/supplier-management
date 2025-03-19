import styled, { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface TextProps {
  variant: 'title' | 'description' | 'caption';
}

const Text = styled.p<TextProps>`
  font-family: ${(props: { theme: DefaultTheme }) => props.theme.typography.fontFamily};
  font-size: ${(props: { theme: DefaultTheme }) => props.theme.typography.fontSize};
  font-weight: ${(props: { theme: DefaultTheme }) => props.theme.typography.fontWeightRegular};
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.textPrimary};
  font-size: 0.875rem;
  margin: 0;

  ${(props) =>
    props.variant === 'title' &&
    css`
      font-size: 18px;
      font-weight: ${(props: { theme: DefaultTheme }) => props.theme.typography.fontWeightBold};
    `}

  ${(props) => props.variant === 'description' && css``}

  ${(props) =>
    props.variant === 'caption' &&
    css`
      font-weight: ${(props: { theme: DefaultTheme }) => props.theme.typography.fontWeightBold};
      color: ${(props: { theme: DefaultTheme }) => props.theme.colors.textPrimary};
    `}
`;

export default Text;
