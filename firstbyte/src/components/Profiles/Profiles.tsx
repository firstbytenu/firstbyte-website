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
        <div className="hidden md:block">
          {team.map((eachTeamMember, index) => {
            return index & 1 ? (
              <ProfileCardReverse
                key={index}
                image={eachTeamMember.image}
                alt={eachTeamMember.name}
                profileName={eachTeamMember.name}
                position={eachTeamMember.position}
                contact={eachTeamMember.email}
                mission={eachTeamMember.whyFirstByte}
              />
            ) : (
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
        <div className="md:hidden">
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
