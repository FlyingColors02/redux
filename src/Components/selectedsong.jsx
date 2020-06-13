import React from "react";
import {connect} from "react-redux";
const SelectedSong = (props)=>{
    if(!props.SelectedSong){return<h1 style={{color:"red",marginLeft:"200px",marginTop:"50px"}}>select a song!!</h1>}
    return(
        <div className="container" style={{marginTop:"50px"}}>
            <div className="row" >
                <div className="col-md-12">
                    <div className="card text-left" key={props.SelectedSong.id}>
                    <div className="row">
                        <div className="col-md-7">
                        <div className="card-body">
                            <h3 className="card-title">{props.SelectedSong.name}</h3>
                            <p className="card-text">{props.SelectedSong.singer}</p>
                            <span>{props.SelectedSong.duration}</span>
                      </div>
                        </div>
                        <div className="col-md-4">
                        <img className="card-img-right" src={`https://i.pravatar.cc/150?img=${props.SelectedSong.id}`} style={{height:"250px", width:"250px",margin:"10px"}} alt=""/>
                        </div>
                    </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {SelectedSong:state.SelectedSong}
}
export default connect(mapStateToProps,{})(SelectedSong);