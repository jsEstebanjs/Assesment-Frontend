import axios from "axios";
import { PostLoading, PostSucces, PostError} from '../store/reducers/CardsHome.Slice.js'


export const getCards = () => {
  return (dispatch) => {
    dispatch(PostLoading(true))
    axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            dispatch(PostSucces(res.data))
        })
        .catch((error) => {
            dispatch(PostError(error))
        })
        .finally(() => {
            dispatch(PostLoading(false))
        })
 }
}

