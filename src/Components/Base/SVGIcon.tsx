import { useEffect, useState } from "react";

interface SVGIconProp {
  url: string;
  width?: string;
  style?: any;
}

const SVGIcon = ({ url, width, style }: SVGIconProp) => {
  const [svg, setSVG] = useState<string>("");

  if (!width) width = "100";

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((text) => setSVG(text));
  });

  return (
    <div
      style={{ width: width + "%", height: "100%", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center", ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default SVGIcon;
