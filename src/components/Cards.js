import React from 'react'
import CardItem from './CardItem'
import pic2 from '../Images/pic2.jpg'
import pic10 from '../Images/pic10.jpg'
import pic6 from '../Images/pic6.jpg'
import pic8 from '../Images/pic8.jpg'
import pic7 from '../Images/pic7.jpg'
import './Cards.css'

function Cards(){
    return(
       <div className="cards">
           <h1>Check out these EPIC Desserts</h1>
           <div className="cards__container">
               <div className="cards__wrapper">
                   <div className="cards__items">
                        <CardItem
                        src={pic2}
                        text="Explore our most amazing cakes"
                        label="Cakes"
                        path="/services"/>

                        <CardItem
                        src={pic6}
                        text="Explore our most amazing pastries"
                        label="Pastries"
                        path="/services"/>              
                   </div>

                   <div className="cards__items">
                        <CardItem
                        src={pic10}
                        text="Explore our most amazing pie"
                        label="Pies"
                        path="/services"/>
                        
                        <CardItem
                        src={pic8}
                        text="Explore our most amazing tiramisu"
                        label="Tiramisu"
                        path="/services"/>

                        <CardItem
                        src={pic7}
                        text="Explore our most amazing small cakes"
                        label="Small Cakes"
                        path="/services"/>
                   </div>
               </div>
           </div>
       </div> 
    )
}

export default Cards