import  { useContext } from "react";
import { ThemeContext } from "./../context/ThemeContext";
import AddProduct from './AddProduct/index';
import ShowProducts from './ShowProducts'


export default function Containers() {
  const {showProducts} = useContext(ThemeContext);
 

  return  showProducts?<ShowProducts/>:<AddProduct/>
  
}
