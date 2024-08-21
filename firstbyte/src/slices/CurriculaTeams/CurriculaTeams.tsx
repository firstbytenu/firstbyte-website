/** @format */

import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Container from "../../components/Container/Container";
import HeadingRichText from "../../components/HeadingRichText/HeadingRichText";
import TeamCard from "../../components/Cards/TeamCard";
import useGetCurricula from "../../hooks/useGetCurricula";
import { Curricula } from "../../hooks/useGetCurricula"

const CurriculaTeams = () => {
  const [curricula] = useGetCurricula() as [Curricula[]];
  return (
    <>
      <Container>
        {curricula.map((eachCurricula: Curricula) => {
          return (
            <div
              key={eachCurricula.teamName}
              className="mb-20"
            >
              <HeadingRichText
                text={""}
                illuminateText={eachCurricula.teamName}
                backText={""}
                subHeading={true}
              />
              <div className="grid grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 mt-6">
                <div className="mx-auto lg:col-span-1 z-0">
                  <div className="grid grid-rows-1">
                    <ImageCarousel images={eachCurricula.images} />
                    <span className="font-light text-gray-500 text-center mt-3">
                      Image Gallery of {eachCurricula.teamName}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <TeamCard title={"Mission"} text={eachCurricula.mission} />
                  <TeamCard
                    title={"About Us"}
                    text={eachCurricula.history}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default CurriculaTeams;
