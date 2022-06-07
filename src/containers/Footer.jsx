const Footer = () => (
  <footer className="text-white-custom flex items-center justify-center flex-col p-10">
    <p>
      Coded by{" "}
      <a
        className="font-bold underline visited:text-blue-700 hover:text-gray-500"
        href="https://github.com/hec-lopz"
        target="_blank"
        rel="noreferrer"
      >
        hec_lopz{" "}
      </a>{" "}
      - devchallenges.io
    </p>
    <p className="flex flex-col justify-center items-center">
      <a
        className="font-bold underline visited:text-blue-700 hover:text-gray-500"
        href="https://www.flaticon.com/free-icons/fog"
        title="fog icons"
        target="_blank"
        rel="noreferrer"
      >
        Fog icons created by Freepik - Flaticon
      </a>
      <a
        className="font-bold underline visited:text-blue-700 hover:text-gray-500"
        href="https://www.flaticon.com/free-icons/weather"
        title="weather icons"
        target="_blank"
        rel="noreferrer"
      >
        Broken clouds icon created by kosonicon - Flaticon
      </a>
    </p>
  </footer>
);
export default Footer;
