import { Component } from "react";

class Pagination extends Component {
    render() { 
        return (
            <ul className="default-pagination lab-ul " disabled>
                <li>
                    <a href="#" disabled><i className="icofont-rounded-left "></i></a>
                </li>
                <li>
                    <a href="# "  className="active">01</a>
                </li>
                {/* <li>
                    <a href="# disabled"  >02</a>
                </li>
                <li>
                    <a href="# disabled" >03</a>
                </li> */}
                <li>
                    <a href="# disabled"><i className="icofont-rounded-right"></i></a>
                </li>
            </ul>
        );
    }
}
 
export default Pagination;