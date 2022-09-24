import Info from "../Components/InfoAbout";
import foto from '../Images/foto.jpg'
function About(){

    return(
        <div className="main-container-about">
            <Info
              name='Esteban Carreño'
              email='juanestebancarrenocamelo@gmail.com'
              description='Mi nombre es Esteban, tengo 18 años actualmente vivo en Giron,Colombia y estudio Programacion Web en Make It Real'
              img={foto}
              github='jsEstebanjs'
            />
        </div>
    )
}
export default About;