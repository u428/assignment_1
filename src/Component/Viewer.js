import React, { Component } from 'react'

export default class Viewer extends Component {

    state={
        object:[]
    }

    componentWillMount(){
        console.log(this.props.location.state);
        this.setState({
            object:this.props.location.state
        })
  
}
    render() {
        const {object} =this.state.object
        return (
            <div className="container">
                <img className="card-img-top" src={`https://farm${this.state.object.farm}.staticflickr.com/${this.state.object.server}/${this.state.object.id}_${this.state.object.secret}_q.jpg`} alt="Card image" height='500px' />

                <h2>{this.state.object.id}</h2>
                <p>{this.state.object.title}</p>
            </div>
        )
    }
}
