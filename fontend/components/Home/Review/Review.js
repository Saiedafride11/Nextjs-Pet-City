import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Bounce from "react-reveal/Bounce";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import card from '../../../styles/Home.module.css'

const fackreview = [
  {
    _id: "618acd253a94d9a3527ca764",
    id: 2,
    username: "Jennei Kim",
    image: "https://i.ibb.co/Khspq2F/testimonial-jennei.jpg",
    rating: "5",
    review:
      "The DJI Air 2S is a small folding drone with a premium 1-inch sensor camera, 5.4K video, and a number of automated flight and safety features, making it a pro-minded",
  },
  {
    _id: "618acd253a94d9a3527ca763",
    id: 1,
    username: "Roses are Rosie",
    image: "https://i.ibb.co/TYvVhLb/testimonial-rosie.jpg",
    rating: "3.5",
    review:
      "The DJI Mavic 3 puts a Hasselblad camera in a small, folding drone. It captures stunning video and stills, but it's missing a few promised features at launch.",
  },
  {
    _id: "618acd253a94d9a3527ca766",
    id: 4,
    username: "Jisoo",
    image: "https://i.ibb.co/y5hcKhm/testimonial-jisoo.jpg",
    rating: "5",
    review:
      "With long battery life, a robust wireless connection, and 4K video, the DJI Mini 2 is the best drone you'll find for less than $500.",
  },
  {
    _id: "618acd253a94d9a3527ca767",
    id: 5,
    username: "SOMI",
    image: "https://i.ibb.co/L1kFRHD/testimonial-somi.png",
    rating: "5",
    review:
      "The DJI Mavic Mini is a lightweight drone that you don't have to register, but spotty connectivity makes it hard to recommend wholeheartedly.",
  },
  {
    _id: "618acd253a94d9a3527ca765",
    id: 3,
    username: "LA LISA",
    image: "https://i.ibb.co/tCHRxxv/testimonial-lisa.jpg",
    rating: "4.5",
    review:
      "The DJI FPV Combo racing drone places an emphasis on high-speed first-person flight over imaging, making it exhilarating to use, but potentially dangerous if handled.",
  },
  {
    _id: "618acd253a94d9a3527ca768",
    id: 6,
    username: "Jihyo",
    image: "https://i.ibb.co/hfvdJPV/testimonial-jihyo.jpg",
    rating: "4",
    review:
      "The DJI Mavic Pro Platinum is the best small drone you can buy, and a fantastic choice for most aerial videographers and YouTubers.",
  },
];

SwiperCore.use([Navigation, Pagination, Autoplay]);

// const Review = ({ review }) => {
const Review = () =>
{
  return (
    <section className="max-w-screen-xl w-full mx-auto px-6 pb-24 mt-10">
      {/* costom */}

      <div className="flex justify-center items-center flex-col relative">
        <h1 className="font-logo text-gray-800 dark:text-white text-3xl font-medium after:content-[''] after:absolute after:border-t-2 after:w-16 after:border-cyan-500 after:top-10 after:left-32 md:after:left-1/2">
          Testimonials
        </h1>
      </div>

      {/* costom */}

      <Swiper
        loop={true}
        className="mySwiper py-6 "
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={true}
        grabCursor={true}
        slidesPerView={1}
        speed={600}
        spaceBetween={20}>
        {fackreview.map((data) => (
          <SwiperSlide key={data._id}>
            <Bounce bottom>
              <div className="container md:px-5 py-12  mx-auto">
                <div
                  className={card.zone_card}
                  style={{ width: "60%", height: "30%" }}>
                  <div className=" lg:w-3/4 w-full mx-auto bg-white dark:bg-[#46bfeb7a]  text-center  p-4 shadow-lg  rounded-lg ">
                    <img
                      className="w-12 mx-auto mb-4"
                      src="https://i.ibb.co/99dfqmz/quote.png"
                      alt="quotes"
                    />

                    <p className="leading-relaxed poppins text-slate-700 dark:text-white">
                      {data.review}
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-gray-400 mt-8 mb-6"></span>

                    {/* rating  */}
                    <div className="flex items-center justify-center pb-4">
                      <Rating
                        emptySymbol={
                          <AiOutlineStar className="text-gray-600 text-xl" />
                        }
                        fullSymbol={
                          <AiFillStar className="text-yellow-400 text-xl" />
                        }
                        initialRating={`${data.rating}`}
                        readonly
                      />
                      <span className="text-gray-600">({data.rating})</span>
                    </div>
                    {/* person info  */}
                    <div className="flex justify-center items-center space-x-3">
                      <img
                        className="w-16 h-16 rounded-full object-cover "
                        src={data.image}
                        alt={data.username}
                      />
                      <h2 className="text-slate-700 dark:text-white font-medium poppins tracking-wider text-sm">
                        {data.username}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </Bounce>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
