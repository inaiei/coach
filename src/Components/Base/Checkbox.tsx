import { Fragment } from "react";
import SVGIcon from "./SVGIcon";

interface CheckboxProps {
  selected: boolean;
  onChange: (newValue:boolean) => void;
}

const Checkbox = ({ selected, onChange }: CheckboxProps) => {
  return (
    <Fragment>
      {selected && (
        <SVGIcon
          url="/Images/tick-square-done.svg"
          width="14"
          style={{ float: "left" }}
          onClick={() => {
            onChange(false)
          }}
        />
      )}
      {!selected && (
        <SVGIcon
          url="/Images/tick-square.svg"
          width="14"
          style={{ float: "left" }}
          onClick={() => {
            onChange(true)
          }}
        />
      )}
    </Fragment>
  );
};

export default Checkbox;
