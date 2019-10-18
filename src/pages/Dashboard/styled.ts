import styled from "styled-components";
import Input from "../../components/general/Input";
import { Wrapper } from "../../util/layout";
import ProjectCarousel from "../../components/general/ProjectCarousel";

export { Page, Circle, Wrapper } from "../../util/layout";
export { default as Header } from "../../components/blocks/Header";
export {
  default as PersonalStatistics
} from "../../components/general/PersonalStatistics";

export const TopWrapper = styled(Wrapper)`
  margin: 5rem auto 7rem;
  z-index: 1;
`;

export const SearchForm = styled.form``;

export const SearchInput = styled(Input)`
  max-width: 50rem;
  width: 100%;
`;

export const Sidebar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 30%;
  padding-left: 5rem;
`;

export const DashboardProjectCarousel = styled(ProjectCarousel)`
  width: 70%;
`;
