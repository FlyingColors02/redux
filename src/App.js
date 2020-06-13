import React,{Component} from "react";
import SongList from "./Components/songlist";
import SelectedSong from "./Components/selectedsong";

class App extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-md-5">
                    <SongList/>
                    </div>
                    <div className="col-md-7">
                    <SelectedSong/>
                    </div>
                </div>
            
            
            </React.Fragment>
            
        )
    }
}
export default App;