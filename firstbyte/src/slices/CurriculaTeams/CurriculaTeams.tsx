/** @format */

import { useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/Container/Container";
import HeadingRichText from "../../components/HeadingRichText/HeadingRichText";
import TeamCard from "../../components/TeamCard/TeamCard";
import useGetCurricula from "../../hooks/useGetCurricula";

const CurriculaTeams = () => {
  const [curricula, setCurricula] = useGetCurricula();

  useEffect(() => {
    console.log(curricula);
    return () => {
      setCurricula((curricula) => {
        return [...[]];
      });
    };
  }, []);

  return (
    <>
      <Container>
        {curricula.map((eachCurricula) => {
          return (
            <div key={eachCurricula.teamName}>
              <HeadingRichText
                text={""}
                illuminateText={eachCurricula.teamName}
                backText={""}
                subHeading={true}
              />
              <div className="grid grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
                <div className="me-auto ms-auto lg:col-span-1 z-0">
                  <Carousel images={eachCurricula.images} />
                </div>
                <div className="lg:col-span-2">
                  <TeamCard title={"Mission"} text={eachCurricula.mission} />
                  <TeamCard
                    title={"Little About Us"}
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
