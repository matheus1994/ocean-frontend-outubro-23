import './Card.css'

export default function Card(props){

    //console.log(props);
    const item = props.item;
    //console.log(item);

    return(
        <div className="card">
           <h2>{item.nomw}</h2>
           <img src={item.imagemUrl}/>
        </div>
    )
}