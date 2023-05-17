
//import * as dayjs from 'dayjs'

window.addEventListener('DOMContentLoaded', function(){
    
});



let isInit = false;
let toggleXkey = true;
let toggleCkey = true;
let toggleVkey = true;

function callToolsListeners(){

    if(!isInit){

        isInit = true;
    }else if(isInit){

        $(document).keypress(function(event){
            
            if(event.code === "keyX"){
                overLineEmptyLinks(toggleXkey =! toggleXkey);
            }
            else if(event.code === "keyC"){
                columsDrawer(toggleCkey =! toggleCkey);
            }
            else if(event.code === "keyV"){
                viewportSizeViewer(toggleVkey =! toggleVkey);
            }
        })
    }
}

function overLineEmptyLinks(boolTog){
    if(boolTog){
        
    }else if(!boolTog){

    }
}

function viewportSizeViewer(boolTog){
    if(boolTog){

    }else if(!boolTog){

    }
}

function columsDrawer(boolTog){
    if(boolTog){

    }else if(!boolTog){

    }
}

