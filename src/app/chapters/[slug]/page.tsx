import Newsletter from "@/components/Blog/Newsletter";
import PopularArticle from "@/components/Blog/PopularArticle";
import SocietyTeam from "@/components/Team/SocietyTeam";
import CassocietyTeam from "@/components/Team/cassocietyteam";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllPosts, getPostBySlug } from "@/utils/markdown";
import markdownToHtml from "@/utils/markdownToHtml";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }) {
  const posts = getAllPosts(["title", "code", "excerpt", "coverImage", "slug"]);
  const post = getPostBySlug(params.slug, [
    "title",
    "content",
    "metadata",
  ]);

  const siteName = 'IEEE BIT';
  const authorName = process.env.AUTHOR_NAME || "Your Author Name";

  if (post) {
    const metadata = {
      title: `${post.title || "Single Post Page"} | ${siteName}`,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };

    return metadata;
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
      author: authorName,
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }
}

export default async function Post({ params }: Props) {
  const posts = getAllPosts(["title", "code", "coverImage", "slug"]);
  const post = getPostBySlug(params.slug, [
    "title",
    "author",
    "authorImage",
    "content",
    "coverImage",
    "code",
    "membershipLink"
  ]);

  const content = await markdownToHtml(post.content || "");

  if (post.code === "CAS") {
    return (
      <>
        <Breadcrumb pageName="Chapter Details" />
  
        <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4">
                <div
                  className="wow fadeInUp relative z-20 mb-[60px] h-[300px] overflow-hidden rounded md:h-[400px] lg:h-[500px]"
                  data-wow-delay=".1s"
                >
                  <Image
                    src={post.coverImage}
                    alt="image"
                    width={1288}
                    height={500}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute left-0 top-0 z-10 flex h-full w-full items-end bg-gradient-to-t from-dark-700 to-transparent"></div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 lg:w-8/12">
                    <div className="blog-details xl:pr-10">
                      <div dangerouslySetInnerHTML={{ __html: content }}></div>
                      <CassocietyTeam />
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-4/12">
                    <div>
                      <Newsletter join={post.membershipLink} />
  
                      <div className="-mx-4 mb-8 flex flex-wrap">
                        <div className="w-full px-4">
                          <h2
                            className="wow fadeInUp relative pb-5 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]"
                            data-wow-delay=".1s"
                          >
                            All Chapters
                          </h2>
                          <span className="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
                        </div>
                        {posts.slice(0, 3).map((blog, i) => (
                          <PopularArticle
                            key={i}
                            image={blog?.coverImage}
                            title={blog?.title.slice(0, 30)}
                            slug={blog?.slug}
                          />
                        ))}
                      </div>
  
                      {/* <div
                        className="wow fadeInUp mb-12 overflow-hidden rounded"
                        data-wow-delay=".1s"
                      >
                        <Image
                          src="/images/chapters/computer-society logo.jpg"
                          alt="image"
                          className="w-full"
                          width={408}
                          height={254}
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* <div className="-mx-4 flex flex-wrap">
              <div
                className="wow fadeInUp mt-14 w-full px-4"
                data-wow-delay=".2s"
              >
                <h2 className="relative pb-5 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]">
                  Related Articles
                </h2>
                <span className="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
              </div>
  
              {posts.slice(0, 3).map((blog, index) => (
                <div
                  key={index}
                  className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                >
                  <SingleBlog blog={blog} />
                </div>
              ))}
            </div> */}
          </div>
        </section>
      </>
    );
  }

  if (post.code === "CS") {
    return (
      <>
        <Breadcrumb pageName="Chapter Details" />
  
        <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4">
                <div
                  className="wow fadeInUp relative z-20 mb-[60px] h-[300px] overflow-hidden rounded md:h-[400px] lg:h-[500px]"
                  data-wow-delay=".1s"
                >
                  <Image
                    src={post.coverImage}
                    alt="image"
                    width={1288}
                    height={500}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute left-0 top-0 z-10 flex h-full w-full items-end bg-gradient-to-t from-dark-700 to-transparent"></div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 lg:w-8/12">
                    <div className="blog-details xl:pr-10">
                      <div dangerouslySetInnerHTML={{ __html: content }}></div>
                      <SocietyTeam />
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-4/12">
                    <div>
                      <Newsletter join={post.membershipLink} />
  
                      <div className="-mx-4 mb-8 flex flex-wrap">
                        <div className="w-full px-4">
                          <h2
                            className="wow fadeInUp relative pb-5 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]"
                            data-wow-delay=".1s"
                          >
                            All Chapters
                          </h2>
                          <span className="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
                        </div>
                        {posts.slice(0, 3).map((blog, i) => (
                          <PopularArticle
                            key={i}
                            image={blog?.coverImage}
                            title={blog?.title.slice(0, 30)}
                            slug={blog?.slug}
                          />
                        ))}
                      </div>
  
                      {/* <div
                        className="wow fadeInUp mb-12 overflow-hidden rounded"
                        data-wow-delay=".1s"
                      >
                        <Image
                          src="/images/chapters/computer-society logo.jpg"
                          alt="image"
                          className="w-full"
                          width={408}
                          height={254}
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* <div className="-mx-4 flex flex-wrap">
              <div
                className="wow fadeInUp mt-14 w-full px-4"
                data-wow-delay=".2s"
              >
                <h2 className="relative pb-5 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]">
                  Related Articles
                </h2>
                <span className="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
              </div>
  
              {posts.slice(0, 3).map((blog, index) => (
                <div
                  key={index}
                  className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                >
                  <SingleBlog blog={blog} />
                </div>
              ))}
            </div> */}
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <Breadcrumb pageName="Chapter Details" />

      <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative z-20 mb-[60px] h-[300px] overflow-hidden rounded md:h-[400px] lg:h-[500px]"
                data-wow-delay=".1s"
              >
                <Image
                  src={post.coverImage}
                  alt="image"
                  width={1288}
                  height={500}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute left-0 top-0 z-10 flex h-full w-full items-end bg-gradient-to-t from-dark-700 to-transparent"></div>
              </div>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 lg:w-8/12">
                  <div className="blog-details xl:pr-10">
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    <SocietyTeam />

                  </div>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <div>
                    <Newsletter join={post.membershipLink} />

                    <div className="-mx-4 mb-8 flex flex-wrap">
                      <div className="w-full px-4">
                        <h2
                          className="wow fadeInUp relative pb-5 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]"
                          data-wow-delay=".1s"
                        >
                          All Chapters
                        </h2>
                        <span className="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
                      </div>
                      {posts.slice(0, 3).map((blog, i) => (
                        <PopularArticle
                          key={i}
                          image={blog?.coverImage}
                          title={blog?.title.slice(0, 30)}
                          slug={blog?.slug}
                        />
                      ))}
                    </div>

                    {/* <div
                      className="wow fadeInUp mb-12 overflow-hidden rounded"
                      data-wow-delay=".1s"
                    >
                      <Image
                        src="/images/chapters/computer-society logo.jpg"
                        alt="image"
                        className="w-full"
                        width={408}
                        height={254}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="-mx-4 flex flex-wrap">
            <div
              className="wow fadeInUp mt-14 w-full px-4"
              data-wow-delay=".2s"
            >
              <h2 className="relative pb-5 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]">
                Related Articles
              </h2>
              <span className="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
            </div>

            {posts.slice(0, 3).map((blog, index) => (
              <div
                key={index}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}
