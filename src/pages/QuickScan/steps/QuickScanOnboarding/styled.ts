import styled from "styled-components";
import Heading from "../../../../components/general/Heading";
import { SolidButton } from "../../../../components/general/Button";
import Icon from "../../../../components/general/Icon";
import Logo from "../../../../components/general/Logo";

export { Circle } from "../../../../util/layout";
export { default as Header } from "../../../../components/blocks/Header";
export { default as Wrapper } from "../../../../components/general/Wrapper";
export { default as Input } from "../../../../components/general/Input";
export {
  default as InputGroup
} from "../../../../components/general/InputGroup";

export const InfoIcon = styled(Icon.Info)`
  fill: ${props => props.theme.copy.tertiary};
`;

export const Content = styled.div<{ headerHeight: number }>`
  display: flex;
  min-height: calc(100vh - ${props => props.headerHeight}px);
  pointer-events: none;
`;

export const Form = styled.form`
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  pointer-events: all;
  width: 100%;
`;

export const FormLogo = styled(Logo)`
  margin-right: auto;
  margin-bottom: 4rem;
`

export const FormHeading = styled(Heading)`
  margin-bottom: 3.2rem;
`;

export const SubmitButton = styled(SolidButton)`
  margin: 6.2rem auto 0;
`;
