import React,{useState, useEffect} from "react";
 import ListingCard from "./ListingCard";
 import CreateItem from "./CreateItem";

function ListingsContainer({filterParam}) {
  const [goods,setGoods] = useState([])
  useEffect(()=>{
    fetch("http://localhost:6001/listings").
    then(resp=>resp.json())
    .then(data=>setGoods(data))
  },[])

  const deleteListing = (id)  => {
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE"
    }).catch(error=>console.error(error))

    const filteredList = goods.filter((item)=> item.id !== id)
    setGoods(filteredList)
  }

  let listToDisplay = goods.filter(item=>item.description.toLowerCase().includes(filterParam.toLowerCase()))

  const sortList = ()=> {
    setGoods(listToDisplay.sort((a,b)=> {
      if (a.description < b.description) {  return -1;  }
      if (a.description > b.description) {  return 1;  }   
      }))
  }

  const addListing = (newItem)=>{
    console.log(newItem)
   // setGoods([...goods,newItem])
  }

  return (
    <main>
      <CreateItem onSubmit={addListing}/>
      <button onClick={sortList}>Sort A-Z</button>
      <ul className="cards">
        {listToDisplay.map(item=> <ListingCard key={item.id} item={item} deleteListing={deleteListing}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
