import React, { useRef } from "react";
import IProject from "../../../types/IProject";
import { HeadingType } from "../Heading";
import {
  CarouselButton,
  CarouselControls,
  CarouselContainer,
  Slide,
  Icon,
  WrapperCard,
  Greeting,
  HorizontalLine,
  StatisticsParagraph,
  CarouselTitle,
  FinishedProjectsCarousel,
  FinishedProject
} from "./styled";
import { ParagraphSize } from "../Paragraph";

type PersonalStatisticsProps = {
  finishedProjects: IProject[];
};

const PersonalStatistics: React.FC<PersonalStatisticsProps> = ({
  finishedProjects
}) => {
  const forwardButton = useRef(null);
  const backButton = useRef(null);

  return (
    <WrapperCard inverted>
      <Greeting type={HeadingType.Secondary}>Hey Matthias</Greeting>

      <HorizontalLine />

      <StatisticsParagraph paragraphSize={ParagraphSize.Large}>
        Je score is 622 en je hebt 3 projecten afgerond. Daarmee heb je €1250.00
        euro verdient.
      </StatisticsParagraph>

      <CarouselTitle type={HeadingType.Quaternary}>
        Afgeronde projecten
      </CarouselTitle>

      <CarouselContainer>
        <CarouselControls>
          <CarouselButton ref={backButton}>
            <Icon.ArrowBack />
          </CarouselButton>

          <CarouselButton ref={forwardButton}>
            <Icon.ArrowForward />
          </CarouselButton>
        </CarouselControls>

        <FinishedProjectsCarousel
          forwardButton={forwardButton}
          backButton={backButton}
        >
          {finishedProjects.map((project, index) => (
            <Slide key={index}>
              <FinishedProject {...project} />
            </Slide>
          ))}
        </FinishedProjectsCarousel>
      </CarouselContainer>
    </WrapperCard>
  );
};

export default PersonalStatistics;
