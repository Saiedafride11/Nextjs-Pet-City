const Preloader = () =>
{
  return (
    <>
      <main className="w-screen h-screen bg-white flex flex-col justify-center items-center">
        <div>
          <img
            className="inline-block w-20 h-20 animate-spin"
            src="https://i.ibb.co/z8GVp26/corzon.png"
            alt="preloader_Image"
          />
        </div>
      </main>
    </>
  );
};

export default Preloader;
