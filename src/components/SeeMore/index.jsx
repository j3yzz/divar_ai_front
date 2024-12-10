import { useMemo, useState } from "react";

const SeeMore = (props) => {
  const { content = "" } = props;
  const [expanded, setExpanded] = useState(false);

  const slicedContent = useMemo(() => content?.slice(0, 100), [content]);

  const toggleExpanded = (e) => {
    e.preventDefault();
    setExpanded((prev) => !prev);
  };

  return (
    <div>
      <p className="text-gray-800 text-medium">
        {expanded ? content : `${slicedContent}...`}{" "}
        <span
          onClick={toggleExpanded}
          className="text-blue-600 cursor-pointer font-semibold text-sm"
        >
          {expanded ? "مشاهده کمتر" : "مشاهده بیشتر"}
        </span>
      </p>
    </div>
  );
};

export default SeeMore;
