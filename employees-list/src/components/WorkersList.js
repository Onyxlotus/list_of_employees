import Worker from "./Worker";


const WorkersList = ({mansList}) => {
    return (   
        <ul className="catalog_list">
        {mansList.map((man)=>{
            return <Worker 
                key={man.id} 
                lastName = {man.lastName}
                firstName = {man.firstName}
                middleName = {man.middleName}
                department = {man.department}
                post = {man.post}
                />;
        })} 

    </ul>
     );
}

export default WorkersList;