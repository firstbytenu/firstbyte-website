/** @format */

import React, { ReactElement } from "react";
import HeadingRichText from "../../components/HeadingRichText/HeadingRichText";
import Container from "../../components/Container/Container";

type HeroProps = {
  children: any;
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
          {React.Children.map(children, (eachChild: ReactElement) => {
            return React.cloneElement(eachChild, {});
          })}
        </span>
      </Container>
    </>
  );
};

export default Hero;
