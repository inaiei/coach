import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { SelectorItem } from "../../Data/Types";
import CardSelectorItem from "./CardSelectorItem";

interface CardSelectorProp {
  items: SelectorItem[];
  xs?: number;
  sm?: number;
  md?: number;
  selectedItem?: SelectorItem
}

const CardSelector = ({ items, xs, sm, md, selectedItem }: CardSelectorProp) => {
  const navigate = useNavigate();

  const onSelected = (item:SelectorItem, isSelected:boolean) => {
    if (item.navigateTo && isSelected) {
      navigate(item.navigateTo);
    }

    if(isSelected && item.id === selectedItem?.id) {
      selectedItem = undefined;
    } else if (isSelected) {
      selectedItem = item
    }

    // update the selected value somewhere
  }

  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-evenly"
      alignItems="stretch"
      direction="row"
    >
      {items.map((item) => (
        <Grid item key={item.id} sx={{ width: { xs: "100%", md: '12.5rem' } }}>
          <CardSelectorItem
            item={item}
            isSelected={item.id === selectedItem?.id}
            onSelect={onSelected}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardSelector;