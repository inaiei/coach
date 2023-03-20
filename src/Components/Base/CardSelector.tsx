import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { SelectorItem } from "../../Data/Types";
import CardSelectorItem from "./CardSelectorItem";

export enum CardSelectorPosition {
  Top,
  Left,
}

interface CardSelectorProp {
  items: SelectorItem[];
  selectedItem?: SelectorItem;
  position?: CardSelectorPosition;
  onChange?: (newValue?: SelectorItem) => void;
}

const CardSelector = ({ items, selectedItem, position, onChange }: CardSelectorProp) => {
  const navigate = useNavigate();

  const onSelected = (item: SelectorItem, isSelected: boolean) => {
    if (item.navigateTo && isSelected) {
      navigate(item.navigateTo);
    }

    if (onChange) {
      if (isSelected && item.id === selectedItem?.id) {
        onChange(undefined);
      } else if (isSelected) {
        onChange(item);
      }
    }
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-evenly"
      alignItems="stretch"
      direction="row"
    >
      {items.map((item) => (
        <Grid item key={item.id} sx={{ width: { xs: "100%" } }}>
          <CardSelectorItem
            item={item}
            isSelected={item.id === selectedItem?.id}
            onSelect={onSelected}
            position={position}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardSelector;
