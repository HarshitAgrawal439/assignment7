var index=0;
function changecolor(){
    var colors=["red","blue","orange","purple","violet","yellow","green"]
    document.getElementsByTagName("body")[0].style.background=colors[index++];
    if(index>colors.length -1)
    index=0;
}