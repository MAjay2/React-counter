import React,{useState, Component} from "react"



export default class Counter extends Component {
constructor()
{
    super()
    this.state={
        data:0
    }
}
     increment(){
        this.setState({data:this.state.data+5})
     }

     decrement(){
        this.setState({data:this.state.data-5})
     }

     reset(){
        this.setState({data:this.state.data=0})
     }



render()
    {
    return (
     
      <div className="text-center w-96 h-96 m-auto mt-5 ">
      <h1 className="text-4xl mt-5">Simple Counter App</h1>
      <div className="mt-5 bg-slate-900 text-white p-5 w-54 m-auto ">
          <h3>Counter - {this.state.data}</h3>
      </div>
      <button onClick={()=>this.reset()} className="mt-5 bg-white border mr-3 p-2 px-4 rounded h-10">Reset</button>
      <button onClick={()=>this.increment()} className="bg-white border mr-3 p-2 px-4 rounded h-10">Increment</button>
      <button onClick={()=>this.decrement()} className="bg-white border mr-3 p-2 px-4 rounded h-10">Decrement</button>

   
  </div>
    )
  }
}

