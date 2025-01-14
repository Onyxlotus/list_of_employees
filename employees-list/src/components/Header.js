import {useState, useEffect} from "react"

import MansList from "./MansList.json"
// import Pagination from "./Pagination";
import WorkersList from "./WorkersList";

const filterMans=(searchText, listOfMans) => {
    if (!searchText){
        return listOfMans;
    }
    return listOfMans.filter(({firstName, lastName, middleName}) => 
        {
            return (firstName.toLowerCase().includes(searchText.toLowerCase()) ||
            lastName.toLowerCase().includes(searchText.toLowerCase()) ||
            middleName.toLowerCase().includes(searchText.toLowerCase()))
        });
}

function Header() {

    /* pagination
    
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postPerPage, setPostPerPage] = useState(5);

    // const lastPostIndex = currentPage * postPerPage;
    // const firstPostIndex = lastPostIndex - postPerPage;
    // const currentPost = MansList.slice(firstPostIndex, lastPostIndex);

    */


    const [workerList, setWorkerList] = useState(MansList);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredMans = filterMans(searchTerm, MansList);
            setWorkerList(filteredMans);
        }, 300);

        return () => clearTimeout(Debounce);
    }, [searchTerm]);

    return ( 
        <>
         <header>
            <input 
                placeholder="Введите имя/фамилию/отчество: "
                autoFocus
                type="text" 
                autoComplete="off"
                onChange={(e) => setSearchTerm(e.target.value)}
             />
        </header>
        <WorkersList mansList ={workerList} />
        {/* <Pagination totalPost={MansList.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} />        */}
        </>

     );
}

export default Header;