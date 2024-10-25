import { TeamType } from "@/types/team";
import SocietySingleTeam from "./SocietySingleTeam";

const CassocietyTeam = () => {
  const teamData: TeamType[] = [
    { 
      id:98220588,
      name: 'Skanda R ',
      designation: 'CAS and CEDA Chair',
      image: '/images/team/skanda.jpeg',
      linkedinlink: 'https://www.linkedin.com/in/skanda-raghavendra-2756b9228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagramLink: '/#',
    },
    { 
      id:99898852,
      name: 'Ankitha Srinath Gargya  ',
      designation: 'Vice Chair | CAS Society',
      image: '/images/team/Ankitha Gargya.JPG',
      linkedinlink:'http://linkedin.com/in/ankitha-gargya',
      instagramLink: 'https://www.instagram.com/ankitha_gargya/',
    },
    { 
      id:98866122,
      name: 'Pavan V L',
      designation: 'General Secretary, CAS, CEDA',
      image: '/images/team/pavanvl.jpeg',
      linkedinlink: 'https://www.linkedin.com/in/pavan-v-l/',
      instagramLink: 'https://www.instagram.com/ankitha_gargya/',
    },
    {
      id:100045997,
      name: 'Aditya Papade',
      designation: 'Technical member',
      image: '/images/team/aditya papade.JPG',
      linkedinlink: 'https://www.linkedin.com/in/aditya-papade-999554263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagramLink: 'https://www.instagram.com/a_d_i_t_y_a__179?igsh=bmV0bTl5ajN6ZDJn',
    },
    {id:99999135,
      name: 'Yashas K N',
      designation: 'Technical member',
      image: '/images/team/Yashas kn.jpeg',
      linkedinlink: 'https://www.linkedin.com/in/yashas-kn?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagramLink: 'https://www.instagram.com/yashas_kn17?igsh=MXBsZm00bW01bGtuZQ==',
    }, 
    {
      id: 99972013,
      name: 'Grishma Gagana S ',
      designation: 'Events member',
      image: '/images/team/girishma.jpeg',
      linkedinlink: 'https://www.linkedin.com/in/grishma-gagana-s-270657303',
      instagramLink: 'https://www.instagram.com/gallantgriga?igsh=MWhpbHY3OGZ0Ymdlbg==',
    },
    {
      id: 100048177,
      name: 'Shrivatsa Sharma ',
      designation: 'Events member',
      image: '/images/team/Shrivatsa Sharma.jpg',
      linkedinlink: 'https://www.linkedin.com/in/shrivatsa-sharma-4576502b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
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
    {
      id: 99093514,
      name: 'Keerthana M ',
      designation: 'Marketing Head',
      image: '/images/team/Keerthana Murali.jpg',
      linkedinlink: 'https://www.linkedin.com/in/keerthana-murali-455903282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagramLink: 'https://www.instagram.com/keerthanaa_murali?igsh=MWdsYml1dzl6Y3EwbQ==',
    },
    {
      id: 100047619,
      name: 'Poornaprajna K Kadagadkai',
      designation: 'Associate marketing team head',
      image: '/images/team/poorna.jpeg',
      linkedinlink: 'https://www.linkedin.com/in/poornaprajna-k-kadagadkai-135a17249/',
      instagramLink: 'https://www.instagram.com/keerthanaa_murali?igsh=MWdsYml1dzl6Y3EwbQ==',
    },
    {
      id: 99048068,
      name: 'Shriya Naragund ',
      designation: 'Marketing member',
      image: '/images/team/Shriya Naragund.jpg',
      linkedinlink: 'https://www.linkedin.com/in/shriya-naragund-7b5a0425a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagramLink: '/https://www.instagram.com/iam_shriya21?igsh=YjJieDd5YWJoc3g3',
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
      linkedinlink: 'https://www.linkedin.com/in/sneha-gavade-2054702a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagramLink: 'https://www.instagram.com/_.gyanada.gk._?igsh=eGRqNjh2Z3NhNnZi',
    },
    {
      id: 100110570,
      name: 'Shriya Hebsur',
      designation: 'Editorial member',
      image: '/images/team/sriya.jpeg',
      linkedinlink: 'https://www.linkedin.com/in/shriya-hebsur-3310b3259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagramLink: '/#',
    },
    {
      id: 99897409,
      name: 'Dhruvika Divakar Raju',
      designation: ' Design team member ',
      image: '/images/team/druvika.jpeg ',
      linkedinlink: 'https://www.linkedin.com/in/dhruvika-divakar-raju-a25b522b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagramLink: 'https://www.instagram.com/dhruvi_d_r?igsh=bXN6anl0Z3Jiamto',
    },
    {
      id: 98887178,
      name: 'Muktha M ',
      designation: 'Media member ',
      image: '/images/team/Muktha Pandit.jpg',
      linkedinlink: 'https://www.linkedin.com/in/muktha-m-655895259',
      instagramLink: 'https://www.instagram.com/_.gyanada.gk._?igsh=eGRqNjh2Z3NhNnZi',
    },
    {
      id: 99904103,
      name: 'Prachi C Reddy',
      designation: 'Media member',
      image: '/images/team/Prachi Reddy.jpeg',
      linkedinlink: 'http://linkedin.com/in/prachi-reddy-5106502b6',
      instagramLink: 'https://www.instagram.com/prachi.reddyy?igsh=enM5cG4wMGtzOHd6&utm_source=qr',
    },
    {
      id: 99079708,
      name: 'Nandini Hiremath',
      designation: 'Media member',
      image: '/images/team/Nandini Hiremath.jpg',
      linkedinlink: 'https://www.linkedin.com/in/nandini-hiremath-740306309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagramLink: 'https://www.instagram.com/me_nandinivh?igsh=MW9kbXFtY282Y242dw==',
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

export default CassocietyTeam;