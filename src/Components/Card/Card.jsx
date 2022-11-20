import React, {useState} from 'react'
import './Card.css'

const Card = () =>{
  const [index, setIndex]=useState(0)
  const [images] = useState([
    { img: 'https://www.myphone.kg/files/media/14/14579.png', color: 'black', text: 'black' },
    { img: 'https://www.myphone.kg/files/media/14/14584.png', color: 'white' ,  text: 'white'},
    { img: 'https://www.myphone.kg/files/media/14/14588.png', color: '#fd79a8',  text: 'pink' },
    { img: 'https://www.myphone.kg/files/media/14/14592.png', color: '#38ada9',  text: 'green' },
  ]);
  return (
    <div className='card'>
      <img src={images[index].img} alt="" />
      <div className="variant">
        {
          images.map((elem, i)=>{
            return(
              <>
              <span 
              className={index===i?"border":"span"} 
              style={{backgroundColor:elem.color, color:"orange"}} 
              onClick={()=>setIndex(i)}>{elem.text}</span>
              </>
            )
          })
        }
      </div>
    </div>
  )
}




//  const [index, setIndex]=useState(0)
//  const [images]=useState([
//    {img:'https://s0.rbk.ru/v6_top_pics/media/img/5/46/756038770746465.jpg', id:1},

//    {img:'https://s0.tchkcdn.com/g-49bK-ihki_h_sf4gLEKMHQ/17/261234/660x480/f/0/05d_2a99744_dyka_pryroda_bilka_ta_tulpan.jpg', id:2},

//    {img:'https://www.ixbt.com/img/n1/news/2021/4/2/04.05.jpg', id:3},

//    {img:'https://www.ztb.kz/media/imperavi/5f7d56b744a53.jpg', id:4},

//    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbBynxjnontzROCyMyzPCzbvd9RjIf6Pu2A&usqp=CAU.jpg', id:5},
//  ]);

//  console.log(images);
//  return (
//    <>
//    <div>
//      <img width="500px" src={images[index].img} alt="" />
//      <div>
//        {
//          images.map((elem, i)=> {
//            console.log(elem);
//            return (
//              <>
//              {/*<img width="100px" src={elem.img} alt="" />*/}
//            <button onClick={()=>setIndex(i)}>{elem.id}</button>
//              </>
//            )
//          }
//        )
//        }
//      </div>
//    </div>
//    </>
    
//  )
//}

export default Card;


