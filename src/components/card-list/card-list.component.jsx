import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({monsters}) => { //destructure directly
    <div className="card-list">
        {monsters.map((monster) => {
            return (
                <Card monster={monster} />   
            );        
        })}
    </div>
}

export default CardList; // allows other files to import code in this file