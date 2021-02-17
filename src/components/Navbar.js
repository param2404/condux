import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from './../context/ThemeContext';
import {
  AppBar,
  Toolbar,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
  Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
    const classes = useStyles();
    const {
      isLightTheme,
      light,
      dark,
      toggleTheme,
      showProducts,
      toggleView,
    } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;



    // console.log(isLightTheme, light, dark, toggleTheme)

    return (
      <AppBar
        position="static"
        style={{ color: theme.color, background: theme.bg }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shopping
          </Typography>
          <Button color="inherit" disabled={showProducts} onClick={toggleView}>
            Products
          </Button>
          <Button color="inherit" disabled={!showProducts} onClick={toggleView}>
            Add Product
          </Button>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={isLightTheme}
                  color="default"
                  onChange={toggleTheme}
                />
              }
              label={isLightTheme ? "Dark" : "Light"}
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    );
}