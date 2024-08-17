import { TeamType } from "@/types/team";
import SocietySingleTeam from "./SocietySingleTeam";

const SocietyTeam = () => {
  const teamData: TeamType[] = [
    {
      id: 1,
      name: "Adveen Desuza",
      designation: "UI Designer",
      image: "/images/team/team-03.png",
      linkedinlink: "/#",
      instagramLink: "/#",
    },
    {
      id: 3,
      name: "Andrieo Gloree",
      designation: "App Developer",
      image: "/images/team/team-03.png",
      linkedinlink: "/#",
      instagramLink: "/#",
    },
    {
      id: 11,
      name: "Jessica Lee",
      designation: "Backend Developer",
      image: "/images/team/team-03.png",
      linkedinlink: "/#",
      instagramLink: "/#",
    },
  ];

  return (
    <section id="team">
      <div className="container">
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-x-4 justify-evenly">
              {teamData.map((member) => (
                <SocietySingleTeam key={member.id} team={member} />
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default SocietyTeam;
