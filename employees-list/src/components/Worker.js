const Worker = (props) => {
    return ( 
        <div className="worker">
            <img src="https://placeholder.apptor.studio/80/80/RAND.png" alt="worker avatar" />
            <span className="fullName">
                <span className="surname"> {props.lastName}</span>
                <span className="name"> {props.firstName} </span>
                <span className="fatherName">{props.middleName}</span>
            </span>
            <span className="department"> {props.department} </span>
            <span className="post">{props.post}</span>
        </div>
     );
}

export default Worker;