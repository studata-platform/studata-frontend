import React from "react";
import {
  Background,
  TagWrapper,
  Heading,
  Content,
  PartnersList,
  PartnerCard
} from "./styled";
import { FontWeight } from "../../../data/style/variables";

type Partner = {
  uuid: string;
  title: string;
  image: IImage;
  link: ILink;
};

type PartnersProps = {
  title: string;
  tag: string;
  content: string;
  partners: Partner[];
};

const Partners: React.FC<PartnersProps> = ({
  title,
  tag,
  content,
  partners
}) => {
  const heading = <Heading fontWeight={FontWeight.Black}>{title}</Heading>;

  return (
    <Background>
      <TagWrapper heading={heading} tag={tag}>
        <Content>{content}</Content>

        <PartnersList>
          {partners.map(partner => (
            <PartnerCard {...partner} key={partner.uuid} />
          ))}
        </PartnersList>
      </TagWrapper>
    </Background>
  );
};

export default Partners;
