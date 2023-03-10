import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SelectorItem } from "../../Data/Types";

interface CardSelectorItemProp {
    item: SelectorItem;
    isSelected?: boolean
}

const CardSelectorItem = ({item, isSelected}: CardSelectorItemProp) => {
  return (
    <Card sx={{ height: "100%", backgroundColor: isSelected ? "#639fe0" : "#fff" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="60"
          image={item.image}
          alt={item.title}
          sx={{ objectFit: "contain" }}
        />
        <CardContent sx={{ paddingTop: "0" }}>
          <Typography
            gutterBottom
            variant="cardTitle"
            component="div"
            align="center"
          >
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardSelectorItem;