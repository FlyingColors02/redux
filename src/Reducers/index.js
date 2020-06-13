import {combineReducers} from "redux";
//SONG LIST --->By Default on Page---->Song List Component

const SongLists=()=>{
    return[{
        id:1,
        name:"See You Again",
        singer:"Wiz Knalifa",
        duration:"4:30"
    },
    {
        id:2,
        name:"Sorry",
        singer:"Justin Bieber",
        duration:"3:30"
    },
    {
        id:3,
        name:"Uptown Funk",
        singer:"Bruno Mars",
        duration:"4:30"
    },
    {
        id:4,
        name:"Shake it off",
        singer:"Taylor Swift",
        duration:"4:30"
    },
    {
        id:5,
        name:"Love me like you do",
        singer:"Taylor Swift",
        duration:"3:30"
    }];
}

const SelectedSongList =(state=null,action)=>{
    switch(action.type){
        case "SONG_LIST":
            return action.payload
        default: 
        return state

    }
}

const store=combineReducers({
    list:SongLists,
    SelectedSong:SelectedSongList
});
export default store;