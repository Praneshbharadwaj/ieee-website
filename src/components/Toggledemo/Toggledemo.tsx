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
          title: "Webinar on Data Science & Career Opportunities",
          imageSrc: "/images/events/data-science-webinar.jpg",
          details:
            "Mr. Akhilesh PR, a seasoned professional in the field of Data Science and Analytics, delivered an insightful webinar on the intricacies and career opportunities within this burgeoning field. During the session, Mr. Akhilesh PR provided a comprehensive overview of Data Science, emphasizing its various roles and career prospects.",
        },
        {
          id: 42,
          title: "Alumni Integration-Industry Academia Summit",
          imageSrc: "/images/events/ai-ia-summit.jpg",
          details:
            "IEEE Student Branch curated an engaging stall for the Alumni Integration-Industry Academia Summit 24, serving as a focal point for attendees. Showcasing events, initiatives and workshops conducted over the years, the stall provided a comprehensive glimpse into the branch's vibrant activities.",
        },
        {
          id: 43,
          title: "CAD Infrastructure For VLSI Design",
          imageSrc: "/images/events/cad-vlsi.png",
          details:
            "IEEE BIT Student Branch inaugurated a COE in the field of Electronics Design Automation (EDA). The inauguration ceremony followed by a 2-day hands on workshop about CAD infrastructure for VLSI on 1st and 2nd of February 2024 marked the magnificent beginning of this journey.",
        },
        {
          id: 44,
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
            "Sensors are a very essential component of any electronics project. In this world of increased automation, the knowledge about sensors is very crucial. In this regard, the IEEE BIT SB conducted a 3-day hands-on workshop about – “Sensors and their applications”.The speaker Dr. Kendaganna Swamy S along with his associate Dr.Rajshree P successfully educated the students about the various basic and essential sensors and their usage with the help on an Arduino Uno circuit board. ",
        },
        {
          id: 3,
          title: "Tech Talk on VLSI Design And Career Opportunities",
          imageSrc: "/images/events/vlsi.png",
          details:
            "The IEEE Student Branch BIT organized an enlightening tech talk on Very Large Scale Integration (VLSI) on 20th November. The event aimed to explore the intricacies of VLSI design and shed light on diverse career paths in this field. The event was presided by Dr Ashwath MU, our esteemed Principal, Dr. Hemanth Kumar AR, Head of department, Electronics and Communication Engineering and Dr Jalaja S, IEEE SB Counselor along with speaker of the day Dr G S Javed.",
        },
        {
          id: 4,
          title: "Event 4",
          imageSrc: "/images/events/fun-fair.jpg",
          details: "This is a dummy event description for Event 4.",
        },
        {
          id: 5,
          title: "Event 5",
          imageSrc: "/images/events/fun-fair.jpg",
          details: "This is a dummy event description for Event 5.",
        },
        {
          id: 6,
          title: "Event 6",
          imageSrc: "/images/events/fun-fair.jpg",
          details: "This is a dummy event description for Event 6.",
        },
        {
          id: 7,
          title: "Event 7",
          imageSrc: "/images/events/fun-fair.jpg",
          details: "This is a dummy event description for Event 7.",
        },
        {
          id: 8,
          title: "Event 8",
          imageSrc: "/images/events/fun-fair.jpg",
          details: "This is a dummy event description for Event 8.",
        },
        {
          id: 9,
          title: "Event 9",
          imageSrc: "/images/events/fun-fair.jpg",
          details: "This is a dummy event description for Event 9.",
        },
        {
          id: 10,
          title: "Event 10",
          imageSrc: "/images/events/fun-fair.jpg",
          details: "This is a dummy event description for Event 10.",
        },
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
