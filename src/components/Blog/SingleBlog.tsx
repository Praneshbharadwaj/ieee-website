import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, description, code, slug } = blog;

  return (
    <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
      <div className="mb-6 overflow-hidden rounded">
        <Link
          href={`/chapters/${slug}`}
          aria-label="blog cover"
          className="block"
        >
          <Image
            src={coverImage}
            alt="image"
            className="w-full transition group-hover:rotate-6 group-hover:scale-125"
            width={408}
            height={272}
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center">
        <span className="mx-auto mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
          {code}
        </span>
        <h3>
          <Link
            href={`/chapters/${slug}`}
            className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="text-base text-body-color dark:text-dark-6">{description}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
