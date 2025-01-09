import {useState} from "react"

import Header from "../components/Header";
import WorkersList from "../components/WorkersList";
import MansList from "./../components/MansList.json"
import Pagination from "../components/Pagination";

function MainPages() {

    const [currentPage, setCurrentPage] = useState(2);
    const [postPerPage, setPostPerPage] = useState(1);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPost = MansList.slice(firstPostIndex, lastPostIndex);

    return ( 
        <>
            <Header />
            <WorkersList mansList={currentPost} />
            <Pagination totalPosts={MansList.length} postsPerPage={postPerPage} />         
        </>

     );
}

export default MainPages;