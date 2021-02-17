import  { useContext } from "react";
import { ThemeContext } from "./../context/ThemeContext";
import AddProducts from './AddProduct';
import ShowProducts from './ShowProducts'


export default function Containers() {
  const {showProducts} = useContext(ThemeContext);
 

  return  showProducts?<ShowProducts/>:<AddProducts/>
  
}
