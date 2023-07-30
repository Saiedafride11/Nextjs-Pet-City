import Image from "next/image";
import { BsCalendarCheck } from "react-icons/bs";

const fakeData = [
  {
    title: "Join Team HTML Developer Pro Jobs",
    date: "07 FEB, 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem, culpa amet suscipit aspernatur vel ....",
    image: "https://i.ibb.co/QNVYczx/blog6.jpg",
    author: "admin",
  },
  {
    title: "Join Team HTML Developer Pro Jobs",
    date: "07 FEB, 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem, culpa amet suscipit aspernatur vel ....",
    image: "https://i.ibb.co/4NzD5p9/blog3.jpg",
    author: "admin",
  },
  {
    title: "Join Team HTML Developer Pro Jobs",
    date: "07 FEB, 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem, culpa amet suscipit aspernatur vel ....",
    image: "https://i.ibb.co/SvdFh9B/blog5.jpg",
    author: "admin",
  },
  {
    title: "Join Team HTML Developer Pro Jobs",
    date: "07 FEB, 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem, culpa amet suscipit aspernatur vel ....",
    image: "https://i.ibb.co/SvdFh9B/blog5.jpg",
    author: "admin",
  },
  {
    title: "Join Team HTML Developer Pro Jobs",
    date: "07 FEB, 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem, culpa amet suscipit aspernatur vel ....",
    image: "https://i.ibb.co/QNVYczx/blog6.jpg",
    author: "admin",
  },
  {
    title: "Join Team HTML Developer Pro Jobs",
    date: "07 FEB, 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem, culpa amet suscipit aspernatur vel ....",
    image: "https://i.ibb.co/4NzD5p9/blog3.jpg",
    author: "admin",
  },
  {
    title: "Join Team HTML Developer Pro Jobs",
    date: "07 FEB, 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem, culpa amet suscipit aspernatur vel ....",
    image: "https://i.ibb.co/SvdFh9B/blog5.jpg",
    author: "admin",
  },
  {
    title: "Join Team HTML Developer Pro Jobs",
    date: "07 FEB, 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem, culpa amet suscipit aspernatur vel ....",
    image: "https://i.ibb.co/4NzD5p9/blog3.jpg",
    author: "admin",
  },
];

const Blogs = () =>
{
  return (
    <div>
      <h1 className="text-3xl dark:text-white font-serif font-bold pb-5">Blogs</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:gap-7 gap-3">
        {fakeData.map((blog, index) =>
        {
          return (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 py-5 px-3 rounded group overflow-hidden cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  className="w-full h-40 transform transition duration-300 group-hover:scale-125 overflow-hidden"
                />
              </div>
              <div className="flex items-center justify-center dark:text-slate-200 py-3">
                <span>
                  <BsCalendarCheck className="mr-2 mb-1 text-green-600" />
                </span>
                <h6>{blog.date}</h6>
              </div>
              <p className="font-sans dark:text-white">{blog.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
