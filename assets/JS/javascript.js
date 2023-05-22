window.addEventListener('DOMContentLoaded', function () {
    initialize();
    setInterval(Update, 1);
});


let toggleXkey;
let toggleCkey;
let toggleVkey;
let onePress;

let elementsA;

let overviewDraw;
let columnNow;

let overViewportSize;
let textViewportSize;

function initialize() {

    //Keys Listener
    toggleXkey = true;
    toggleCkey = true;
    toggleVkey = true;
    onePress = true;

    //Empty Links with #
    elementsA = document.querySelectorAll('a');

    //bootstrap overview
    overviewDraw = $("<div class='divOverDraw'></div>").appendTo("body");
    for (let i = 0; i < 12; i++) {
        columnNow = $("<div class='divOverColumn'></div>").appendTo(overviewDraw);
        columnNow.css("left", "0%");
    }

    //Viewport Size
    overViewportSize = $("<div class='divOverViewportsize'></div>").appendTo("body");
    overViewportSize.css("display", "none");
}

function Update() {

    overViewportSize.text("X= " + window.innerWidth + "px Y= " + window.innerHeight + "px");

    //KEYS LISTENER
            $(document).keypress(function (event) {
                if (event.code === "Numpad1" && onePress == true) {
                    onePress = false;
                    overLineForUnlinked(toggleXkey = !toggleXkey);
                }
                else if (event.code === "Numpad2" && onePress == true) {
                    onePress = false;
                    columnsDrawer(toggleCkey = !toggleCkey);
                }
                else if (event.code === "Numpad3" && onePress == true) {
                    onePress = false;
                    viewportSizeViewer(toggleVkey = !toggleVkey);
                }
            });
        
    onePress = true;
}


/*            >>>>>>     UNLIKED OVERLINER     <<<<<<<        */
//      THIS FUNCTION CREATE A LINE TROUGTH DE TEXT OF A LINK
//          ONLY IF THIS LINK HREF ATTRIBUT SET AS #
function overLineForUnlinked(boolTog) {
    if (boolTog) {
        boolTog = !boolTog;
        elementsA.forEach(function (linker) {

            //IF HREF ATTRIBUT OF A LINK AS THE SAME AS "#"
            if (linker.getAttribute("href") == "#") {

                //STYLE AN OVERLINE ON THE LINK
                linker.style.textDecoration = "underline";
                linker.style.color = "blue";
            }
        });
    } else if (!boolTog) {
        boolTog = !boolTog;
        elementsA.forEach(function (linker) {

            //IF HREF ATTRIBUT OF A LINK AS THE SAME AS "#"
            if (linker.getAttribute("href") == "#") {

                //STYLE AN OVERLINE ON THE LINK
                linker.style.textDecoration = "line-through";
                linker.style.color = "red";
            }
        });
    }
}


function viewportSizeViewer(boolTog) {
    if (boolTog) {
        boolTog = !boolTog;
        overViewportSize.css("display", "none");
    } else if (!boolTog) {
        boolTog = !boolTog;
        overViewportSize.css("display", "flex");
    }
}



function columnsDrawer(boolTog) {
    if (boolTog) {
        boolTog = !boolTog;
        overviewDraw.css("display", "none");
    } else if (!boolTog) {
        boolTog = !boolTog;
        overviewDraw.css("display", "flex");
    }
}