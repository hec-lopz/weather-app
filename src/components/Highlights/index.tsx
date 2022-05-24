const Highlights = () => {
  return (
    <section className="py-14 px-5">
      <h2 className="text-white-custom text-2xl font-bold mb-8">
        Today's Highlights
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,328px))] gap-8 justify-center text-white-custom">
        <li className="min-h-[159px] bg-secondary min-w-0 flex flex-col justify-center items-center">
          <span className="inline-block font-medium text-base">
            Wind status
          </span>
          <div>
            <span className="text-6xl font-bold">7</span>

            <span className="text-4xl font-medium">mph</span>
          </div>
        </li>
        <li className="min-h-[159px] bg-secondary min-w-0 flex flex-col justify-center items-center">
          <span className="inline-block font-medium text-base">
            Wind status
          </span>
          <div>
            <span className="text-6xl font-bold">7</span>

            <span className="text-4xl font-medium">mph</span>
          </div>
          <div className="flex justify-between gap-2 mt-6">
            <span className="rounded-full w-5 h-5 grid place-items-center bg-grayBtn material-icons text-xs">
              navigation
            </span>
            <span>WSW</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Highlights;
