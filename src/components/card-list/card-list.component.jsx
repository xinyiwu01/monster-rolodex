import { Component } from "react";
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
    render () {
        //return only one top level component,no siblings, can nest
        //console.log(this.props);
        const {monsters} = this.props; //destructure

        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    return (
                        <Card monster={monster} />   
                    );        
                })}
            </div>
        );
    }

}

export default CardList; // allows other files to import code in this file