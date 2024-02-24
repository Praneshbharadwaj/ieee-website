import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const Team = () => {
  const teamData: { teamName: string, paragraph: string, members: TeamType[] }[] = [
    {
      teamName: "Technical Team",
      paragraph: "Our technical team is responsible for designing and developing our products.",
      members: [
        {
          id: 1,
          name: "Adveen Desuza",
          designation: "UI Designer",
          image: "https://i.postimg.cc/rmLmxJF8/Whats-App-Image-2024-02-15-at-22-57-59-101d8153.jpg",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 3,
          name: "Andrieo Gloree",
          designation: "App Developer",
          image: "/images/team/team-03.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 11,
          name: "Jessica Lee",
          designation: "Backend Developer",
          image: "/images/team/team-11.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 12,
          name: "Marcus Johnson",
          designation: "QA Engineer",
          image: "/images/team/team-12.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 13,
          name: "Emily Garcia",
          designation: "Database Administrator",
          image: "/images/team/team-13.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
      ]
    },
    {
      teamName: "Marketing Team",
      paragraph: "Our marketing team handles promotions and advertising strategies.",
      members: [
        {
          id: 5,
          name: "John Doe",
          designation: "Marketing Manager",
          image: "/images/team/team-05.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 14,
          name: "Sarah Johnson",
          designation: "Marketing Coordinator",
          image: "/images/team/team-14.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 15,
          name: "Tom Smith",
          designation: "SEO Specialist",
          image: "/images/team/team-15.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 16,
          name: "Alice Brown",
          designation: "Content Strategist",
          image: "/images/team/team-16.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 17,
          name: "Ryan Williams",
          designation: "Social Media Manager",
          image: "/images/team/team-17.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
      ]
    },
    // Add more teams with members
    {
      teamName: "Design Team",
      paragraph: "Our design team focuses on creating visually appealing user interfaces.",
      members: [
        {
          id: 7,
          name: "Michael Johnson",
          designation: "Graphic Designer",
          image: "/images/team/team-07.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 18,
          name: "Emma Watson",
          designation: "Visual Designer",
          image: "/images/team/team-18.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 19,
          name: "Oliver Clark",
          designation: "UX Designer",
          image: "/images/team/team-19.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 20,
          name: "Sophia Davis",
          designation: "Illustrator",
          image: "/images/team/team-20.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 21,
          name: "Lucas Moore",
          designation: "Motion Designer",
          image: "/images/team/team-21.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
      ]
    },
    {
      teamName: "Content Team",
      paragraph: "Our content team creates engaging and informative content for our users.",
      members: [
        {
          id: 9,
          name: "Sophia Adams",
          designation: "Content Writer",
          image: "/images/team/team-09.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 22,
          name: "David Clark",
          designation: "Content Editor",
          image: "/images/team/team-22.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 23,
          name: "Emma White",
          designation: "Copywriter",
          image: "/images/team/team-23.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 24,
          name: "Jack Brown",
          designation: "Content Strategist",
          image: "/images/team/team-24.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
        {
          id: 25,
          name: "Lily Green",
          designation: "SEO Specialist",
          image: "/images/team/team-25.png",
          facebookLink: "/#",
          twitterLink: "/#",
          instagramLink: "/#",
        },
      ]
    },
    // Add more teams as needed
  ];

  return (
    <section id="team">
      <div className="container">
        {teamData.map((team, index) => (
          <div key={index} className="mb-8">
            <SectionTitle
              subtitle={`Our ${team.teamName}`}
              title={`Meet Our ${team.teamName}`}
              paragraph={team.paragraph}
              width="640px"
              center
            />
            <div className="flex flex-wrap justify-center">
              {team.members.map((member) => (
                <SingleTeam key={member.id} team={member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
