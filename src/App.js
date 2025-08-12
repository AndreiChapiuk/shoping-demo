import React from "react"
import Items from "./components/Items"
import Header from  "./components/Header"
import Footer from  "./components/Footer"



class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      duplicate:[1],
      orders: [],
      items: [
        {
          id:'1',
          title:'Семаглутид 2 мг',
          img:'Semaglutid_2.png',
          description:'description peptide one',
          category:'category peptide one',
          price:'100500'

        },
           {
          id:'2',
          title:'Семаглутид 5 мг',
          img:'Semaglutid_5.png',
          description:'description peptide 2',
          category:'category peptide 2',
          price:'100500'

        },
           {
          id:'3',
          title:'Тірзепатид 5 мг',
          img:'Tírzepatid_5.png',
          description:'description peptide 3',
          category:'category peptide 3',
          price:'100500'

        },
           {
          id:'4',
          title:'Тірзепатид 10 мг',
          img:'Tírzepatid_10.png',
          description:'description peptide 4',
          category:'category peptide 4',
          price:'100500'

        },       {
          id:'5',
          title:'Тірзепатид 15 мг',
          img:'Tírzepatid_15.png',
          description:'description peptide 5',
          category:'category peptide 5',
          price:'100500'

        }


      ]

    }
this.addToOrder= this.addToOrder.bind(this)
this.deleteOrder= this.deleteOrder.bind(this)
this.duplicateOrder= this.duplicateOrder.bind(this)
this.duplicate = this.state.duplicate
  }
  render() { 
  return (
  <div className='wrapper'>
    <Header orders= {this.state.orders} onDelete= {this.deleteOrder} onDuplicate= {this.duplicateOrder } />
    <Items items={this.state.items} onAdd = {this.addToOrder} duplicate= {this.state.duplicate} />
    <Footer />
  </div>
  )
}

deleteOrder(id){
this.setState({orders:this.state.orders.filter(el=>el.id !== id )})
}


duplicateOrder(item){
  this.state.orders.forEach(el =>{
    if (el.id === item ) {
   let element = document.getElementById(item)  
   element.innerHTML =  Number(element.innerHTML)+1;

    }
  })
}

 addToOrder(item) {
  let isInArray = false;
  this.state.orders.forEach(el =>{
    if (el.id === item.id ) {
      isInArray = true
    }
  })
if (!isInArray){
   this.setState({orders:[...this.state.orders,item]})    
    }
 }
}

export default App;
