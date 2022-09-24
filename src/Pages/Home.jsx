import { useSelector , useDispatch } from 'react-redux';
import {useEffect} from 'react';
import { getCards } from '../Components/PeticionCardsHome';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';


function Home(){
  const { cards , loading ,error } = useSelector((state)=> state.homeCards);
  const dispatch = useDispatch();
    
  useEffect(() => {
    dispatch(getCards())
  }, []);

  if (error !== null) {
    return <p>Ups! ocurrió un error. Error: {error}</p>
  }
  return (
    <div className='main-container'>
      <h2>Products</h2>
    <div className='main-container-cards-home'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        cards.map((item) => {
          return (
            <div key={item.id} className='container-card' id={item.id}>
                <img src={item.image} alt={item.description}/>
                <h2>{item.title}</h2>
                <div className='container-goTodetails'>
                  <Countdown date={Date.now() + Math.floor(Math.random() * (100000 - 20000) + 20000)} onComplete={(e)=> {
                    const id = document.getElementById(item.id)
                    id.style.pointerEvents = 'none';
                  }}/>
                  <Link to={`product/${item.id}`} className={item.id}>Go To Detail</Link>
                </div>
            </div>
          )
        })
      )}
    </div>
    </div>
  )
}
export default Home;