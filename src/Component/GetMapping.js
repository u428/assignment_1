import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getData} from './APIHelper';


class GetMapping extends Component{

        state = {
            photos: [],
            search:'',
            types:'Animal',
            activePage:1,
            itemCounterPage: 0,
            totalItemsCount: 0,
            pageRangedDisplayed: 12
        }

    componentWillMount(){
       this.getProduct()
    }

    getProduct= ()=>{
        getData(this.state.activePage, this.state.pageRangedDisplayed, this.state.types).then(res =>{
            this.setState({
                itemCounterPage: res.data.photos.pages,
                totalItemCount: res.data.photos.total,
                photos:res.data.photos.photo,
            })
        })
    }
    

    updateSeach =(e)=>{
        this.setState({search: e.target.value.substr(0,10)});
    }
    updateSeachType =(e)=>{
        this.setState({types: e.target.value.substr(0,10)});
    }

    handlePageChange =()=>{
        let count= this.state.activePage+1;
        this.setState({
            activePage: count
        });
        this.getProduct();
    }  
    handlePageChanger=()=>{
        if (this.state.activePage>1) {
        let count= this.state.activePage-1;
        this.setState({
            activePage: count
        });
        this.getProduct();
        }
    }

    render(){
        const photoFilter = this.state.photos.filter( photo =>{
            return photo.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        })
        return(
            
            <div className="container">
                <div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" style={{height: '38px'}} type="button" onClick={this.getProduct}>Fint it</button>
                        </div>
                        <input className="form-control mb-1" type="test" name="find other types" value={this.state.types} onChange={this.updateSeachType} placeholder="Searching for finding other types" />
                        <input className="form-control mb-3" type="test" name="search" value={this.state.search} onChange={this.updateSeach} placeholder="Searching only title" />
                    </div>
                        {
                            photoFilter.map(
                                data => {
                                    return(
                                    <div className="container" style={{display: 'inline-block', width: '340px', marginLeft: '5px', marginBottom: '3px'}}>
                                        <div className="card" style={{width: "300px", height: '420px'}}>
                                            <img className="card-img-top" src={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_q.jpg`} alt="Card image" height="200px" />
                                            <div className="card-body">
                                                <h4 className="card-title">ID: {data.id}</h4>
                                                <p className="card-text">Title: {data.title}</p>
                                                <Link className="btn btn-primary stretched-link" to={{pathname:"/viewer", state: data}} >See profil</Link>
                                            </div>
                                        </div>
                                    </div>
                                    )
                            })
                        }
<div>
  <ul className="pagination">
    <li className="page-item"><button className="page-link" onClick={this.handlePageChanger}> Previous</button></li>
    <li className="page-link">{this.state.activePage}</li>
    <li className="page-item"><button className="page-link" onClick={this.handlePageChange}>Next</button></li>
  </ul>
</div>
                </div>
            </div>
        )
    }

}

export default GetMapping;