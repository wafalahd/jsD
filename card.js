var NbCamera=0;
var totalCost=0;
var NbMicro=0;
var NbScanner=0;
var NbCasque=0

function addCamera(){
    NbCamera++;
    totalCost=totalCost+1000;
    document.getElementById("NbC").innerHTML=NbCamera;  
    document.getElementById("total").innerHTML=totalCost; 

}
function delateCamera(){
    NbCamera--;
    totalCost=totalCost-1000;
    document.getElementById("NbC").innerHTML=NbCamera;
    document.getElementById("total").innerHTML=totalCost;

}
function addMicro(){
    NbMicro++;
    totalCost=totalCost+150;
    document.getElementById("NbM").innerHTML=NbMicro;
    document.getElementById("total").innerHTML=totalCost;  

}
function delateMicro(){
    NbMicro--;
    totalCost=totalCost-150;
    document.getElementById("NbM").innerHTML=NbMicro;
    document.getElementById("total").innerHTML=totalCost; 
    
}
function addScanner(){
    NbScanner++;
    totalCost=totalCost+300;
    document.getElementById("NbS").innerHTML=NbScanner;  
    document.getElementById("total").innerHTML=totalCost; 

}
function delateScanner(){
    NbScanner--;
    totalCost=totalCost-300;
    document.getElementById("NbS").innerHTML=NbScanner;
    document.getElementById("total").innerHTML=totalCost; 
    
}
function addCasque(){
    NbCasque++;
    totalCost=totalCost+50;
    document.getElementById("NbCq").innerHTML=NbCasque;
    document.getElementById("total").innerHTML=totalCost;  

}
function delateCasque(){
    NbCasque--;
    totalCost=totalCost-50;
    document.getElementById("NbCq").innerHTML=NbCasque;
    document.getElementById("total").innerHTML=totalCost; 
    
}