import { useEffect, useState } from "react";

interface SVGIconProp {
  url: string;
  width?: string;
  style?: any;
  onClick?: any;
}

const SVGIcon = ({ url, width, style, onClick }: SVGIconProp) => {
  const [svg, setSVG] = useState<string>("");

  if (!width) width = "100";

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((text) => setSVG(text));
  });

  return (
    <div
      onClick={onClick}
      style={{ width: width + "%", height: "100%", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center", ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default SVGIcon;
