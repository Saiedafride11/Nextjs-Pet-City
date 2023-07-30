

const Recruiter = () => {
    return (
      <div className="mx-10 md:mx-20 md:my-20 mt-12">
        <div className="md:grid md:grid-cols-2">
          <div className="md:grid md:grid-cols-3 gap-5">
            <div>
              <img
                className="rounded-3xl shadow-xl transform duration-500 hover:scale-105 mb-3"
                src="https://paradise-event-819fa.web.app/static/media/event.f8aa690b.jpg"
                alt=""
              />
            </div>
            <div></div>
            <div>
              <img
                className="rounded-3xl shadow-xl transform duration-500 hover:scale-105 mb-3"
                src="https://paradise-event-819fa.web.app/static/media/event.f8aa690b.jpg"
                alt=""
              />
            </div>
            <div></div>
            <div>
              <img
                className="rounded-3xl shadow-xl transform duration-500 hover:scale-105 mb-3"
                src="https://paradise-event-819fa.web.app/static/media/event.f8aa690b.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" md:mx-20 text-justify space-y-10 my-10">
            <h3 className="text-center text-xl text-pink-900 font-bold uppercase">
              Recruiterment Process
            </h3>
            <p className="text-base text-">
              Event Management (formerly Festival Management & Event Tourism),
              an International Journal, intends to meet the research and
              analytic needs of a rapidly growing profession focused on events.
              This field has developed in size and impact globally to become a
              major business with numerous dedicated facilities. </p>
          </div>
        </div>
      </div>
    );
};

export default Recruiter;