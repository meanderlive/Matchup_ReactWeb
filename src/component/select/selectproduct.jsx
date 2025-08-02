import { Component } from "react";

class SelectProduct extends Component {
    render() { 
        const {select} = this.props;
        return (
            <select defaultValue={select}>
                <option value="Newest">Recent added</option>
                <option value="Popular">Popular</option>
                <option value="Old">Old</option>
                <option value="Recent">Recent</option>
            </select>
        );
    }
}
 
export default SelectProduct;