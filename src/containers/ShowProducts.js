import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "./../context/ThemeContext";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import { getProducts } from "./../store/actions";
import Spinner from "./../components/Spinner";

const useStyles = makeStyles({
  media: {
    height: 200,
  },
});

const ShowProduct = (props) => {
  const classes = useStyles();
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { getProducts, products, loading, error } = props;

  useEffect(() => {
    products && !products.length && getProducts();
  }, []);

  console.log(products, loading, error);
  return (
    <div style={{ color: theme.color, background: theme.bg }}>
      <Grid
        container
        spacing={2}
        style={{ background: theme.ui, color: theme.color }}
      >
        {loading ? (
          <Spinner />
        ) : products && products.length ? (
          products.map((product, i) => (
            <Grid item xs={6} sm={3} key={i}>
              <Card style={{ color: theme.color, background: theme.bg }}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={product.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      {product.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h5">
                      $ {product.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ color: theme.color, background: theme.bg }}
                    >
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography gutterBottom variant="h5" component="h2">
            {error}
          </Typography>
        )}
      </Grid>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getProducts }, dispatch);
};

const mapStateToProps = ({ products }) => {
  return {
    products: products.products,
    loading: products.loading,
    error: products.error,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);
