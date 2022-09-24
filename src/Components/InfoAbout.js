import { GoMarkGithub } from "react-icons/go";
import { MdEmail , MdDescription } from "react-icons/md";
import PropTypes from 'prop-types';

function Info({ name , email, description, img, github }){
    Info.propTypes = {
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        img:PropTypes.string.isRequired,
        github:PropTypes.string.isRequired
      };
    return(
        <div className="main-container-info-about">
            <div className="container-img-info-about">
                <img src={img} />
            </div>
            <div className="container-info-about">
                <h2>{name}</h2>
                <p><MdDescription /> {description}</p>
                <p><MdEmail/> {email}</p>
                <a href='https://github.com/jsEstebanjs' target='_blank' rel="noreferrer"><GoMarkGithub/> {github}</a>
            </div>
        </div>
    )
}

export default Info;