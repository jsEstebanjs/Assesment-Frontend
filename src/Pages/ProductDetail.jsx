import { useEffect } from "react";
import axios from "axios";
import { useSelector , useDispatch } from "react-redux";
import { PostLoading , PostSucces ,PostError} from '../store/reducers/Card.Slice'
import { useParams } from "react-router-dom";
function Product(){
const dispatch = useDispatch();
const { card , loading ,error ,} = useSelector((state)=> state.card);


const params = useParams()

    useEffect(()=>{
        dispatch(PostLoading(true))
        axios.get(`${process.env.REACT_APP_API}/${params.productId}`)
            .then((res) => {
                dispatch(PostSucces(res.data))
            })
            .catch((error) => {
                dispatch(PostError(error))
            })
            .finally(() => {
                dispatch(PostLoading(false))
            })
    },[])

    if (error !== null) {
      return <p>Ups! ocurrió un error. Error: {error}</p>
    }
    return (
      <div className="main-container-card">
        {loading ? (
          <p>Loading...</p>
        ) 
        : 
        (
          <div key={card.id} className="container-card">
            <img src={card.image}></img>
            <h2>{card.title}</h2>
            <p className="description-card"><span>Description:</span> {card.description}</p>
            <p className="price-card">Price: ${card.price}</p>
          </div>


        )
        }
      </div>
    )

}

export default Product;