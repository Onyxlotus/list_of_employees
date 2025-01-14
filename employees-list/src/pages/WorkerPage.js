import { NavLink, useParams } from "react-router-dom";
import MansList from "./../components/MansList.json";





function WorkerPage() {
    const {id} = useParams();
    const man = MansList[id];

    const imgSrc = (source) => {
        if (source===""){
            return "https://placeholder.apptor.studio/200/300/RAND.png"
        }
        return man.photo
    }

    const fathername = (fathername) => {
        if (fathername===""){
            return (<span></span>)
        }
        return (<p className="fatherName">Отчество: {man.middleName}</p>)
    }

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

  
    let formattedDate = day + "-" + month + "-" + year;


    return ( 
        <div className="workerPage">
            <NavLink to="/">
            <button>
                <i class="bi bi-arrow-bar-left"></i>
            </button>
                
            </NavLink>
            <img src={imgSrc(man.photo)} alt=""/>
            <div className="textWorkerPage">
                <span className="fullName">
                    <p className="surname">Фамилия: {man.lastName}</p>
                    <p className="name">Имя: {man.firstName}</p>
                    {fathername(man.middleName)}
                </span>
                <p>Дата рождения: {formattedDate}</p>
                <p>Департамент: {man.department}</p>
                <p>Должность: {man.post}</p>                
            </div>

        </div>
     );
}

export default WorkerPage;