"use client"
import React, { useState } from 'react';
import { Panel } from 'primereact/panel';
import SectionTitle from '../Common/SectionTitle';
import SingleTeam from './SingleTeam';
import { TeamType } from '@/types/team';

const Team = () => {
  const [expandedYear, setExpandedYear] = useState<string | null>(null);

  const toggleYear = (year: string) => {
    setExpandedYear((prevYear) => (prevYear === year ? null : year));
  };

  const teamData: {
    year: string;
    teams: {
      panelHeading: string;
      paragraph: string;
      members: TeamType[];
    }[];
  }[] = [
      {
        year: '2023 Execom',
        teams: [
          {
            panelHeading: 'Technical Team',
            paragraph: 'Our technical team is responsible for designing and developing our products.',
            members: [
              {
                id: 1,
                name: 'Adveen Desuza',
                designation: 'UI Designer',
                image: '/images/team/team-03.png',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: '/#',
              },
              {
                id: 3,
                name: 'Andrieo Gloree',
                designation: 'App Developer',
                image: '/images/team/team-03.png',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: '/#',
              },
              {
                id: 11,
                name: 'Jessica Lee',
                designation: 'Backend Developer',
                image: '/images/team/team-03.png',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: '/#',
              },
              {
                id: 12,
                name: 'Marcus Johnson',
                designation: 'QA Engineer',
                image: '/images/team/team-03.png',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: '/#',
              },
              {
                id: 13,
                name: 'Emily Garcia',
                designation: 'Database Administrator',
                image: '/images/team/team-03.png',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: '/#',
              },
            ],
          },
          {
            panelHeading: 'Marketing Team',
            paragraph: 'Our marketing team handles promotions and advertising strategies.',
            members: [
              {
                id: 5,
                name: 'John Doe',
                designation: 'Marketing Manager',
                image: '/images/team/team-03.png',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: '/#',
              },
              {
                id: 14,
                name: 'Sarah Johnson',
                designation: 'Marketing Coordinator',
                image: '/images/team/team-03.png',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: '/#',
              },
              {
                id: 15,
                name: 'Tom Smith',
                designation: 'SEO Specialist',
                image: '/images/team/team-03.png',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: '/#',
              },
              {
                id: 16,
                name: 'Alice Brown',
                designation: 'Content Strategist',
                image: '/images/team/team-03.png',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: '/#',
              },
              {
                id: 17,
                name: 'Ryan Williams',
                designation: 'Social Media Manager',
                image: '/images/team/team-03.png',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: '/#',
              },
            ],
          },
          // Add more teams for 2023 if needed
        ],
      },
      {
        year: '2024 Execom',
        teams: [
          {
            panelHeading: 'Chair Persons ',
            paragraph: 'Our technical team is responsible for designing and developing our products.',
            members: [
              {
                id:98220855,
                name: 'Tarunkumar K',
                designation: 'CHair Person',
                image: '/images/team/Tarunkumar k.jpg',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: 'https://instagram.com/maithri_a_h?igshid=MzNlNGNkZWQ4Mg=='
              },
              {id:98220588,
                name: 'Skanda R ',
                designation: 'CAS and CEDA Chair, Technical member',
                image: '/images/team/ team-01.png',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: 'https://instagram.com/maithri_a_h?igshid=MzNlNGNkZWQ4Mg=='
              },

            

            ]
          },
          {
            panelHeading: 'Technical Team',
            paragraph: 'Our technical team is responsible for designing and developing our products.',
            members: [
              {
                id:100028204 ,
                name: 'Manavi J',
                designation: 'Technical member',
                image: '/images/team/manavi.jpeg',
                instagramLink: 'https://www.instagram.com/manavi._.j/',
                facebookLink: '/#',
                twitterLink: '/#'
              },
              {
                id:100026293,
                name: 'Maithri A Humbarwadi',
                designation: 'Technical member',
                image: '/images/team/maithri 2.jpg',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: 'https://instagram.com/maithri_a_h?igshid=MzNlNGNkZWQ4Mg=='
              },
              {
                id:100045997,
                name: 'Aditya Papade',
                designation: 'Technical member',
                image: '/images/team/aditya papade.JPG',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: 'https://instagram.com/maithri_a_h?igshid=MzNlNGNkZWQ4Mg=='
              },
              {id:99999135,
                name: 'Yashas K N',
                designation: 'Technical member',
                image: '/images/team/yashas kn.jpeg',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: 'https://instagram.com/maithri_a_h?igshid=MzNlNGNkZWQ4Mg=='
              },
            
              {id:98244841,
                name: 'Sushma Jayaram',
                designation: 'Technical member-Webmaster',
                image: '/images/team/sushma jayaram.jpeg',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: 'https://instagram.com/maithri_a_h?igshid=MzNlNGNkZWQ4Mg=='
              },
              
              
              // Add more members for Technical Team in 2024 if needed
            ],
          },
          {
            panelHeading: 'Marketing Team',
            paragraph: 'Our marketing team handles promotions and advertising strategies.',
            members: [
              {
                id: 23,
                name: 'David Clark',
                designation: 'Content Editor',
                image: '/images/team/team-03.png',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: '/#',
              },
              {
                id: 24,
                name: 'Emma White',
                designation: 'Copywriter',
                image: '/images/team/team-03.png',
                facebookLink: '/#',
                twitterLink: '/#',
                instagramLink: '/#',
              },
              // Add more members for Marketing Team in 2024 if needed
            ],
          },
          // Add more teams for 2024 if needed
        ],
      },
      // Add more years if needed
    ];

  return (
    <section id="team">
      <div className="container">
        {teamData.map((yearData) => (
          <Panel
            key={yearData.year}
            header={<span className='font-bold text-blue text-xl'>{yearData.year}</span>}
            toggleable
            collapsed={expandedYear !== yearData.year}
            onToggle={() => toggleYear(yearData.year)}
            className='mb-10 mt-7'
          >
            {yearData.teams.map((team) => (
              <div key={team.panelHeading} className="mb-8">
                <SectionTitle
                  subtitle={`Our ${team.panelHeading}`}
                  title={`Meet Our ${team.panelHeading}`}
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
          </Panel>
        ))}
      </div>
    </section>
  );
};

export default Team;
