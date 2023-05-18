
//import * as dayjs from 'dayjs'

window.addEventListener('DOMContentLoaded', function(){
    setInterval(callToolsListeners, 1);
});



let isInit = false;
let toggleXkey = true;
let toggleCkey = true;
let toggleVkey = true;
let onePress = true;

function callToolsListeners(){

    if(!isInit){
        
        isInit = true;
    }else if(isInit){
        
        $(document).keyup(function(event){
            
            if(event.key === "x" && onePress == true){
                onePress = false;
                overLineEmptyLinks(toggleXkey =! toggleXkey);
            }
            else if(event.key === "c" && onePress == true){
                onePress = false;
                columsDrawer(toggleCkey =! toggleCkey);
            }
            else if(event.key === "v" && onePress == true){
                onePress = false;
                viewportSizeViewer(toggleVkey =! toggleVkey);
            }
            
        })
        onePress = true;
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

let initColumnsDrawer = true;
let overviewDraw;
let columnNow;

function columnsDrawer(boolTog) {
  if (initColumnsDrawer) {
    initColumnsDrawer = false;
    overviewDraw = $("<div class='divOverDraw'></div>").appendTo("body");

    for (let i = 0; i < 12; i++) {
        columnNow = $("<div class='divOverColumn'></div>").appendTo(overviewDraw);
        columnNow.css({"left": i*100/12 + "%"});
      }
  }

  if (boolTog) {
    boolTog = !boolTog;
  } else if (!boolTog) {
    boolTog = !boolTog;
  }
}