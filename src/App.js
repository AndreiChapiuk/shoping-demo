import React from "react"
import Items from "./components/Items"
import Header from  "./components/Header"
import Footer from  "./components/Footer"



class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
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
  }
  render() { 
  return (
  <div className='wrapper'>
    <Header orders= {this.state.orders} />
    <Items items={this.state.items} onAdd = {this.addToOrder} />
    <Footer />
  </div>
  )
}

 addToOrder(item) {
  this.setState({orders:[...this.state.orders,item]})
 }
}

export default App;
