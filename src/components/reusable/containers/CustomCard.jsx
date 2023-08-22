import { Fragment } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CustomCard(props) {
  return (
    <Box sx={{ width: "fit-content" }}>
      <Card variant="outlined" sx={{ borderRadius: "15px" }}>
        <Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              Total Number of Members:
            </Typography>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                active
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </Typography>

              <Typography color="text.secondary">
                inactive
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Fragment>
      </Card>
    </Box>
  );
}
