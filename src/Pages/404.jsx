import image404 from '../Images/404.png';

function NotFound(){

    return(
        <div className='main-container-404'>
            <h2>!Ops there is nothing here¡</h2>
            <img src={image404} alt="Not Found" />
        </div>
    )
}

export default NotFound;