/** @format */

import React from "react";
import HeadingRichText from "../../components/HeadingRichText/HeadingRichText";
import Container from "../../components/Container/Container";
import Profiles from "../../components/Profiles/Profiles";

type TeamHeroProps = {
  headingText: string;
  headingIlluminateText: string;
  backText: string;
};

const TeamHero: React.FC<TeamHeroProps> = ({
  headingText,
  headingIlluminateText,
  backText,
}) => {
  return (
    <>
      <Container>
        <span>
          <HeadingRichText
            text={headingText}
            illuminateText={headingIlluminateText}
            backText={backText}
          />
          <Profiles />
        </span>
      </Container>
    </>
  );
};

export default TeamHero;
