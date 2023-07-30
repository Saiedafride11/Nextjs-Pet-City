const Faq = () => {
  return (
    <div className=" relative">
      <div className="bg-slate-900 relative faqs_qsn">
        <h3
          className="text-6xl pt-12 my-12 uppercase font-medium text-center text-white
            after:content-[''] after:absolute after:border-t-2 after:w-16 after: after:border-cyan-500 after:left-0 after:bottom-0 after:right-20 after:top-28 after:mx-auto
            "
        >
          faqs
        </h3>
        <div className="max-w-3xl mx-auto py-5">
          <details
            className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
            open
          >
            <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              How can I check the status of my application?
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>
                To check the status of your application, log into your candidate
                profile and click on My Presence, and select Applications. The
                status is displayed next to the job information. If you have
                additional questions about your status, please contact the Human
                Resources department at (202) 336-5520.
              </p>
            </div>
          </details>
        </div>

        <div className="max-w-xl ms-auto p-2 relative">
          <details
            className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
            open
          >
            <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              How will I be contacted for an interview?
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>
                If your skill set matches the job and you are chosen for an
                interview, a Human Resources representative will contact you via
                phone or email regarding the next steps of the interview
                process.regarding the next steps of the interview
                process.regarding the next steps.{" "}
              </p>
            </div>
          </details>
        </div>

        <div className="max-w-xl ml-auto p-2 md:absolute right-0 bottom-64">
          <details
            className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
            open
          >
            <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              To whom should I address my cover letter?
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>
                You may address your cover letter to the APA Employment Team as
                your application will first be reviewed by a recruiter in our
                department. We also encourage you to mention the specific job
                opening that you are applying for in your cover letter.
              </p>
            </div>
          </details>
        </div>

        <div className="max-w-3xl mx-auto py-5 ">
          <details
            className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
            open
          >
            <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              How do I submit my application?
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>
                Select the opportunity for which you would like to apply and
                click on “Apply Now.” Register for an account using your email
                address and create a password. After creating your account, you
                will be able to upload your cover letter, resume, and enter in
                your work experience and education information. A cover letter
                and resume are required to apply for all jobs at APA. Some jobs
                may require additional documents such as a writing sample or
                portfolio. Please make sure you attach the documents that are
                requested in the job announcement. Once you have answered the
                questions and uploaded documents, submit your application.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faq;
