import { NavLink } from "react-router-dom";

const Worker = (props) => {

    const imgSrc = (source) => {
        if (source===""){
            return "https://placeholder.apptor.studio/80/80/RAND.png"
        }
        return props.photo
    }

    return ( 
        <NavLink to={`/worker/${props.id}`}>
            <div className="worker">
                <img src={imgSrc(props.photo)} alt="worker avatar" width="80px" height="80px" />
                <span className="fullName">
                    <span className="surname"> {props.lastName}</span>
                    <span className="name"> {props.firstName} </span>
                    <span className="fatherName">{props.middleName}</span>
                </span>
                <span className="department"> {props.department} </span>
                <span className="post">{props.post}</span>
            </div>            
        </NavLink>

     );
}

export default Worker;