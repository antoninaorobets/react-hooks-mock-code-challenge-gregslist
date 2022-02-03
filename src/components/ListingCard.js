import React,{useState} from "react";

function ListingCard({item,deleteListing}) {
  const [favorite,setFavorite]=useState(false)

  const handleDelete = (event) => {
    deleteListing(item.id)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={()=>setFavorite(!favorite)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=>setFavorite(!favorite)}>☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
