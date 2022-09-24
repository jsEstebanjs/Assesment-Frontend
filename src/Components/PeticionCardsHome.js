import axios from "axios";
import { PostLoading, PostSucces, PostError} from '../store/reducers/CardsHome.Slice.js'


export const getCards = () => {
  return (dispatch) => {
    dispatch(PostLoading(true))
    axios.get(process.env.REACT_APP_API)
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

