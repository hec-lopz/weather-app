const HighlightsUI: React.FC<any> = ({ children }) => {
  return (
    <section className="py-14 px-5 max-w-5xl m-auto">
      <h2 className="text-white-custom text-2xl font-bold mb-8">
        Today's Highlights
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,328px))] auto-rows-[minmax(min-content,max-content)] gap-8 justify-center text-white-custom">
        {children}
      </ul>
    </section>
  );
};

export default HighlightsUI;
