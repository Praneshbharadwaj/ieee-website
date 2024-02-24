import Image from 'next/image';
import { Splitter, SplitterPanel } from 'primereact/splitter';

const About = ({ heading, para, image }) => {
  return (
    <section className="py-10 lg:py-16 bg-gray-100 dark:bg-dark-2">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-5 lg:gap-60">
          <div className="lg:w-7/12 lg:pr-10 mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-dark dark:text-white">
              {heading}
            </h2>
            <p className="text-base lg:text-lg leading-relaxed mb-8 text-body-color dark:text-dark-6">
              {para}
            </p>
          </div>
          <div className="lg:w-5/12 mt-8 lg:mt-0 lg:ml-auto">
            <Splitter style={{ height: '100%' }}>
              <SplitterPanel>
                <div className="relative h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="responsive"
                    width={400} // Adjust these dimensions as needed
                    height={400} // Adjust these dimensions as needed
                    objectFit="contain"
                    className="rounded-2xl"
                  />
                </div>
              </SplitterPanel>
            </Splitter>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
