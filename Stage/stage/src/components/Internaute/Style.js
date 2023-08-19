import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardGrid: { padding: "20px 0" },
  card: {
    heigh: "100%",

    Display: "flex",
    flexDirection: "column",
  },
  cardMedia: { paddingTop: "100%" },
  cardContent: { flexGrow: 1 },
}));

export default useStyles;
