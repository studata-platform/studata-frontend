import styled from "styled-components";
import Heading from "../../../../components/general/Heading";
import { SolidButton } from "../../../../components/general/Button";
import Icon from "../../../../components/general/Icon";
import Paragraph from "../../../../components/general/Paragraph";

export { Circle } from "../../../../util/layout";
export { default as Wrapper } from "../../../../components/general/Wrapper";
export { default as Header } from "../../../../components/blocks/Header";
export { default as Input } from "../../../../components/general/Input";
export {
  default as InputGroup
} from "../../../../components/general/InputGroup";

export const InfoIcon = styled(Icon.Info)`
  fill: ${props => props.theme.copy.tertiary};
`;

export const Form = styled.form`
  width: 100%;
  max-width: 60rem;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  pointer-events: all;
`;

export const FormHeading = styled(Heading)`
  margin-bottom: 3.2rem;
`;

export const FormParagraph = styled(Paragraph)`
  margin-bottom: 3.4rem;
`;

export const SubmitButton = styled(SolidButton)`
  margin: 6.2rem auto 0;
`;
