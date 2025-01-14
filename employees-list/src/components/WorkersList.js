import Worker from "./Worker";


const WorkersList = ({mansList}) => {
    return (   
        <ul className="catalogList">
        {mansList.map((man)=>{
            return <Worker 
                key={man.id} 
                photo = {man.photo}
                lastName = {man.lastName}
                firstName = {man.firstName}
                middleName = {man.middleName}
                department = {man.department}
                post = {man.post}
                id = {man.id}
                />;
        })} 

        </ul>
     );
}

export default WorkersList;