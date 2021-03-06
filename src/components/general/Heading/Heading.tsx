import styled from "styled-components";
import {
  FontFamily,
  FontWeight,
  FontColor,
  Breakpoints
} from "../../../data/style/variables";
import { primary, secondary, tertiary, quaternary } from "./styled";

export type HeadingProps = {
  headingType?: HeadingType;
  fontWeight?: FontWeight;
  fontColor?: FontColor;
  serif?: boolean;
  italic?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
};

export enum HeadingType {
  Primary,
  Secondary,
  Tertiary,
  Quaternary
}

// Styles map to get the right styles for the right type
const styleMap = {
  [HeadingType.Primary]: primary,
  [HeadingType.Secondary]: secondary,
  [HeadingType.Tertiary]: tertiary,
  [HeadingType.Quaternary]: quaternary
};

const Heading = styled.h1<HeadingProps>`
  margin: 0;

  ${props => styleMap[props.headingType || HeadingType.Primary]}

  color: ${props =>
    props.fontColor ? props.theme.copy[props.fontColor] : "currentColor"};
  font-weight: ${props => props.fontWeight || FontWeight.Bold}
  font-family: ${props =>
    props.serif ? FontFamily.RobotoSlab : FontFamily.Roboto};

  // Style for alignment and style
  ${props => props.center && "text-align: center;"}
  ${props => props.left && "text-align: left;"}
  ${props => props.right && "text-align: right;"}
  ${props => props.italic && "font-style: italic;"};

  @media (min-width: ${Breakpoints.H500}) {
    white-space: pre-line;
  }
`;

export default Heading;
