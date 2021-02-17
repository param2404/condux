import { useContext, useEffect } from "react";
import { ThemeContext } from "./../context/ThemeContext";
import { connect } from 'react-redux';
import { getProducts } from './../store/actions';
import { bindActionCreators } from "redux";

const ShowProduct = (props) => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { getProducts, products, loading, error }=props

    useEffect(() => {
     products && !products.length && getProducts()
    },[])

    console.log(products, loading, error);
  return (
    <div style={{ color: theme.color, background: theme.bg }}>
      <div style={{ background: theme.ui, color: theme.color }}>HI</div>
    </div>
  );
}

const mapDispatchToProps=(dispatch)=> {
  return bindActionCreators({ getProducts }, dispatch);
}

const mapStateToProps = ({products}) => {
    return {
        products: products.products,
        loading: products.loading,
        error:products.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);


