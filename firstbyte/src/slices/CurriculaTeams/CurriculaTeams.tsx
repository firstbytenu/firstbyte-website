/** @format */

import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/Container/Container";
import HeadingRichText from "../../components/HeadingRichText/HeadingRichText";
import TeamCard from "../../components/TeamCard/TeamCard";

const CurriculaTeams = () => {
  return (
    <>
      <Container>
        <HeadingRichText
          text={""}
          illuminateText={"Team Northeastern"}
          backText={""}
          subHeading={true}
        />

        <div className="grid grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
          <div className="me-auto ms-auto lg:col-span-1 z-0">
            <Carousel />
          </div>
          <div className="lg:col-span-2">
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default CurriculaTeams;
