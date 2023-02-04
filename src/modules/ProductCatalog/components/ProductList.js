import { useSelector, useDispatch } from "react-redux/es/exports";
import Button from "../../../components/UI/Button/Button";
import { add } from "../../../store/reducers/productsSlice";


export const ProductList = () => {
  const list = useSelector(state=>state.products)
  const dispatch = useDispatch()
  function addProduct() {
      dispatch(add('product'))
  }
  return ( <div>
      
    <Button action={addProduct}>Add</Button>
    {list.map((product)=>{
      return(<li >{product}</li>)
    })}
  </div> );
}
 