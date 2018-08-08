import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';




let Pagination = ({total, start, end}) => {


let previous = (starting) => {
if (starting >= 20) {
    return <li className="page-item">
        <NavLink className="page-link" to={`${window.location.pathname.split("&from")[0]}&from=${starting-20}&to=${starting}`} aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </NavLink>
      </li>;
} else {
    return <li className="page-item disabled">
        <NavLink className="page-link" to={`/`} aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </NavLink>
      </li>;
}
}

    let next = (ending, amount) => {
        if (ending !== amount) {
            if (ending+ 20 >= amount) {
                return <li className="page-item">
                    <NavLink className="page-link" to={`${window.location.pathname.split("&from")[0]}&from=${ending}&to=${amount}`} aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </NavLink>
                  </li>;
            } else {
                return <li className="page-item">
                    <NavLink className="page-link" to={`${window.location.pathname.split("&from")[0]}&from=${ending}&to=${ending + 20}`} aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </NavLink>
                  </li>;
            }
        } else {
            return <li className="page-item disabled">
                <NavLink className="page-link" to="/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </NavLink>
              </li>;
        }
    }

    let previousnumber = (pageNumber) => {
        if (pageNumber > 0) {
return (
                <li className="page-item">
                    <NavLink className="page-link" to={`${window.location.pathname.split("&from")[0]}&from=${20 * (pageNumber - 1)}&to=${20 * pageNumber}`}>
                        {pageNumber}
                    </NavLink>
                </li>     
)       
        }
    }
    let nextnumber = (pageNumber, theend) => {
        let lastpage = Math.floor(theend/20)
        if (pageNumber <= lastpage) {
            return <li className="page-item">
                <NavLink className="page-link" to={`${window.location.pathname.split("&from")[0]}&from=${20 * (pageNumber - 1)}&to=${20 * pageNumber}`}>
                  {pageNumber}
                </NavLink>
              </li>;
        }
    }

    let currentpage = (starting, ending) => {
        let pagenumber = Math.floor(starting / 20) + 1

        return(
            <React.Fragment>
            {previousnumber((pagenumber - 2))}    
            {previousnumber((pagenumber - 1))}
            <li className="page-item active disabled"><NavLink className="page-link" to={`${window.location.pathname}`}>{pagenumber}</NavLink></li>
            {nextnumber((pagenumber + 1), ending)}
            {nextnumber((pagenumber + 2), ending)}
            </React.Fragment>
        )
        }

if(total) {
    currentpage(start)
    return <React.Fragment>
        <nav aria-label="Page navigation example text-center">
          <ul className="pagination">
            {previous(start)}
            {currentpage(start, total)}
            {next(end, total)}
          </ul>
        </nav>
      </React.Fragment>;
}
};
export default Pagination;