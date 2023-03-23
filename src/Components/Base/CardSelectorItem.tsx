import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SelectorItem } from "../../Data/Types";
import { Grid } from "@mui/material";
import { CardSelectorPosition } from "./CardSelector";

interface CardSelectorItemProp {
  item: SelectorItem;
  isSelected?: boolean;
  onSelect?: any;
  position?: CardSelectorPosition;
}

const CardSelectorItem = ({
  item,
  isSelected,
  onSelect,
  position,
}: CardSelectorItemProp) => {
  const positionGrid = {
    top: { media: 12, content: 12 },
    left: { media: 4, content: 8 },
  };

  return (
    <Card
      sx={{
        height: "100%",
        backgroundColor: isSelected ? "#639fe0" : "#fff",
        ":hover": { backgroundColor: "#639fe0" },
      }}
      onClick={() => onSelect(item, !isSelected)}
    >
      <CardActionArea>
        <Grid container>
          <Grid
            item
            xs={
              position === CardSelectorPosition.Top
                ? positionGrid.top.media
                : positionGrid.left.media
            }
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <CardMedia
              component="img"
              height="60"
              image={item.image}
              alt={item.title}
              sx={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid
            item
            xs={
              position === CardSelectorPosition.Top
                ? positionGrid.top.content
                : positionGrid.left.content
            }
          >
            <CardContent>
              <Typography gutterBottom variant="cardTitle" component="p">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default CardSelectorItem;
