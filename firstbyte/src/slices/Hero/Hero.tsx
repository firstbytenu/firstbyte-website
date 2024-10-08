/** @format */

import React, { ReactElement } from "react";
import HeadingRichText from "../../components/HeadingRichText/HeadingRichText";
import Container from "../../components/Container/Container";

type HeroProps = {
  children: React.ReactNode;
  headingText: string;
  headingIlluminateText: string;
  backText: string;
};

const Hero: React.FC<HeroProps> = ({
  children,
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
          {React.Children.map(children as ReactElement | ReactElement[], (eachChild: ReactElement) => {
            return React.cloneElement(eachChild, {});
          })}
        </span>
      </Container>
    </>
  );
};

export default Hero;
