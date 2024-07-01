import PropTypes from "prop-types";
import { API_Key } from "../common";

const RenderLinks = ({ links }) => {
  return (
    <div className="basis-1/2 m-auto">
      <h2 className="text-2xl font-bold mb-5 ">
        Click below link(s) to download
      </h2>
      <ul className="list-disc ps-8">
        {links.map((link, i) => (
          <li key={i} className="mb-1">
            <a
              href={API_Key.download + link}
              download
              className="hover:text-slate-700"
            >
              {/* Download File {i + 1} */}
              {API_Key.download + link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

RenderLinks.propTypes = {
  links: PropTypes.array,
};

export default RenderLinks;
