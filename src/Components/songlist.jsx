import React, { Component } from "react";
import {connect} from "react-redux";
import Song from "../Action/index";
class SongList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {
                            this.props.list.map(data=>(
                                <div className="col-md-12" key ={data.id} style={{margin:"10px"}}>
                                    <div className="card text-left">
                                        <div className="row">
                                        
                                      <div className="col-md-5">
                                      <div className="card-body">
                                        <h4 className="card-title">{data.name}</h4>
                                            <p className="card-text">{data.singer}</p><span>
                                                {data.duration}</span>
                                      </div>
                                      </div>
                                      <div className="col-md-3">
                                        <img className="card-img-right" src={`https://i.pravatar.cc/150?img=${data.id}`} style={{height:"180px", width:"180px",margin:"10px"}} alt=""/>
                                    </div>
                                      
                                        </div>
                                      
                                      
                                      <button type="button" style={{alignSelf:"center", marginBottom:"10px"}} className="btn btn-outline-primary col-md-5"
                                      onClick={()=>this.props.Song(data)}>Select Song</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

const mapStateToProps=(state)=>{
    console.log(state);   
    return {list:state.list};                                              
}
export default connect(mapStateToProps,{Song})(SongList);