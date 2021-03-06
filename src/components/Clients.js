import React, { Component } from "react";
import { Typography, withStyles, Grid, Avatar } from "@material-ui/core";
import cottonLogo from "../images/cotton.svg";
import asjLogo from "../images/asj.png";
import zilikaLogo from "../images/zilika_logo.png";
import indianYogaLogo from "../images/indian_yoga_culture.jpg";
import ganasaktiLogo from "../images/ganasakti.png";
import zubleeFoundationLogo from "../images/zublee_foundation.png";
import wcLogo from "../images/wc.png";
import byatikramLogo from "../images/byatikram-logo.jpg";
import adcraftLogo from "../images/adcraft.png";
import freebirdsLogo from "../images/freebirds_logo.png";
import jcafeLogo from "../images/jcafe_logo.jpg";
import goenkaLogo from "../images/goenka-samrat-logo.png";
import getNotesLogo from "../images/get-notes.png";

class Clients extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.clientsParent}>
        <Typography
          variant="h3"
          color="textPrimary"
          className={classes.clientsHeadingBig}
        >
          Who's using our products?
        </Typography>
        <Typography
          variant="h5"
          color="textPrimary"
          className={classes.clientsHeadingSmall}
        >
          Who's using our products?
        </Typography>

        <Grid
          container
          alignItems="flex-end"
          className={classes.clientsGridsParent}
        >
          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={getNotesLogo}
              className={classes.clientIcons}
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              Get Your Notes
            </Typography>
          </Grid>

          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img src={freebirdsLogo} draggable="false" />
            <Typography variant="subtitle1" color="textSecondary">
              Freebirds
            </Typography>
          </Grid>

          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={wcLogo}
              className={classes.clientIcons}
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              World Connect
            </Typography>
          </Grid>

          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={
                "https://directtalks.in/main/static/media/directtalks.5bbd4250.jpeg"
              }
              className={classes.clientIcons}
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              Direct Talks
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="flex-end"
          className={classes.clientsGridsParent}
        >
          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={cottonLogo}
              className={classes.clientIcons}
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              Cotton University
            </Typography>
          </Grid>

          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={goenkaLogo}
              draggable="false"
              style={{ backgroundColor: "gray" }}
            />
            <Typography variant="subtitle1" color="textSecondary">
              Samrat Goenka
            </Typography>
          </Grid>

          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={adcraftLogo}
              className={classes.clientIcons}
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              Ad-Craft
            </Typography>
          </Grid>

          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={
                "https://keshariindustries.co/app/static/media/logo.598c4dc5.jpg"
              }
              className={classes.clientIcons}
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              Keshari Industries
            </Typography>
          </Grid>

          <Grid
            container
            alignItems="flex-end"
            className={classes.clientsGridsParent}
          >
            <Grid item md={3} xs={6} className={classes.clientsGrids}>
              <img
                src={indianYogaLogo}
                className={classes.clientIcons}
                draggable="false"
              />
              <Typography variant="subtitle1" color="textSecondary">
                IYC & YTC
              </Typography>
            </Grid>

            <Grid item md={3} xs={6} className={classes.clientsGrids}>
              <img
                src={zubleeFoundationLogo}
                // className={classes.clientIcons}
                width="90"
                draggable="false"
              />
              <Typography variant="subtitle1" color="textSecondary">
                Zublee Foundation
              </Typography>
            </Grid>

            <Grid item md={3} xs={6} className={classes.clientsGrids}>
              <img
                src={zilikaLogo}
                className={classes.clientIcons}
                draggable="false"
              />
              <Typography variant="subtitle1" color="textSecondary">
                Zilika
              </Typography>
            </Grid>

            <Grid item md={3} xs={6} className={classes.clientsGrids}>
              <img
                src={ganasaktiLogo}
                // className={classes.clientIcons}
                width="160"
                draggable="false"
              />
              <Typography variant="subtitle1" color="textSecondary">
                Ganasakti
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="flex-end"
          className={classes.clientsGridsParent}
        >
          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <div style={{ display: "grid", justifyContent: "center" }}>
              <Avatar
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "lightgreen",
                }}
              >
                DB
              </Avatar>
            </div>
            <Typography variant="subtitle1" color="textSecondary">
              DB Industries
            </Typography>
          </Grid>

          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={byatikramLogo}
              className={classes.clientIcons}
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              Byatikram
            </Typography>
          </Grid>
          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={asjLogo}
              className={classes.clientIcons}
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              Assam School of Journalism
            </Typography>
          </Grid>

          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={jcafeLogo}
              className={classes.clientIcons}
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              Jollywood Cafe
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = (theme) => ({
  clientsParent: {
    textAlign: "center",
  },
  clientsHeadingBig: {
    marginBottom: 30,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  clientsHeadingSmall: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  clientsGridsParent: {
    marginTop: 50,
  },
  clientsGrids: {
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 40,
    },
  },
  clientIcons: {
    width: 100,
    [theme.breakpoints.down("xs")]: {
      width: 80,
      // paddingBottom: 20d
    },
  },
});

export default withStyles(styles)(Clients);
