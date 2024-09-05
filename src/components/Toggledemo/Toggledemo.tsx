"use client"
import { Panel } from 'primereact/panel';
import { useRef } from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import Image from 'next/image';

export default function ToggleableDemo() {
  const ref = useRef(null);

  const togglePanel = () => {
    if (ref.current) {
      ref.current.toggle();
    }
  };

  const collapsePanel = () => {
    if (ref.current) {
      ref.current.collapse();
    }
  };

  // Sample data structure with events classified by year
  const eventsByYear = [
    {
      year: 2024,
      events: [
        {
          id: 41,
          title: "Inauguration of Centre of Excellence (CoE)",
          imageSrc: "/images/events/coe.jpeg",
          details:
                "The IEEE BIT student branch inaugurated a Centre of Excellence (CoE) in Electronics Design Automation (EDA) on February 1, 2024. The ceremony was attended by esteemed guests, including Vice Principal J. Prakash and HODs of VDT and ECE. The CoE aims to provide best practices in EDA, marking a significant milestone in the student branch’s journey. The event paved the way for a 2-day workshop, fostering innovation and excellence among students."      
        },
        {
          id:42,
          title:  "ISRO VISIT",
          imageSrc: "/images/events/isro.jpeg",
          details:
          "The IEEE Student Branch BIT embarked on an enlightening industrial visit to the UR Rao Satellite Centre, a prominent facility under the Indian Space Research Organisation (ISRO). The visit provided a unique opportunity for IEEE members to witness the advancements in space technology and gain insights into the country's space exploration endeavours. \n The highlight of the visit was an immersive tour of the museum, where attendees were treated to a visual extravaganza of meticulously crafted model showcasing the evolution of space missions. From early satellite launches to complex interplanetary explorations, the museum provided a comprehensive overview of India's space odyssey. The visit not only broadened our understanding of space missions but also inspired a new wave of curiosity and enthusiasm among all."
        },
        {
          id: 43,
          title: "Webinar on Data Science & Career Opportunities",
          imageSrc: "/images/events/data-science-webinar.jpg",
          details:
          "Mr. Akhilesh PR, a seasoned professional in the field of Data Science and Analytics, delivered an insightful webinar on the intricacies and career opportunities within this burgeoning field. During the session, Mr. Akhilesh PR provided a comprehensive overview of Data Science, emphasizing its various roles and career prospects. He elucidated the importance of different segments within Data Science, highlighting how each segment serves as a prerequisite for specific fields. The speaker also underscored the significance of mathematics in Data Science, along with the essential libraries required to effectively navigate this field.\n The webinar also featured real-world applications, demonstrating the profound impact of Data Science across various industries. Additionally, the webinar was highly interactive, allowing for a deeper exploration of Data Science concepts and addressing specific queries. This fostered a collaborative learning environment."
        },
        {
          id: 44,
          title: "Alumni Integration-Industry Academia Summit",
          imageSrc: "/images/events/ai-ia-summit.jpg",
          details:
          "The summit served as a dynamic platform for alumni to reconnect with their alma mater, share industry experiences, and offer insights to current students through panel discussions, workshops, and networking sessions. Alongside, students showcased diverse projects spanning robotics, AI, renewable energy, etc., presenting their skills to industry professionals and alumni. Representatives from leading companies engaged in interactive sessions, discussing career opportunities, trends, and offering feedback on student profiles. Esteemed industry experts delivered keynote speeches and workshops, equipping attendees with essential knowledge and skills to thrive in the fast-paced industry landscape.\n The IEEE student branch of Bangalore Institute of Technology curated an engaging stall, serving as a focal point for attendees. Showcasing events,initiatives and workshops conducted over the years, the stall provided a comprehensive glimpse into the branch's vibrant activities."
        },
        {
          id: 45,
          title: "CAD Infrastructure For VLSI Design",
          imageSrc: "/images/events/cad-vlsi.png",
          details:
          "The 2-day CAD Infrastructure Workshop, held on Feb 1-2, 2024, was a success. Aloke Das introduced CAD fundamentals, and students gained hands-on experience with Linux and OpenLane, an open-source CAD platform. Interactive sessions provided practical experience, laying a solid foundation for future EDA endeavors. The workshop fulfilled the CoE’s mission, equipping students with cutting-edge EDA knowledge and skills."
        },
        {
          id: 46,
          title: "IEEE Fun Fair",
          imageSrc: "/images/events/fun-fair.jpg",
          details:"The IEEE Fun Fair, organized by the IEEE SB BIT, was conducted successfully on January 30th in the Seminar Hall. It was a free event aimed to create a vibrant and fun environment among our peers. The event consisted of five separate games whose individual points were added to decide the winner.",
        },
      ],
    },
    {
      year: 2023,
      events: [
        {
          id: 1,
          title: "IEEE BIT Walkathon 2023",
          imageSrc: "/images/events/walkathon.png",
          details:
            "IEEE BIT is thrilled to have been a part of the exhilarating Walkathon organized by Bangalore Institute of Technology at KR Road, VV Puram, Bangalore 560004, in celebration of our much-anticipated Sports Day!The campus came alive with the spirit of fitness and camaraderie as students, faculty, and staff joined forces to promote a healthier lifestyle. Walking together, we not only covered kilometers but also forged lasting connections and shared moments of joy and achievement.",
        },
        {
          id: 2,
          title: "Sensors And Their Applications",
          imageSrc: "/images/events/sensors.png",
          details:
          "The IEEE CAS BIT organized a hands-on workshop on sensors and their applications, utilizing the Arduino Uno board. The event attracted participants eager to explore sensors and practical applications in electronics. The workshop began with an introductory session on sensor technology, covering types of sensors and their functions. Attendees received Arduino Uno boards and sensor kits, enabling practical experimentation. Under Dr. Kendaganna Swamy S's guidance, participants learned to interface sensors with the Arduino board and write code for data collection. Activities included temperature sensing, light detection, and proximity sensing. Participants praised the workshop for its practical approach. Overall, the workshop provided valuable hands-on experience, empowering participants to explore sensors and their applications in electronics."
        },
        {
          id: 3,
          title: "Tech Talk on VLSI Design And Career Opportunities",
          imageSrc: "/images/events/vlsi.png",
          details:
          "IEEE CAS BIT, in association with the Department of VDT and ECE, hosted an event featuring a technical talk on careers in Very-Large-Scale Integration (VLSI) by Dr. G. S. Javed. Dr. Javed, founder of King Consultancy Education, with 14+ years of experience in Analog circuit design, layout, and characterization, currently serves as the Technical and Execution Lead-Analog at Intel India. He received his M.S. and Ph.D. from IISc, Bangalore. Dr. Javed discussed the evolution of VLSI technology, highlighting its significance in modern electronics. He elaborated on career opportunities, sharing personal experiences and industry insights. The talk concluded with a lively Q&A session, inspiring attendees to explore VLSI careers further. Dr. Javed's talk was informative, guiding participants and motivating them to pursue opportunities in VLSI."
        },
        {
          id: 5,
          title: "On-site industrial training on PCB Design",
          imageSrc: "/images/events/fun-fair.jpg",
          details: "In June 2023, IEEE hosted an Onsite Industrial Training on PCB Design at Ramegowda Seminar Hall, BIT College. The program aimed to provide hands-on experience in PCB and Layout Design Process, covering circuit preparation, package mapping, and layout configuration. Registration fees varied: IEEE CAS members paid 750/-, IEEE members 1000/- , and non-IEEE members 1250/-. \n Participants confirmed their participation by filling the provided form, engaging in an enriching experience to enhance their skills in PCB design. PCB design is crucial in modern technology, facilitating the seamless integration of electronic components and ensuring the efficiency of electronic devices.",
        },
        {
          id: 6,
          title: "Blockchain Web3 Hands-on Workshop",
          imageSrc: "/images/events/blockchain.jpg",
          details: "On June 13th, 2023, the IEEE BIT hosted a workshop titled \"Deep Dive into Web3 and Blockchain\" at the VLSI lab. Led by industry expert Shreyas Padmakiran, the event provided attendees with an insightful overview of blockchain technology and decentralised finance. Through interactive sessions, participants gained practical experience in creating wallets and tokens, fostering a deeper understanding of blockchain implementation. The workshop highlighted the vast opportunities in blockchain development and Web3 technology, inspiring attendees to explore further in this innovative domain. With a nominal registration fee of 50/- , the event attracted a diverse audience, proving to be a resounding success and leaving participants enriched with knowledge and enthusiasm for the future of finance.",
        },
        {
          id: 7,
          title: "Coder's Harvest ",
          imageSrc: "/images/events/fun-fair.jpg",
          details: "Coders Harvest, a coding event with three challenging rounds, tested participants' technical knowledge, debugging skills, and coding prowess. Techno- Wiz focused on general programming knowledge and proficiency in languages and tools, showcasing strong foundational and advanced skills. (DE)-BUG-IT-ALL required participants to fix errors in code snippets, demonstrating practical problem-solving abilities. Code-Treck challenged participants to solve coding problems within a time limit, testing their speed and accuracy under pressure. The event attracted diverse coding enthusiasts, fostering a vibrant atmosphere of competition and learning. Coders Harvest celebrated participants' skills, inspiring continued learning and innovation in coding",
        },
        {
          id: 8,
          title: "Deep Dive into IEEE",
          imageSrc: "/images/events/fun-fair.jpg",
          details: "The IEEE Student Branch of BIT hosted \"Deep Dive into IEEE,\" a virtual event to explore IEEE's dynamic chapters - Execom, CAS, and CS - and celebrate club achievements. Dr. Jalaja S and Dr. M S Bhargavi delivered insightful keynote addresses. Club members showcased past events and encouraged student participation. Interactive discussions emphasized IEEE's role in shaping future technology and highlighted membership benefits like resource access and networking. The event concluded with a celebration of the club's successes, fostering deeper tech understanding and community cohesion. \"Deep Dive into IEEE\" was a successful endeavour, enriching participants' knowledge and club spirit",
        },
    
        {
          id: 9,
          title: "Manthan Events (Monopoly and RC soccer)",
          imageSrc: "/images/events/monopoly.png",
          details: "A lively event featuring a life-size Monopoly game took place at the BIT campus. Participants immersed themselves in the iconic board game, navigating through oversized game pieces and properties. Groups strategized to buy, sell, and negotiate their way to victory in a fun-filled atmosphere. With larger-than-life excitement, the life-size Monopoly game provided a memorable experience for all involved, creating lasting memories and fostering a sense of community.\n \n We also hosted an exhilarating RC Soccer League where participants navigate RC cars through challenging paths. Teams tackled mini-challenges like scoring goals and bowling. Speed and precision were key as teams raced against the clock The RC Soccer League brought joy and excitement, leaving participants thrilled and eager for future events.",
        },
        {
          id: 10,
          title: " Among-Us in real life",
          imageSrc: "/images/events/amongus.png",
          details: "IEEE BIT hosted an exhilarating event, Among Us: Real Life Edition, on July 31st at Ramegowda Seminar Hall. Participants, in teams of two, experienced the thrill of being crewmates or impostors, vying for cash prizes. The event boasted an exciting prize pool of Rs. 3000/-. Registration fees were Rs. 100/- for IEEE members and Rs. 150/- for others. The real-life adaptation brought the popular mobile game Among Us to the physical realm, allowing attendees to immerse themselves fully in the gameplay. From strategic alliances to cunning betrayals, participants experienced the excitement of the game firsthand, navigating through the challenges of trust and deception in a dynamic, face-to- face setting.",
        },
        {
          id:11,
          title: "IEEE Fiesta",
          imageSrc: "/images/events/fun-fair.jpg",
          details: "IEEE FIESTA 2023 was a techno-cultural event organised by the IEEEsociety of Bangalore Institute of Technology on 13.01.2023 exclusivelyfor the student batch of 2022. It was a much awaited and successful event with an active participationof 24 teams each consisting of 3 participating members. It was a 3-round hurdle event with two teams emerging as the winnersand the runner-ups. The winners and runner-ups were awarded with prizes worth 5000/-"

        }
        // Add more events for 2023 here
      ],
    },
    // Add more years as needed
  ];

  return (
    <div className="toggleable-demo-container">
      {eventsByYear.map((yearData) => (
        <Panel key={yearData.year} header={<span className="text-2xl font-medium text-blue-500 mb-4">{yearData.year}</span>} toggleable collapsed className="custom-panel p-4 max-w mb-5">
          <div>
            {yearData.events.map((event) => (
              <div key={event.id} className="mb-10">
                <Splitter className='mb-5 sm:flex sm:items-center' style={{ height: 'auto' }}>
                  <SplitterPanel className="flex items-center justify-center mb-5 sm:mb-0" size={25} minSize={10}>
                    {/* Left Panel */}
                    <div className="w-full h-full flex items-center justify-center">
                      <Image src={event.imageSrc} alt={event.title} width={300} height={300} className='rounded-3xl' />
                    </div>
                  </SplitterPanel>
                  <SplitterPanel className="flex flex-col items-center justify-center text-center" size={75}>
                    {/* Right Panel */}
                    <h3 className="text-3xl font-medium mb-4 text-blue-500">{event.title}</h3>
                    <p>{event.details}</p>
                  </SplitterPanel>
                </Splitter>
              </div>
            ))}
          </div>
        </Panel>
      ))}
    </div>
  );

}
