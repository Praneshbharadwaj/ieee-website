import { TeamType } from "@/types/team";
import SocietySingleTeam from "./SocietySingleTeam";

const SocietyTeam = () => {
  const teamData: TeamType[] = [
    {
        id:99118775,
        name: 'Sanchit Sharma',
        designation: 'Computer Society Chairperson',
        image: '/images/team/sanchith.jpeg',
        linkedinlink:'https://www.linkedin.com/in/sanchit-sharma-433697280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagramLink: '/https://www.instagram.com/sanchit_8_2003/?next=%2F',
      },
    { 
        id:98485676,
        name: 'Tanushree Jha',
        designation: 'General Secretary Computer Society',
        image: '/images/team/tanushree.jpeg',
        linkedinlink: 'https://www.linkedin.com/in/tanushree-jha-255b90244/',
        instagramLink: 'https://www.instagram.com/_.tanushreejha._/',
      },
    {
        id:98220855,
        name: 'Tarunkumar K',
        designation: 'Chair Person',
        image: '/images/team/Tarunkumar k.jpg',
        linkedinlink: 'https://www.linkedin.com/in/tarunkumar-k-703931231',
        instagramLink: '/#',
    },
    {
      id:98866163,
      name: 'Sudhanva N S',
      designation: 'Technical Team Lead',
      image: '/images/team/sudhanva.jpeg',
      linkedinlink: 'https://www.linkedin.com/in/sudhanvans/',
      instagramLink: 'https://www.instagram.com/sudhanva0703?igsh=Z2c0b3JhcGxzdTFt',
    },
    {
      id:98866163,
      name: 'Pavan G',
      designation: 'Sub Head',
      image: '/images/team/Pavan G - PAVAN G.jpg',
      linkedinlink: 'https://www.linkedin.com/in/pavang11?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagramLink: 'https://www.instagram.com/_pavan_g11/',
    },
    {id:98244841,
      name: 'Sushma Jayaram',
      designation: 'Technical member-Webmaster',
      image: '/images/team/Sushma Jayaram.jpeg',
      linkedinlink: 'https://www.linkedin.com/in/sushma-3416ab253',
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
      id:  99075802,
      name: 'Sirisha Vasisht',
      designation: 'Editorial Head',
      image: '/images/team/sirisha.jpeg',
      linkedinlink: 'https://www.linkedin.com/in/sirisha-m-970206238/',
      instagramLink: 'https://www.instagram.com/sirisha_vasisht',
    },
    {
      id: 99211225,
      name: 'Sohan B S',
      designation: 'Media Head',
      image: '/images/team/sohan.jpeg',
      linkedinlink: 'https://www.linkedin.com/in/sohan-b-s-1448b5276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagramLink: 'https://www.instagram.com/sohan44927?igsh=MWhsM2JzYTl6ejZ6dQ==',
    },
    {
      id: 99118995,
      name: 'Aditya Umesh ',
      designation: 'Event Head and Treasuer',
      image: '/images/team/aditya u.jpeg',
      linkedinlink: 'https://www.linkedin.com/in/aditya-umesh-144386220/',
      instagramLink: 'https://www.instagram.com/_adityaumesh_?igsh=MWFsb2I2aHB0c2h4Mw==',
    },
    {
      id: 99710630,
      name: 'Sri Krishna',
      designation: 'Event Sub Head',
      image: '/images/team/srikrishna.jpeg',
      linkedinlink: 'https://www.linkedin.com/in/sri-krishna-g-81916522a/',
      instagramLink: 'https://www.instagram.com/sri_krishna_g_/',
    },
    {
      id: 99710630,
      name: 'Nikil Kumar N',
      designation: 'Events member',
      image: '/images/team/nikil.jpeg',
      linkedinlink: 'https://www.linkedin.com/in/nikhil-n-kumar-141028259/',
      instagramLink: 'https://www.instagram.com/nikhil2003nk',
    },
    {
      id:  99075802,
      name: 'Jeeval',
      designation: 'Design Sub Head',
      image: '/images/team/jeeval.jpeg',
      linkedinlink: 'https://www.linkedin.com/in/jeeval-jagadeesha-693a84262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagramLink: 'https://www.instagram.com/jeevaljagadeesha/',
    },
    {
      id:100028204 ,
      name: 'Manavi J',
      designation: 'Technical member',
      image: '/images/team/manavi.jpeg',
      linkedinlink: 'https://www.linkedin.com/in/manavi-j-46496b25b/',
      instagramLink: 'https://www.instagram.com/manavi._.j/',
    },
    {
      id:100026293,
      name: 'Maithri A Humbarwadi',
      designation: 'Technical member',
      image: '/images/team/maithri 2.jpg',
      linkedinlink: 'https://www.linkedin.com/in/maithri-humbarwadi/',
      instagramLink: 'https://www.instagram.com/maithri_a_h',
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
