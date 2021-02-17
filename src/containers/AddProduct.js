import { useContext } from "react";
import { ThemeContext } from "./../context/ThemeContext";

export default function AddProduct() {
  const {
    isLightTheme,
    light,
    dark,
  } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  
  return (
    <div style={{ color: theme.color, background: theme.bg }}>
      <div style={{background:theme.ui , color:theme.color}}>AddProduct</div>
    </div>
  ); 
}
