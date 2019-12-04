import styled from "styled-components";
import Paragraph from "../../general/Paragraph";
import Wrapper from "../../general/Wrapper";
import { LinkButton } from "../../general/Button";

export { default as Heading } from "../../general/Heading";

export const ArticleHeadingWrapper = styled(Wrapper)`
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
`;

export const ArticleProperties = styled.aside`
  margin-top: 2rem;
`;

export const ArticleProperty = styled(Paragraph)`
  &:not(:first-child) {
    margin-left: 8rem;
  }
`;

export const PublishedDate = styled(Paragraph)<{ dateTime: string }>`
  &:after {
    content: "-";
    display: inline-block;
    margin: 0 1.5rem;
  }
`;

export const AuthorLink = styled(LinkButton)`
  &:hover {
    text-decoration: underline;
  }
`;
