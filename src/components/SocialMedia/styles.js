import { darken } from "polished";
import styled from "styled-components";

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialMediaIcon = styled.div`
  background: #ffffff;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background: ${({ theme }) => darken(0.07, theme.white)};
    box-shadow: 2px 3px 7px rgba(0,0,0,.3);

    svg {
      color: ${({ theme }) => darken(0.05, theme.primary)};
    }
  }

  svg {
    font-size: 28px;
    color: ${({ theme }) => theme.primary};
  }
`;