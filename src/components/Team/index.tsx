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
        year: '2024 Execom',
        teams: [
          {
            panelHeading: 'Chair Persons ',
            paragraph: 'Our heads are responsible for leading and organising events.',
            members: [
              {
                id:98220855,
                name: 'Tarunkumar K',
                designation: 'Chair Person',
                image: '/images/team/Tarunkumar k.jpg',
                linkedinlink: '/#',
                instagramLink: '/#',
              },
              {
                id:99067604,
                name: 'Shivani M H',
                designation: ' Vice Chair Person',
                image: '/images/team/shivani.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/shivaniyashu?igsh=NWk4enJ5NWZ2M29r',
              },
              { 
                id:98220588,
                name: 'Skanda R ',
                designation: 'CAS and CEDA Chair',
                image: '/images/team/skanda.jpeg',
                linkedinlink: '/#',
                instagramLink: '/#',
              },
              { 
                id:99118775,
                name: 'Sanchit Sharma',
                designation: 'Computer Society Chairperson',
                image: '/images/team/sanchith.jpeg',
                linkedinlink:'/#',
                instagramLink: '/https://www.instagram.com/sanchit_8_2003/?next=%2F',
              },
              { 
                id:99898852,
                name: 'Ankitha Srinath Gargya  ',
                designation: 'Vice Chair | CAS Society',
                image: '/images/team/Ankitha Gargya.JPG',
                linkedinlink:'/#',
                instagramLink: 'https://www.instagram.com/ankitha_gargya/',
              },
              { 
                id:98485676,
                name: 'Tanushree Jha',
                designation: 'General Secretary Computer Society',
                image: '/images/team/tanushree.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/_.tanushreejha._/',
              },
              { 
                id:98866122,
                name: 'Pavan V L',
                designation: 'General Secretary, CAS, CEDA',
                image: '/images/team/pavanvl.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/ankitha_gargya/',
              },
            ]
          },
          {
            panelHeading: 'Technical Team',
            paragraph: 'Our technical team is responsible for designing and developing our products.',
            members: [
              {
                id:98866163,
                name: 'Sudhanva ',
                designation: 'Sub Head',
                image: '/images/team/Pavan G - PAVAN G.jpg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/_pavan_g11/',
              },
              {
                id:98866163,
                name: 'Pavan G',
                designation: 'Sub Head',
                image: '/images/team/Pavan G - PAVAN G.jpg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/_pavan_g11/',
              },
              {id:98244841,
                name: 'Sushma Jayaram',
                designation: 'Technical member-Webmaster',
                image: '/images/team/sushma jayaram.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/sush_910?igsh=N3JocnVmeGdpOGlo',
              },
              {id:99710186,
                name: 'Pranesh',
                designation: 'Technical member-Webmaster',
                image: '/images/team/pranesh.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/pranesh_bharadwaj003?igsh=MTFldzVya242dWhkMg==',
              },
              {
                id:100028204 ,
                name: 'Manavi J',
                designation: 'Technical member',
                image: '/images/team/manavi.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/manavi._.j/',
              },
              {
                id:100026293,
                name: 'Maithri A Humbarwadi',
                designation: 'Technical member',
                image: '/images/team/maithri 2.jpg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/maithri_a_h',
              },
              {
                id:100045997,
                name: 'Aditya Papade',
                designation: 'Technical member',
                image: '/images/team/aditya papade.JPG',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/a_d_i_t_y_a__179?igsh=bmV0bTl5ajN6ZDJn',
              },
              {id:99999135,
                name: 'Yashas K N',
                designation: 'Technical member',
                image: '/images/team/yashas kn.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/yashas_kn17?igsh=MXBsZm00bW01bGtuZQ==',
              },  
              // Add more members for Technical Team in 2024 if needed
            ],
          },
          {
            panelHeading: 'Events Team',
            paragraph: 'Our marketing team handles promotions and advertising strategies.',
            members: [
              {
                id: 99118995,
                name: 'Aditya Umesh ',
                designation: 'Event Head',
                image: '/images/team/aditya u.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/_adityaumesh_?igsh=MWFsb2I2aHB0c2h4Mw==',
              },
              {
                id: 99710630,
                name: 'Sri Krishna',
                designation: 'Event Sub Head',
                image: '/images/team/srikrishna.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/sri_krishna_g_/',
              },
              {
                id: 99710630,
                name: 'Nikil Kumar N',
                designation: 'Events member',
                image: '/images/team/nikil.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/nikhil2003nk',
              },
              {
                id: 99972013,
                name: 'Grishma Gagana S ',
                designation: 'Events member',
                image: '/images/team/girishma.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/gallantgriga?igsh=MWhpbHY3OGZ0Ymdlbg==',
              },
              {
                id: 100048177,
                name: 'Shrivatsa Sharma ',
                designation: 'Events member',
                image: '/images/team/Shrivatsa Sharma.jpg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/shrivatsa_.pvt?igsh=MTFia2czaGxqNGs0ZA==',
              },
              {
                id: 99895693,
                name: 'Lahari C Gopal',
                designation: 'Events member',
                image: '/images/team/lahari c gopal.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/lahari_me',
              },
              // Add more members for Marketing Team in 2024 if needed
            ],
          },
          {
            panelHeading: 'Marketing Team',
            paragraph: 'Our marketing team handles promotions and advertising strategies.',
            members: [
              {
                id: 99093514,
                name: 'Keerthana M ',
                designation: 'Marketing Head',
                image: '/images/team/Keerthana Murali.jpg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/keerthanaa_murali?igsh=MWdsYml1dzl6Y3EwbQ==',
              },
              {
                id: 99048068,
                name: 'Shriya Naragund ',
                designation: 'Marketing member',
                image: '/images/team/Shriya Naragund.jpg',
                linkedinlink: '/#',
                instagramLink: '/https://www.instagram.com/iam_shriya21?igsh=YjJieDd5YWJoc3g3',
              },
              // Add more members for Marketing Team in 2024 if needed
            ],
          },
          {
            panelHeading: 'Editorial Team',
            paragraph: 'Our editorial team handles content writing.',
            members: [
              {
                id:  99075802,
                name: 'Sirisha Vasisht',
                designation: 'Editorial Head',
                image: '/images/team/sirisha.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/sirisha_vasisht',
              },
              {
                id: 99091536,
                name: 'Sneha Dhanaji Gavade 	',
                designation: 'Editorial Sub Head',
                image: '/images/team/sneha.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/@sneha_gavade0',
              },
              {
                id: 99072735,
                name: 'Gyanada GK ',
                designation: 'Editorial member ',
                image: '/images/team/Gyanada GK.jpg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/_.gyanada.gk._?igsh=eGRqNjh2Z3NhNnZi',
              },
              {
                id: 100110570,
                name: 'Shriya Hebsur',
                designation: 'Editorial member',
                image: '/images/team/sriya.jpeg',
                linkedinlink: '/#',
                instagramLink: '/#',
              }
              
              // Add more members for Marketing Team in 2024 if needed
            ],
          },
          {
            panelHeading: 'Design Team',
            paragraph: 'Our editorial team handles content writing.',
            members: [
              {
                id:  99075802,
                name: 'Jeeval',
                designation: 'Design Sub Head',
                image: '/images/team/jeeval.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/jeevaljagadeesha/',
              },
              {
                id: 99897409,
                name: 'Dhruvika Divakar Raju',
                designation: ' Design team member ',
                image: '/images/team/druvika.jpeg ',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/dhruvi_d_r?igsh=bXN6anl0Z3Jiamto',
              },
              // Add more members for Marketing Team in 2024 if needed
            ],
          },
          {
            panelHeading: 'Media Team',
            paragraph: 'Our editorial team handles content writing.',
            members: [
              {
                id: 99211225,
                name: 'Sohan B S',
                designation: 'Media Head',
                image: '/images/team/sohan.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/sohan44927?igsh=MWhsM2JzYTl6ejZ6dQ==',
              },
              {
                id: 98887178,
                name: 'Muktha M ',
                designation: 'Media member ',
                image: '/images/team/Muktha Pandit.jpg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/_.gyanada.gk._?igsh=eGRqNjh2Z3NhNnZi',
              },
              {
                id: 99904103,
                name: 'Prachi C Reddy',
                designation: 'Media member',
                image: '/images/team/Prachi Reddy.jpeg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/prachi.reddyy?igsh=enM5cG4wMGtzOHd6&utm_source=qr',
              },
              {
                id: 99079708,
                name: 'Nandini Hiremath',
                designation: 'Media member',
                image: '/images/team/Nandini Hiremath.jpg',
                linkedinlink: '/#',
                instagramLink: 'https://www.instagram.com/me_nandinivh?igsh=MW9kbXFtY282Y242dw==',
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
