import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash'
import {pageUpdated} from '../store/uI'
function Pagination({filt}) {
    const {perPage,pageNum} = useSelector(state=>state.ui)
    const dispatch = useDispatch()
    const num = Math.ceil(filt.length / perPage)
    const pages =  _.range(1,num+1)

    const clickHandler = page =>{
        dispatch(pageUpdated(page))
    }

    if(num === 1)return null

    return (
        <ul className="pagination">
          {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li> */}
         
        {
            pages.map(page=>(
                <li key={page} onClick={()=>clickHandler(page)} className={`page-item ${pageNum === page ? "active" : ""}`}><a className="page-link" href="#">{page}</a></li>
            ))
        }
          {/* <li class="page-item"><a class="page-link" href="#">Next</a></li> */}
        </ul>
      
    );
}

export default Pagination;