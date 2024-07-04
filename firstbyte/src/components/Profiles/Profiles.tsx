/** @format */

import useGetTeam from "../../hooks/useGetTeam";
import Container from "../Container/Container";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileCardReverse from "../ProfileCardReverse/ProfileCardReverse";

const Profiles = () => {
  const [team] = useGetTeam();

  return (
    <>
      <Container>
        <div className="flex flex-wrap justify-center gap-2">
          {team.map((eachTeamMember, index) => {
            return (
              <ProfileCard
                key={index}
                image={eachTeamMember.image}
                alt={eachTeamMember.name}
                profileName={eachTeamMember.name}
                position={eachTeamMember.position}
                contact={eachTeamMember.email}
                mission={eachTeamMember.whyFirstByte}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Profiles;
