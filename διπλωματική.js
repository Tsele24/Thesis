"use strict";

var rows = [[]];
    rows[0][0]="Date";
    rows[0][1]="Kit";
    rows[0][2]="Manufacturer";
    rows[0][3]="#Tubes";
    rows[0][4]="Solid Waste (kBq)";
    rows[0][5]="Liquid Waste (kBq)";
    rows[0][6]="Solid+Liquid(kBq)";
    rows[0][7]="Date";
    rows[0][8]="Sum Solid Waste (kBq)";
    rows[0][9]="Sum Liquid Waste (kBq)";
    rows[0][10]="Total Waste (kBq)";
var dates=[];
var Swaste=[];
var Lwaste=[];
var SwasteSum=[];
var LwasteSum=[];
var Total_waste=[];
var alldates=[];
var alldatessort=[]
var Sum_When_delete=0;
var RoWs = [[[]]];
var Roows=[];
var SS=[[]];
var SL=[[]];


function ClearSolidAndLiquidWaste(){
    document.getElementById("sol_waste").innerHTML="";
    document.getElementById("liq_waste").innerHTML="";
    document.getElementById("tubes").value=0;
}
function Refresh(){
    location.reload();
}

function EnManu(){
    document.getElementById("manu").disabled=false;
    if(document.getElementById("kit").value=="Other"){
        document.getElementById("ukit").disabled=false;
        
    }
    else
    {
        document.getElementById("ukit").disabled=true;
    }
    
}


function Checkbox1(){
    if(document.getElementById("nominal").checked==true){
        document.getElementById("tTracer").disabled=false;
        document.getElementById("tVolTracer").disabled=false;
        document.getElementById("VolPerTube").disabled=false;
        document.getElementById("theoRadPerTube").disabled=false;
        document.getElementById("theoCpmPerTube").disabled=false;
        document.getElementById("my_cpm").checked=false;
        document.getElementById("measCpmPerTube").disabled=true;
        document.getElementById("myTotal").disabled=true;
        document.getElementById("measRadPerTube").disabled=true;
    }
    
   
}
function Checkbox2(){
    if(document.getElementById("my_cpm").checked==true){
        document.getElementById("nominal").checked=false;
        document.getElementById("tTracer").disabled=true;
        document.getElementById("tVolTracer").disabled=true;
        document.getElementById("VolPerTube").disabled=true;
        document.getElementById("theoRadPerTube").disabled=true;
        document.getElementById("theoCpmPerTube").disabled=true;
        document.getElementById("measCpmPerTube").disabled=false;
        document.getElementById("myTotal").disabled=true;
        document.getElementById("measRadPerTube").disabled=false;
        console.log(777);
        
    }

}

function Calcs() {

    if(document.getElementById("tubes").value==0){
        alert("Γράψε έναν μη μηδενικό αριθμό σωληναρίων!");
        return
    }
    if(document.getElementById("date").value==""){
        alert("Επίλεξε μία ημερομηνία!");
        return
    }
    if(document.getElementById("nominal").checked==false && document.getElementById("my_cpm").checked==false){
        alert("Διάλεξε έναν από τους δύο τρόπους υπολογισμού!");
        return
    }

   if(document.getElementById("nominal").checked==true){
    let tubes=document.getElementById("tubes").value;
    tubes=parseFloat(tubes);
    let theoRadPerTube=document.getElementById("theoRadPerTube").value;
    theoRadPerTube=parseFloat(theoRadPerTube);
    let perSol=document.getElementById("perSol").value;
    perSol=parseFloat(perSol);
    perSol=perSol/100;
    let perLiq=document.getElementById("perLiq").value;
    perLiq=parseFloat(perLiq);
    perLiq=perLiq/100;
    let sol_waste=tubes*theoRadPerTube*perSol;
    let liq_waste=tubes*theoRadPerTube*perLiq;
    document.getElementById("sol_waste").value=sol_waste.toFixed(2);
    document.getElementById("liq_waste").value=liq_waste.toFixed(2);

  }
  
  else {
      let tubes=document.getElementById("tubes").value;
      let measRadPerTube=document.getElementById("measRadPerTube").value;
      let perSol=document.getElementById("perSol").value;
      let perLiq=document.getElementById("perLiq").value;
      tubes=parseFloat(tubes);
      measRadPerTube=parseFloat(measRadPerTube);
      perSol=parseFloat(perSol)/100;
      perLiq=parseFloat(perLiq)/100;
      let sol_waste=tubes*measRadPerTube*perSol;
      let liq_waste=tubes*measRadPerTube*perLiq;
      console.log(tubes)
      console.log(measRadPerTube)
      console.log(perLiq)
      console.log(liq_waste)
      document.getElementById("sol_waste").value=sol_waste.toFixed(2);
      document.getElementById("liq_waste").value=liq_waste.toFixed(2);
 
  }

    if(rows.length==3){
        rows.pop();
        console.log(555)
       
    }
    else if(rows.length>3){
        let sum_remove=rows[dates.length+1].slice(0,7);
        rows[dates.length+1]=sum_remove;
        rows.pop();
        console.log(666)
    }
    rows.push([]);
    rows[rows.length-1][0]=new Date(document.getElementById("date").value).toDateString();
    if(document.getElementById("ukit").disabled==false){
        rows[rows.length-1][1]=document.getElementById("ukit").value;
    }
    else{
        rows[rows.length-1][1]=document.getElementById("kit").value;
    }
    if(document.getElementById("umanu").disabled==false){
        rows[rows.length-1][2]=document.getElementById("umanu").value;
    }
    else {
        rows[rows.length-1][2]=document.getElementById("manu").value;
    }
    rows[rows.length-1][3]=document.getElementById("tubes").value;
    rows[rows.length-1][4]=document.getElementById("sol_waste").value;
    rows[rows.length-1][5]=document.getElementById("liq_waste").value;
   
    console.log(rows)
   
    for(let i=0;i<rows.length-1;i++){
        RoWs.push([]);
        for(let j=0;j<6;j++){
        RoWs[i][j]=rows[i+1][j];
        }
        
    }
    RoWs=RoWs.filter(function(element){
        return element!="";
    }) 
    console.log(RoWs)

    
     if(RoWs.length>1){
     
    let sortByDate = RoWs => {       // κανει τις καταχωρησεις κατα ημερομηνια κατα αυξουσα σειρα
        let sorter = (a, b) => {
           return new Date(a[0]) - new Date(b[0]);
        };
        RoWs.sort(sorter);
     };
     sortByDate(RoWs);
     for(var i=1;i<rows.length;i++){
        for(var j=0;j<6;j++){
        rows[i][j]=RoWs[i-1][j];//i-1
        }
     }
     }
     console.log(RoWs)
    console.log(rows)
    for(var i=1;i<rows.length;i++){
        alldates[i-1]=rows[i][0]
    }
    console.log(alldates)
   
    dates=alldates.filter((v, i, a) => a.indexOf(v) === i);   //αφαίρεση των όμοιων τιμών
    console.log(alldates)
    console.log(dates)
    
for(var i=0;i<dates.length;i++){
  Roows[i] = RoWs.filter(function(x){
      return x[0]==dates[i];
  }) }
  console.log(Roows)
  console.log(Roows[0][0])
  console.log(Roows[0])
 SS=[[]]
 SS.push([])
 SL=[[]]
 SL.push([])
 for(var i=0;i<dates.length;i++){
    for(var j=0;j<Roows[i].length;j++){
        SS[i].push(parseFloat(Roows[i][j][4]))
        SL[i].push(parseFloat(Roows[i][j][5]))
        SS.push([])
        SL.push([])
    }
 }
 console.log(SS)
 console.log(SL)
 if(rows[1].length>6){
     for(var i=0;i<dates.length;i++){
         rows[i+1].splice(6,5);
     }
 }

 for(var i=0;i<dates.length;i++){
     rows[i+1].push("")
     rows[i+1].push(dates[i])
     rows[i+1].push(SS[i].reduce((a,b)=>a+b,0).toFixed(2).toString())
     rows[i+1].push(SL[i].reduce((a,b)=>a+b,0).toFixed(2).toString())
     Sum_When_delete=SS[i].reduce((a,b)=>a+b,0)+SL[i].reduce((a,b)=>a+b,0)
     rows[i+1].push(Sum_When_delete.toFixed(2).toString())
     
 }
 
 console.log(rows)
console.log(RoWs);
let Allsolidwastes=[];
let AllLiquidwastes=[];
let AllWastes=0;
Allsolidwastes=RoWs.map(d => parseFloat(d[4]));// επιλέγω από έναν πίνακα 2d μία στήλη την οποία αθροίζω μετά
AllLiquidwastes=RoWs.map(d => parseFloat(d[5]))// επιλέγω από έναν πίνακα 2d μία στήλη την οποία αθροίζω μετά
 
 Allsolidwastes=Allsolidwastes.reduce((a,b)=>a+b,0).toFixed(2);
 AllLiquidwastes=AllLiquidwastes.reduce((a,b)=>a+b,0).toFixed(2);
 console.log(Allsolidwastes);
 console.log(AllLiquidwastes);
 Allsolidwastes=parseFloat(Allsolidwastes);
 AllLiquidwastes=parseFloat(AllLiquidwastes);
 AllWastes=Allsolidwastes+AllLiquidwastes;
rows.push(["Total Waste(kBq)","","","",Allsolidwastes.toFixed(2).toString(),AllLiquidwastes.toFixed(2).toString(),AllWastes.toFixed(2).toString()])
 console.log(rows)
 console.log(dates);
 let overall=rows[rows.length-1].slice(4,7);
 overall.unshift("Total Waste(kBq)");

 let last_row=rows[dates.length+1].concat(overall);
 rows[dates.length+1]=last_row;
 console.log(rows);
 if(rows[dates.length+1].length!=11){
    console.log(rows)
     if(rows[dates.length+1].length>11){
        rows[dates.length+1].splice(7,1)
        console.log(rows)
     }
     else if(rows[dates.length+1].length<11){
        rows[dates.length+1].splice(6,0,"");
        console.log(rows[dates.length+1])
        console.log(rows)
     }
 }
 var table1=document.getElementById("csv_table");
 if(table1.rows.length>1){
    while (table1.rows.length > 1) {
        table1.deleteRow(1);
      }
 }
 console.log(rows)
 for(var i=1;i<rows.length-1;i++){
     var Row=table1.insertRow(i);
     
     for(var j=0;j<6;j++){

    
         Row.insertCell(j).innerHTML=rows[i][j];
        
     }
     
     Row.insertCell(6).innerHTML="<button id=del onclick=Delete(this) ><img src=x-512.png style=width:20px;height:20px; > </button>";
     
  }
  Row=table1.insertRow(rows.length-1);
  for(let i=0;i<7;i++){
      Row.insertCell(i).innerHTML=rows[rows.length-1][i];
  }
 console.log(rows)
 var table2=document.getElementById("csv_table_Sums");
 if(table2.rows.length>1){
    while (table2.rows.length > 1) {
        table2.deleteRow(1);
      }
 }
for(var i=0;i<dates.length;i++){
     var Rrow=table2.insertRow(i+1)
     let Cells=Rrow.insertCell(0);
      Cells.innerHTML=dates[i];
     }
console.log(table2.rows[0])
for(var i=0;i<dates.length;i++){
    for(var j=0;j<3;j++){
        table2.rows[i+1].insertCell(j+1).innerHTML=rows[i+1][8+j]
    }
}
table2.insertRow(dates.length+1)
for(let i=0;i<4;i++){
    table2.rows[dates.length+1].insertCell(i).innerHTML=rows[dates.length+1][7+i];
}



console.log(table1)
console.log(rows)
console.log(document.getElementById("calc").innerHTML);
}

function numbersOnly(input){
    var regex=/[^0-9] /gi;
    
    input.value=input.value.replace(regex,"");
}

function EnTotal(){
   if(document.getElementById("measRadPerTube").disabled==true && document.getElementById("measCpmPerTube").disabled==true){
    document.getElementById("measCpmPerTube").disabled=false;
    document.getElementById("measRadPerTube").disabled=false;
   }
   else if(document.getElementById("measRadPerTube").disabled==false && document.getElementById("measCpmPerTube").disabled==false){
    document.getElementById("measCpmPerTube").disabled=true;
    document.getElementById("measRadPerTube").disabled=true;
   }
   if(document.getElementById("measRadPerTube").disabled==false && document.getElementById("measCpmPerTube").disabled==false){
       alert("Μην ξεχάσεις να συμπληρώσεις την μέτρησή σου");
   }
   
}

function Calc_kBq(){ //υπολογίζει την μετρούμενη ενεργότητα ανά συληνάριο
    if(document.getElementById("myTotalBox").checked==false){
    let Efficiency=document.getElementById("efficiency").value;
    let MyCpm=document.getElementById("measCpmPerTube").value;
    let ActivityPerTube=MyCpm/(600*Efficiency);
    
    document.getElementById("measRadPerTube").value=ActivityPerTube.toFixed(5);
    // document.getElementById("measCpmPerTube").disabled=true;
    console.log(document.getElementById("measRadPerTube").value);
    console.log(MyCpm)
    }
    else{
    document.getElementById("measCpmPerTube").disabled=true;
    let Efficiency=document.getElementById("efficiency").value;
    let Total=document.getElementById("myTotal").value;
    let ActivityPerTube=Total/(600*Efficiency);
    console.log(Efficiency);
    console.log(Total);
    console.log(ActivityPerTube);
    document.getElementById("measRadPerTube").value=ActivityPerTube.toFixed(5);
    console.log(document.getElementById("measRadPerTube").value);
    }
    // if(document.getElementById("myTotalBox").checked==false){
    //     document.getElementById("measCpmPerTube").disabled=false;
    // }
}

function Calc_Cpm(){
    let Efficiency=document.getElementById("efficiency").value;
    let ActivityPerTube=document.getElementById("theoRadPerTube").value;
    let CpmPerTubeNominal=ActivityPerTube*600*Efficiency;
    document.getElementById("theoCpmPerTube").value=CpmPerTubeNominal.toFixed(2);

}


function EnMeasRadPerTube(){
    document.getElementById("measRadPerTube").disabled=false;
}

function DisAndEnMeasCpmPerTube(){
    if(document.getElementById("myTotalBox").checked==false){
        console.log("15");
            document.getElementById("measCpmPerTube").disabled=false;
            document.getElementById("myTotal").disabled=true;
         }
    else{
        console.log("25");
        document.getElementById("measCpmPerTube").disabled=true;
        document.getElementById("myTotal").disabled=false;
    }
}


  function SaveCsv(){
    let data = "";
    var tableData = [];
    for (var row of rows) {
      var rowData = [];
      for (var column of row) {
        rowData.push(column);
      }
      tableData.push(rowData.join(","));
    }
    data += tableData.join("\n");
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([data], { type: "text/csv" }));
    if(document.getElementById("file_name").value==""){
        var filename="Το αρχείο μου".concat(".csv");
    }
    else{
        let LoadedFileName=document.getElementById("file_name").value;
        var filename=LoadedFileName;
    }
    console.log(document.getElementById("file_name").value)
    a.setAttribute("download", filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
   
  }
function UploadFileAlert(){
    if(rows.length>1){
        console.log(rows.length)
        alert("Προσοχή! Όποια καταχώρηση έχει γίνει θα διαγραφθεί, αν δεν θέλετε να διαγραφθεί πατήστε το άκυρο.");

    }
}
  function processFile(){
    
    var filename=document.getElementById("MyFile").value;
    var filelength=filename.length;
    filename=filename.substr(12,filelength);
    document.getElementById("file_name").value=filename;
    console.log(filename);
    var file = document.getElementById("MyFile").files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    
  
    //When the file finish load
    reader.onload = function(event) {
  
      //get the file.
      var csv = event.target.result;
  
      //split and get the rows in an array
      var notreadyrows = csv.split('\n');
      
      console.log(notreadyrows);
        var readyrows=[];
      for(var i=0;i<notreadyrows.length;i++){
      readyrows[i]=notreadyrows[i].split(",");
      }
   
     rows=readyrows;
     if(rows[rows.length-1]==""){
        rows.pop()
    }
     console.log(rows);
     console.log(rows.length);
     console.log(rows[0].length);
     let sortByDate = rows => {
        let sorter = (a, b) => {
           return new Date(a[0]) - new Date(b[0]);
        };
        rows.sort(sorter);
     };
     sortByDate(rows);
     alldates=[];
     console.log("sorted loaded rows ",rows)
     for(var i=1;i<rows.length-1;i++){
         alldates.push(rows[i][0]);

     }
     console.log(alldates)
     dates=alldates.filter((v, i, a) => a.indexOf(v) === i);   //αφαίρεση των όμοιων τιμών
     let g=rows.map(d => parseFloat(d[4]).toFixed(2)); // διαλέγω τις στήλες του αρχείου με τα στερεά και υγρά κατάλοιπα 
     let l=rows.map(d => parseFloat(d[5]).toFixed(2)); // και τις μετατρέπω σε αριθμους με δύο δεκαδικά 
     let kl=rows.map(d => parseFloat(d[8]).toFixed(2)); // και μετα πάλι σε string
     let bn=rows.map(d => parseFloat(d[9]).toFixed(2));
     let bm=rows.map(d => parseFloat(d[10]).toFixed(2));
     for(let i=1;i<rows.length-1;i++){
         rows[i][4]=g[i];
         rows[i][5]=l[i];
     }
     for(let i=1;i<dates.length-1;i++){
         rows[i][8]=kl[i];
         rows[i][9]=bn[i];
         rows[i][10]=bm[i];
     }                                                      
     console.log(rows);
    var table1=document.getElementById("csv_table");
 if(table1.rows.length>1){
    
    while (table1.rows.length > 1) {
        table1.deleteRow(1);
      }
    }
    var table1=document.getElementById("csv_table");
    for(var i=1;i<rows.length-1;i++){
        var Row=table1.insertRow(i);
        
        for(var j=0;j<6;j++){
            Row.insertCell(j).innerHTML=rows[i][j];
            
        }
        
        Row.insertCell(6).innerHTML="<button id=del onclick=Delete(this) ><img src=x-512.png style=width:20px;height:20px; > </button>";//
        
        
     }
     Row=table1.insertRow(rows.length-1);
     for(let i=0;i<7;i++){
         Row.insertCell(i).innerHTML=rows[rows.length-1][i];
     }
     
var table2=document.getElementById("csv_table_Sums");
if(table2.rows.length>1){
   while (table2.rows.length > 1) {
       table2.deleteRow(1);
     }
}
console.log(dates);
for(var i=0;i<dates.length;i++){//
    var Rrow=table2.insertRow(i+1)
    let Cells=Rrow.insertCell(0);
     Cells.innerHTML=dates[i];
    }
    console.log(Rrow)
console.log(table2.rows[0])
for(var i=0;i<dates.length;i++){
   for(var j=0;j<3;j++){
       table2.rows[i+1].insertCell(j+1).innerHTML=rows[i+1][8+j]
   }
}
table2.insertRow(table2.rows.length);
let LastRowOfrows=rows[rows.length-1];   //προσθέτει και την τελευαταια γραμμη με το Total Sum στου δευτερου πινακα
LastRowOfrows.splice(1,3);
for(let j=0;j<4;j++){         
    table2.rows[dates.length+1].insertCell(j).innerHTML=LastRowOfrows[j];
}
console.log(LastRowOfrows);
console.log(rows)
console.log(table2)
console.log(table2.rows[dates.length+1])

}
}

function Delete(y){
    let javascriptrow=y.parentNode.parentNode //διαβάζει τον δείκτη της σειράς που πατήθηκε το delete
    console.log(javascriptrow)
    console.log(javascriptrow.rowIndex);
    while(rows.length>1){
        rows.pop();
    }
    let tableforEdit=document.getElementById("csv_table");
     tableforEdit.deleteRow(javascriptrow.rowIndex);
     console.log(tableforEdit);
    for(let i=0;i<tableforEdit.rows.length-1;i++){
        rows.push([]);
        for(let j=0;j<6;j++){
            rows[i+1][j]=tableforEdit.rows[i+1].cells[j].innerHTML;
        }
        
    }
    console.log(rows)
     RoWs = [[[]]];
     Roows=[];
     SS=[[]];
     SL=[[]];
     dates=[];
     alldates=[];
     for(var i=0;i<rows.length-1;i++){
        for(var j=0;j<6;j++){
        RoWs[i][j]=rows[i][j];
        }
        RoWs.push([]);
    }
    console.log(RoWs)
    
    
    for(var i=1;i<rows.length-1;i++){
        alldates[i-1]=rows[i][0]
    }
    console.log(alldates)
    dates=alldates.filter((v, i, a) => a.indexOf(v) === i);   //αφαίρεση των όμοιων τιμών
    console.log(alldates)
    console.log(dates)
    
for(var i=0;i<dates.length;i++){
  Roows[i] = RoWs.filter(function(x){
      return x[0]==dates[i];
  }) }
  console.log(Roows)
 SS=[[]]
 SS.push([])
 SL=[[]]
 SL.push([])
 for(var i=0;i<dates.length;i++){
    for(var j=0;j<Roows[i].length;j++){
        SS[i].push(parseFloat(Roows[i][j][4]))
        SL[i].push(parseFloat(Roows[i][j][5]))
        SS.push([])
        SL.push([])
    }
 }
 console.log(SS)
 console.log(SL)
 if(rows[1].length>6){
     for(var i=0;i<dates.length;i++){
         rows[i+1].splice(6,5);
     }
 }

 for(var i=0;i<dates.length;i++){
     rows[i+1].push("")
     rows[i+1].push(dates[i])
     rows[i+1].push(SS[i].reduce((a,b)=>a+b,0).toFixed(2).toString())
     rows[i+1].push(SL[i].reduce((a,b)=>a+b,0).toFixed(2).toString())
     Sum_When_delete=SS[i].reduce((a,b)=>a+b,0)+SL[i].reduce((a,b)=>a+b,0)
     rows[i+1].push(Sum_When_delete.toFixed(2).toString())
     
 }
 rows.pop();
 let Allsolidwastes=[];
 let AllLiquidwastes=[];
 let AllWastes=0;
 RoWs.pop();
 RoWs.shift();
 console.log(RoWs);
 Allsolidwastes=RoWs.map(d => parseFloat(d[4]));// επιλέγω από έναν πίνακα 2d μία στήλη την οποία αθροίζω μετά
 AllLiquidwastes=RoWs.map(d => parseFloat(d[5]))// επιλέγω από έναν πίνακα 2d μία στήλη την οποία αθροίζω μετά
 console.log(Allsolidwastes);
 console.log(AllLiquidwastes);
  Allsolidwastes=Allsolidwastes.reduce((a,b)=>a+b,0).toFixed(2);
  AllLiquidwastes=AllLiquidwastes.reduce((a,b)=>a+b,0).toFixed(2);
  console.log(Allsolidwastes);
  console.log(AllLiquidwastes);
  Allsolidwastes=parseFloat(Allsolidwastes);
  AllLiquidwastes=parseFloat(AllLiquidwastes);
  AllWastes=Allsolidwastes+AllLiquidwastes;
 rows.push(["Total Waste(kBq)","","","",Allsolidwastes.toFixed(2).toString(),AllLiquidwastes.toFixed(2).toString(),AllWastes.toFixed(2).toString()])
  console.log(rows)
  var table1=document.getElementById("csv_table");
  if(table1.rows.length>1){
     while (table1.rows.length > 1) {
         table1.deleteRow(1);
       }
  }
  console.log(rows)
  
  for(var i=1;i<rows.length-1;i++){
      var Row=table1.insertRow(i);
      
      for(var j=0;j<6;j++){
 
     
          Row.insertCell(j).innerHTML=rows[i][j];
         
      }
     
      Row.insertCell(6).innerHTML="<button id=del onclick=Delete(this) ><img src=x-512.png style=width:20px;height:20px; > </button>";
     
   }
   Row=table1.insertRow(rows.length-1);
   for(let i=0;i<7;i++){
       Row.insertCell(i).innerHTML=rows[rows.length-1][i];
   }
  console.log(rows)

 let table2=document.getElementById("csv_table_Sums")
 while(table2.rows.length>1){
        table2.deleteRow(1);
 }
 for(var i=0;i<dates.length;i++){
    var Rrow=table2.insertRow(i+1)
    let Cells=Rrow.insertCell(0);
     Cells.innerHTML=dates[i];
    }
console.log(table2.rows[0])
console.log(rows)
for(var i=0;i<dates.length;i++){
   for(var j=0;j<3;j++){
       table2.rows[i+1].insertCell(j+1).innerHTML=rows[i+1][8+j]
   }
}
console.log(table1)
if(table1.rows.length==2){
    rows.pop();
    document.getElementById("csv_table").deleteRow(1);
}
}

function Calc_theoRadPerTube(){//υπολογίζει την θεωρητική ενεργότητα ανά σωληνάριο σε kbq και σε cpm
    let tTracer=document.getElementById("tTracer").value;
    let tVolTracer=document.getElementById("tVolTracer").value;
    let VolPerTube=document.getElementById("VolPerTube").value;
    let theoRadPerTube=tTracer/tVolTracer*VolPerTube;
    let e=document.getElementById("efficiency").value;
    document.getElementById("theoRadPerTube").value=theoRadPerTube.toFixed(2);
    console.log(document.getElementById("theoRadPerTube").value)
    let theoCpmPerTube=theoRadPerTube*e*600;
    document.getElementById("theoCpmPerTube").value=theoCpmPerTube.toFixed(2);

}
function PercentageCorretion1(){//συμπληρώνει αυτόματα το ποσοστό του υγρού
    let perSol=document.getElementById("perSol").value;
    let perLiq=document.getElementById("perLiq").value;
    perLiq=100-perSol;
    document.getElementById("perLiq").value=perLiq;
}
 function PercentageCorretion2(){//συμπληρώνει αυτόματα το ποσοστό του στερεού
    let perSol=document.getElementById("perSol").value;
    let perLiq=document.getElementById("perLiq").value;
    perSol=100-perLiq;
    document.getElementById("perSol").value=perSol;
 }
 function Clear_otherKit(){
     document.getElementById("ukit").value="";
     document.getElementById("ukit").disabled=true;
 }
 function Clear_otherManu(){
     document.getElementById("umanu").value="";
     document.getElementById("umanu").disabled=true;
     document.getElementById("myTotal").value="0";
 }
 function Print(){
     window.print()
 }
 function RiaIrmaAverage(){
    let Kit=document.getElementById("kit").value;
    let tTracer=0;
    let tVolTracer=0;
    let VolPerTube=0;
    let theoRadPerTube=tTracer/tVolTracer*VolPerTube;
    let theoCpmPerTube=0;
    let perSol=0;
    let perLiq=0;
    let kataskeyasths="";
    let method="";
    switch (Kit){
        case "FT3":
            kataskeyasths=document.getElementById("manu").value;
            method=document.getElementById("method").value;
            var e=document.getElementById("efficiency").value;
            if(kataskeyasths=="BECKMAN" && method=="RIA"){
                tTracer=225;
                tVolTracer=45;
                VolPerTube=0.4;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=47;
                perLiq=100-perSol;
                document.getElementById("measCpmPerTube").value=22573;
            }
            else if(kataskeyasths=="IZOTOP" && method=="RIA"){
                tTracer=300;
                tVolTracer=55;
                VolPerTube=0.5;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=28;
                perLiq=100-perSol;
                document.getElementById("measCpmPerTube").value=69292;
            }
            else if(kataskeyasths=="DIASOURCE" && method=="RIA"){
                tTracer=225;
                tVolTracer=45;
                VolPerTube=0.4;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=28;
                perLiq=100-perSol;
                document.getElementById("measCpmPerTube").value=42504;
            }
            else if(kataskeyasths=="CIS" && method=="RIA"){
                tTracer=150;
                tVolTracer=105;
                VolPerTube=1.0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=25;
                perLiq=100-perSol;
                document.getElementById("measCpmPerTube").value="";
            }
            else if(method=="RIA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=25;
                perLiq=100-perSol;
            }
            else if(method=="IRMA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=6;
                perLiq=100-perSol;
            }
            break;
        case "FT4":
            kataskeyasths=document.getElementById("manu").value;
            method=document.getElementById("method").value;
            var e=document.getElementById("efficiency").value;
            if(kataskeyasths=="BECKMAN" && method=="RIA"){
                tTracer=310;
                tVolTracer=45;
                VolPerTube=0.4;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=24;
                perLiq=100-perSol;

                document.getElementById("measCpmPerTube").value=37957;
            }
            else if(kataskeyasths=="IZOTOP" && method=="RIA"){
                tTracer=260;
                tVolTracer=55;
                VolPerTube=0.5;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=34;
                perLiq=100-perSol;

                document.getElementById("measCpmPerTube").value=62620;
            }
            else if(kataskeyasths=="DIASORIN" && method=="RIA"){
                tTracer=300;
                tVolTracer=110;
                VolPerTube=0.5;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=19;
                perLiq=100-perSol;

                document.getElementById("measCpmPerTube").value=31795;
            }
            else if(kataskeyasths=="CIS" && method=="RIA"){
                tTracer=150;
                tVolTracer=105;
                VolPerTube=1.0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=25;
                perLiq=100-perSol;

                document.getElementById("measCpmPerTube").value="";
            }
            else if(method=="RIA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=25;
                perLiq=100-perSol;
            }
            else if(method=="IRMA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=6;
                perLiq=100-perSol;
            }
            break;
            case "TSH":
                kataskeyasths=document.getElementById("manu").value;
                method=document.getElementById("method").value;
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="BECKMAN" && method=="IRMA"){
                    tTracer=515;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=4;
                    perLiq=100-perSol;
                    
                    document.getElementById("measCpmPerTube").value=68327;
                }
                else if(kataskeyasths=="DIASOURCE" && method=="IRMA" ){
                    tTracer=700;
                    tVolTracer=5.5;
                    VolPerTube=0.05;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=3;
                    perLiq=100-perSol;
                    
                    document.getElementById("measCpmPerTube").value=207836;
                }
                else if(kataskeyasths=="DIASORIN" && method=="IRMA" ){
                    tTracer=1200;
                    tVolTracer=42;
                    VolPerTube=0.2;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=4;
                    perLiq=100-perSol;
                    
                    document.getElementById("measCpmPerTube").value=182203;
                }
                else if(kataskeyasths=="IZOTOP" && method=="IRMA"){
                    tTracer=980;
                    tVolTracer=12;
                    VolPerTube=0.1;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=6;
                    perLiq=100-perSol;
                    
                    document.getElementById("measCpmPerTube").value="";
                }
                else if(method=="RIA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=25;
                    perLiq=100-perSol;
                }
                else if(method=="IRMA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=6;
                    perLiq=100-perSol;
                }
                break;
            case "TgAb":
                kataskeyasths=document.getElementById("manu").value;
                method=document.getElementById("method").value;
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="BRAHMS" && method=="RIA"){
                    tTracer=142;
                    tVolTracer=22;
                    VolPerTube=0.2;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=23;
                    perLiq=100-perSol;

                    document.getElementById("measCpmPerTube").value=28686;
                    console.log(333)
                }
                else if(kataskeyasths=="ZENTECH" && method=="RIA" ){
                    tTracer=137;
                    tVolTracer=22;
                    VolPerTube=0.2;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=20;
                    perLiq=100-perSol;

                    document.getElementById("measCpmPerTube").value=33760;
                }
                else if(kataskeyasths=="LAB SUPPLIES" && method=="RIA" ){
                    tTracer=260;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=33;
                    perLiq=100-perSol;

                    document.getElementById("measCpmPerTube").value=62993;
                }
                else if(kataskeyasths=="IZOTOP" && method=="RIA"){
                    tTracer=137;
                    tVolTracer=22;
                    VolPerTube=0.2;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=20;
                    perLiq=100-perSol;

                    document.getElementById("measCpmPerTube").value=33760;
                }
                else if(kataskeyasths=="BECKAMAN" && method=="RIA"){
                    tTracer=325;
                    tVolTracer=55;
                    VolPerTube=0.5;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=25;
                    perLiq=100-perSol;

                    document.getElementById("measCpmPerTube").value="";
                }
                else if(kataskeyasths=="DIASOURCE" && method=="RIA"){
                    tTracer=137;
                    tVolTracer=22;
                    VolPerTube=0.2;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=25;
                    perLiq=100-perSol;

                    document.getElementById("measCpmPerTube").value=33760;
                
                }
                else if(method=="RIA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=25;
                    perLiq=100-perSol;
                }
                else if(method=="IRMA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=6;
                    perLiq=100-perSol;
                }
                    break;
            case "TPO":
                kataskeyasths=document.getElementById("manu").value;
                method=document.getElementById("method").value;
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="IZOTOP" && method=="RIA" ){
                    tTracer=260;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=25;
                    perLiq=100-perSol;

                    document.getElementById("measCpmPerTube").value=48361;
                }
                else if(kataskeyasths=="ZENTECH" && method=="RIA"  ){
                    document.getElementById("method").value="RIA";
                    tTracer=114;
                    tVolTracer=22;
                    VolPerTube=0.2;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=22;
                    perLiq=100-perSol;

                    document.getElementById("measCpmPerTube").value=26388;
                }
                else if(kataskeyasths=="LAB SUPPLIES" && method=="RIA"  ){
                    document.getElementById("method").value="RIA";
                    tTracer=260;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=25;
                    perLiq=100-perSol;

                    document.getElementById("measCpmPerTube").value=62731;
                }
                else if(kataskeyasths=="BRAHMS" && method=="RIA"){
                    tTracer=142;
                    tVolTracer=22;
                    VolPerTube=0.2;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=23;
                    perLiq=100-perSol;

                    document.getElementById("measCpmPerTube").value=28686;
                }
                else if(kataskeyasths=="BECKMAN" && method=="RIA"){
                    tTracer=325;
                    tVolTracer=55;
                    VolPerTube=0.5;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=235;
                    perLiq=100-perSol;

                    document.getElementById("measCpmPerTube").value="";
                    
                }
                else if(kataskeyasths=="DIASOURCE" && method=="RIA"){
                    tTracer=137;
                    tVolTracer=22;
                    VolPerTube=0.2;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=235;
                    perLiq=100-perSol;

                    document.getElementById("measCpmPerTube").value=33760;
                }
                else if(method=="RIA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=25;
                    perLiq=100-perSol;
                }
                else if(method=="IRMA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=6;
                    perLiq=100-perSol;
                }
                    break;
                case "rTSH-Ab":
                    kataskeyasths=document.getElementById("manu").value;
                    method=document.getElementById("method").value;
                    var e=document.getElementById("efficiency").value;
                    if(kataskeyasths=="BRAHMS" ){
                        document.getElementById("method").value="RIA";   
                        tTracer=80;
                        tVolTracer=11;
                        VolPerTube=0.1;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=31;
                        perLiq=100-perSol;
    
                        document.getElementById("measCpmPerTube").value=21711;
                    }
                    else if(kataskeyasths=="BECKMAN" && method=="RIA"){ 
                        tTracer=180;
                        tVolTracer=11;
                        VolPerTube=0.1;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=25;
                        perLiq=100-perSol;
    
                        document.getElementById("measCpmPerTube").value="";
                    }
                    else if(method=="RIA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=25;
                        perLiq=100-perSol;
                    }
                    else if(method=="IRMA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=6;
                        perLiq=100-perSol;
                    }
                        break;
                case "Tg":
                    kataskeyasths=document.getElementById("manu").value;
                    method=document.getElementById("method").value;
                    var e=document.getElementById("efficiency").value;
                    if(kataskeyasths=="IZOTOP" && method=="IRMA"){
                        tTracer=980;
                        tVolTracer=21;
                        VolPerTube=0.2;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=4.80;
                        perLiq=100.00-perSol;
                        
                        document.getElementById("measCpmPerTube").value=162174;
                    }
                    else if(kataskeyasths=="ZENTECH" && method=="IRMA" ){
                        tTracer=480;
                        tVolTracer=27.5;
                        VolPerTube=0.25;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=5;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=126653;
                    }
                    else if(kataskeyasths=="DIASORIN" && method=="IRMA" ){
                        tTracer=867;
                        tVolTracer=27;
                        VolPerTube=0.25;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=9;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=219812;
                    }
                    else if(kataskeyasths=="BECKMAN" && method=="IRMA"){
                        tTracer=480;
                        tVolTracer=27.5;
                        VolPerTube=0.25;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=6;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value="";
                    }
                    else if(kataskeyasths=="DIASOURCE" && method=="IRMA"){
                        tTracer=480;
                        tVolTracer=27.5;
                        VolPerTube=0.25;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=5;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=126653;
                    }
                    else if(kataskeyasths=="CIS" && method=="IRMA"){
                        tTracer=481;
                        tVolTracer=42;
                        VolPerTube=0.4;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=6;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=126653;
                    }
                    else if(method=="RIA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=25;
                        perLiq=100-perSol;
                    }
                    else if(method=="IRMA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=6;
                        perLiq=100-perSol;
                    }
                        break;
                case "CEA":
                    kataskeyasths=document.getElementById("manu").value;
                    method=document.getElementById("method").value;
                    var e=document.getElementById("efficiency").value;
                    if(kataskeyasths=="DIASOURCE" && method=="IRMA"){
                        tTracer=310;
                        tVolTracer=11;
                        VolPerTube=0.1;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=5;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=113234;
                    }
                    else if(kataskeyasths=="BECKMAN" && method=="IRMA"){
                        tTracer=640;
                        tVolTracer=33;
                        VolPerTube=0.3;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=2;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=110601;
                    }
                    else if(kataskeyasths=="IZOTOP" && method=="IRMA"){
                        tTracer=740;
                        tVolTracer=21;
                        VolPerTube=0.2;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=6;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value="";
                    }
                    else if(method=="RIA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=25;
                        perLiq=100-perSol;
                    }
                    else if(method=="IRMA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=6;
                        perLiq=100-perSol;
                    }
                        break;
                case "CA-19-9":
                    kataskeyasths=document.getElementById("manu").value;
                    method=document.getElementById("method").value;
                    var e=document.getElementById("efficiency").value;
                    if(kataskeyasths=="IZOTOP" && method=="IRMA"){
                        tTracer=980;
                        tVolTracer=21;
                        VolPerTube=0.2;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=3;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=225347;
                    }
                    
                    else if(kataskeyasths=="BECKMAN" && method=="IRMA" ){
                        tTracer=310;
                        tVolTracer=11;
                        VolPerTube=0.1;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=7;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=67454;
                    }
                    else if(kataskeyasths=="DIASOURCE" && method=="IRMA"){
                        tTracer=760;
                        tVolTracer=10.5;
                        VolPerTube=0.05;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=6;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value="";
                    }
                      else if(method=="RIA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=25;
                perLiq=100-perSol;
            }
            else if(method=="IRMA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=6;
                perLiq=100-perSol;
            }
                        break;
                case "AchRAb":
                    kataskeyasths=document.getElementById("manu").value;
                    method=document.getElementById("method").value;
                    var e=document.getElementById("efficiency").value;
                    if(kataskeyasths=="IBL" && method=="IRMA"){
                        tTracer=300;
                        tVolTracer=10.8;
                        VolPerTube=0.1;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=5;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=45631;
                    }
                    else if(kataskeyasths=="DIASOURCE" && method=="IRMA"){
                        tTracer=300;
                        tVolTracer=10.8;
                        VolPerTube=0.1;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=14;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=52774;
                    }
                    else if(method=="RIA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=25;
                        perLiq=100-perSol;
                    }
                    else if(method=="IRMA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=6;
                        perLiq=100-perSol;
                    }
                        break;
                case "CA-125":
                    kataskeyasths=document.getElementById("manu").value;
                    method=document.getElementById("method").value;
                    var e=document.getElementById("efficiency").value;
                    if(kataskeyasths=="IZOTOP" && method=="IRMA"){
                        tTracer=980;
                        tVolTracer=11;
                        VolPerTube=0.1;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=2;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=238846;
                    }
                    else if(kataskeyasths=="BECKMAN" && method=="IRMA"){
                        tTracer=480;
                        tVolTracer=33;
                        VolPerTube=0.3;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=8;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=99043;
                    }
                    else if(kataskeyasths=="DIASOURCE" && method=="IRMA"){
                        tTracer=760;0
                        tVolTracer=10.5;
                        VolPerTube=0.1;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=6;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value="";
                    }
                    else if(method=="RIA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=25;
                        perLiq=100-perSol;
                    }
                    else if(method=="IRMA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=6;
                        perLiq=100-perSol;
                    }
                        break;
                case "CA 15-3":
                    kataskeyasths=document.getElementById("manu").value;
                    method=document.getElementById("method").value;
                    var e=document.getElementById("efficiency").value;
                    if(kataskeyasths=="BECKMAN" && method=="IRMA" ){
                        tTracer=600;
                        tVolTracer=22;
                        VolPerTube=0.2;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=9;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=130549;
                    }
                    else if(kataskeyasths=="IZOTOP" && method=="IRMA" ){
                        tTracer=980;
                        tVolTracer=21;
                        VolPerTube=0.2;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=3;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=240097;
                    }
                    else if(kataskeyasths=="DIASOURCE" && method=="IRMA"){
                        tTracer=870;
                        tVolTracer=6;
                        VolPerTube=0.05;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=6;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value="";
                    }
                    else if(method=="RIA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=25;
                        perLiq=100-perSol;
                    }
                    else if(method=="IRMA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=6;
                        perLiq=100-perSol;
                    }
                        break;
                case "AFP":
                    kataskeyasths=document.getElementById("manu").value;
                    method=document.getElementById("method").value;
                    var e=document.getElementById("efficiency").value;
                    if(kataskeyasths=="IZOTOP" && method=="IRMA"){
                        tTracer=740;
                        tVolTracer=21;
                        VolPerTube=0.2;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=3.87;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=125641;
                    }
                    else if(kataskeyasths=="BECKMAN" && method=="IRMA"){
                        tTracer=320;
                        tVolTracer=22;
                        VolPerTube=0.2;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=8;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=200222;
                    }
                    else if(kataskeyasths=="DIASOURCE" && method=="IRMA"){
                        tTracer=320;
                        tVolTracer=22;
                        VolPerTube=0.2;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=6;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value="";
                    }
                    else if(method=="RIA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=25;
                        perLiq=100-perSol;
                    }
                    else if(method=="IRMA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=6;
                        perLiq=100-perSol;
                    }
                        break;
                case "TPSA":
                    kataskeyasths=document.getElementById("manu").value;
                    method=document.getElementById("method").value;
                    var e=document.getElementById("efficiency").value;
                    if(kataskeyasths=="IZOTOP" && method=="IRMA"){
                        tTracer=980;
                        tVolTracer=11;
                        VolPerTube=0.1;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=7;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=178269;
                    }
                    else if(kataskeyasths=="BECKMAN" && method=="IRMA" ){
                        tTracer=580;
                        tVolTracer=11;
                        VolPerTube=0.1;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=3;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=102182;
                    }
                    else if(kataskeyasths=="LAB SUPPLIES" && method=="IRMA"){
                        tTracer=980;
                        tVolTracer=21;
                        VolPerTube=0.2;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=7;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=252404;
                    }
                    else if(method=="RIA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=25;
                        perLiq=100-perSol;
                    }
                    else if(method=="IRMA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=6;
                        perLiq=100-perSol;
                    }
                        break;
                case "FPSA":
                    kataskeyasths=document.getElementById("manu").value;
                    method=document.getElementById("method").value;
                    var e=document.getElementById("efficiency").value;
                    if(kataskeyasths=="LAB SUPPLIES" && method=="IRMA"){
                        tTracer=840;
                        tVolTracer=21;
                        VolPerTube=0.2;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=11;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value=171319;
                    }
                    else if(kataskeyasths=="BECKMAN" && method=="IRMA"){
                        tTracer=275;
                        tVolTracer=5.5;
                        VolPerTube=0.1;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=6;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value="";
                    }
                    else if(kataskeyasths=="IZOTOP" && method=="IRMA"){
                        tTracer=740;
                        tVolTracer=11;
                        VolPerTube=0.1;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=6;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value="";
                    }
                    else if(kataskeyasths=="DIASOURCE" && method=="IRMA"){
                        tTracer=740;
                        tVolTracer=21;
                        VolPerTube=0.2;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=6;
                        perLiq=100-perSol;
                        
                        document.getElementById("measCpmPerTube").value="";
                    }
                    else if(method=="RIA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=25;
                        perLiq=100-perSol;
                    }
                    else if(method=="IRMA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=6;
                        perLiq=100-perSol;
                    }
                        break;
                case "RENIN":
                    kataskeyasths=document.getElementById("manu").value;
                    method=document.getElementById("method").value;
                    var e=document.getElementById("efficiency").value;
                    if(kataskeyasths=="BECKMAN" && method=="RIA"){
                    tTracer=260;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=17;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value=32472;
                    }
                    else if(kataskeyasths=="ZENTECH" && method=="RIA" ){
                    tTracer=148;
                    tVolTracer=50;
                    VolPerTube=0.5;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=23;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value=36605;
                    }
                    else if(method=="RIA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=25;
                        perLiq=100-perSol;
                    }
                    else if(method=="IRMA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=6;
                        perLiq=100-perSol;
                    }
                        break;
                case "ALDO":
                    kataskeyasths=document.getElementById("manu").value;
                    method=document.getElementById("method").value;
                    var e=document.getElementById("efficiency").value;
                    if(kataskeyasths=="BECKMAN" && method=="RIA"){
                        tTracer=185;
                        tVolTracer=55;
                        VolPerTube=0.5;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=20.48;
                        perLiq=100-perSol;
                        document.getElementById("measCpmPerTube").value=11772;
                        }
                        else if(kataskeyasths=="RIAZENCO" && method=="RIA"){
                            tTracer=85;
                            tVolTracer=50;
                            VolPerTube=0.5;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            perSol=27;
                            perLiq=100-perSol;
        
                            document.getElementById("measCpmPerTube").value=27135;
                        }
                        else if(method=="RIA"){
                            tTracer=0;
                            tVolTracer=0;
                            VolPerTube=0;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            document.getElementById("measCpmPerTube").value=0;
                            document.getElementById("measRadPerTube").value=0;
                            perSol=25;
                            perLiq=100-perSol;
                        }
                        else if(method=="IRMA"){
                            tTracer=0;
                            tVolTracer=0;
                            VolPerTube=0;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            document.getElementById("measCpmPerTube").value=0;
                            document.getElementById("measRadPerTube").value=0;
                            perSol=6;
                            perLiq=100-perSol;
                        }
                            break;
                    case "Δ4":
                        kataskeyasths=document.getElementById("manu").value;
                        method=document.getElementById("method").value;
                        var e=document.getElementById("efficiency").value;
                        if(kataskeyasths=="DIASOURCE" && method=="RIA" ){
                            tTracer=111;
                            tVolTracer=26;
                            VolPerTube=0.25;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            perSol=19;
                            perLiq=100-perSol;
        
                            document.getElementById("measCpmPerTube").value=22634
                        }
                        else if(kataskeyasths=="BECKMAN" && method=="RIA" ){
                            tTracer=185;
                            tVolTracer=55;
                            VolPerTube=0.5;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            perSol=21;
                            perLiq=100-perSol;
        
                            document.getElementById("measCpmPerTube").value=29039;
                        }
                        else if(method=="RIA"){
                            tTracer=0;
                            tVolTracer=0;
                            VolPerTube=0;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            document.getElementById("measCpmPerTube").value=0;
                            document.getElementById("measRadPerTube").value=0;
                            perSol=25;
                            perLiq=100-perSol;
                        }
                        else if(method=="IRMA"){
                            tTracer=0;
                            tVolTracer=0;
                            VolPerTube=0;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            document.getElementById("measCpmPerTube").value=0;
                            document.getElementById("measRadPerTube").value=0;
                            perSol=6;
                            perLiq=100-perSol;
                        }
                            break;
                    case "CALCITONIN":
                        kataskeyasths=document.getElementById("manu").value;
                        method=document.getElementById("method").value;
                        var e=document.getElementById("efficiency").value;
                        if(kataskeyasths=="IZOTOP" && method=="IRMA"){
                            tTracer=740;
                            tVolTracer=11;
                            VolPerTube=0.1;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            perSol=3.22;
                            perLiq=100-perSol;
                            
                            document.getElementById("measCpmPerTube").value=191536;
                        }
                        else if(kataskeyasths=="DIASOURCE" && method=="IRMA"){
                            tTracer=720;
                            tVolTracer=5.5;
                            VolPerTube=0.05;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            perSol=9;
                            perLiq=100-perSol;
                            
                            document.getElementById("measCpmPerTube").value=198902;
                        }
                        else if(method=="RIA"){
                            tTracer=0;
                            tVolTracer=0;
                            VolPerTube=0;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            document.getElementById("measCpmPerTube").value=0;
                            document.getElementById("measRadPerTube").value=0;
                            perSol=25;
                            perLiq=100-perSol;
                        }
                        else if(method=="IRMA"){
                            tTracer=0;
                            tVolTracer=0;
                            VolPerTube=0;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            document.getElementById("measCpmPerTube").value=0;
                            document.getElementById("measRadPerTube").value=0;
                            perSol=6;
                            perLiq=100-perSol;
                        }
                            break;
                    case "25-OH":
                        kataskeyasths=document.getElementById("manu").value;
                        method=document.getElementById("method").value;
                        var e=document.getElementById("efficiency").value;
                        if(kataskeyasths=="BECKMAN" && method=="RIA"){
                        tTracer=160;
                        tVolTracer=6;
                        VolPerTube=0.05;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=22.75;
                        perLiq=100-perSol;
                        document.getElementById("measCpmPerTube").value=36679;
                        }
                        else if(kataskeyasths=="DIASOURCE" && method=="RIA"){
                            tTracer=160;
                            tVolTracer=6;
                            VolPerTube=0.05;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            perSol=26;
                            perLiq=100-perSol;
        
                            document.getElementById("measCpmPerTube").value=31975;
                        }
                        else if(method=="RIA"){
                            tTracer=0;
                            tVolTracer=0;
                            VolPerTube=0;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            document.getElementById("measCpmPerTube").value=0;
                            document.getElementById("measRadPerTube").value=0;
                            perSol=25;
                            perLiq=100-perSol;
                        }
                        else if(method=="IRMA"){
                            tTracer=0;
                            tVolTracer=0;
                            VolPerTube=0;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            document.getElementById("measCpmPerTube").value=0;
                            document.getElementById("measRadPerTube").value=0;
                            perSol=6;
                            perLiq=100-perSol;
                        }
                            break;
                    case "ACTH":
                        kataskeyasths=document.getElementById("manu").value;
                        method=document.getElementById("method").value;
                        var e=document.getElementById("efficiency").value;
                        if(kataskeyasths=="BECKMAN" && method=="IRMA" ){
                            tTracer=814;
                            tVolTracer=10;
                            VolPerTube=0.1;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            perSol=2;
                            perLiq=100-perSol;
        
                            document.getElementById("measCpmPerTube").value=175480;
                        }
                        else if(kataskeyasths=="BRAHMS" && method=="IRMA" ){
                        tTracer=506;
                        tVolTracer=33;
                        VolPerTube=0.3;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=9;
                        perLiq=100-perSol;
                        document.getElementById("measCpmPerTube").value=140286;
                        }
                        else if(kataskeyasths=="CIS" && method=="IRMA" ){
                        tTracer=592;
                        tVolTracer=10;
                        VolPerTube=0.100;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=5;
                        perLiq=100-perSol;
                        document.getElementById("measCpmPerTube").value=151820;
                        }
                        else if(kataskeyasths=="DIASOURCE" && method=="IRMA"){
                            tTracer=1020;
                            tVolTracer=10.5;
                            VolPerTube=0.100;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            perSol=6;
                            perLiq=100-perSol;
                            document.getElementById("measCpmPerTube").value="";
                        }
                        else if(method=="RIA"){
                            tTracer=0;
                            tVolTracer=0;
                            VolPerTube=0;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            document.getElementById("measCpmPerTube").value=0;
                            document.getElementById("measRadPerTube").value=0;
                            perSol=25;
                            perLiq=100-perSol;
                        }
                        else if(method=="IRMA"){
                            tTracer=0;
                            tVolTracer=0;
                            VolPerTube=0;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            document.getElementById("measCpmPerTube").value=0;
                            document.getElementById("measRadPerTube").value=0;
                            perSol=6;
                            perLiq=100-perSol;
                        }
                        break;
                        case "ANGIOTENSIN":
                        kataskeyasths=document.getElementById("manu").value;
                        method=document.getElementById("method").value;
                        var e=document.getElementById("efficiency").value;
                        if(kataskeyasths=="DIASOURCE" && method=="RIA"){
                        tTracer=148;
                        tVolTracer=50;
                        VolPerTube=0.5;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=23;
                        perLiq=100-perSol;
                        document.getElementById("measCpmPerTube").value=36605;
                        }
                        else if(kataskeyasths=="BECKMAN" && method=="RIA"){
                        tTracer=260;
                        tVolTracer=11;
                        VolPerTube=0.1;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=17;
                        perLiq=100-perSol;
                        document.getElementById("measCpmPerTube").value=35556;
                        }
                        else if(method=="RIA"){
                            tTracer=0;
                            tVolTracer=0;
                            VolPerTube=0;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            document.getElementById("measCpmPerTube").value=0;
                            document.getElementById("measRadPerTube").value=0;
                            perSol=25;
                            perLiq=100-perSol;
                        }
                        else if(method=="IRMA"){
                            tTracer=0;
                            tVolTracer=0;
                            VolPerTube=0;
                            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                            theoCpmPerTube=theoRadPerTube*e*600;
                            document.getElementById("measCpmPerTube").value=0;
                            document.getElementById("measRadPerTube").value=0;
                            perSol=6;
                            perLiq=100-perSol;
                        }
                        break;
                case "T3":
                kataskeyasths=document.getElementById("manu").value;
                method=document.getElementById("method").value;
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="BECKMAN"){
                    document.getElementById("method").value="RIA";
                    tTracer=165;
                    tVolTracer=21;
                    VolPerTube=0.2;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=25;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
                }
                else if(kataskeyasths=="IZOTOP"){
                    document.getElementById("method").value="RIA";
                    tTracer=260;
                    tVolTracer=22;
                    VolPerTube=0.2;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=25;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
                }
                else if(kataskeyasths=="DIASOURCE"){
                    document.getElementById("method").value="RIA";
                    tTracer=111;
                    tVolTracer=21;
                    VolPerTube=0.2;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=25;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
                }
                else if(kataskeyasths=="CIS"){
                    document.getElementById("method").value="RIA";
                    tTracer=150;
                    tVolTracer=105;
                    VolPerTube=1;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=25;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
                }
                else if(method=="RIA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=25;
                    perLiq=100-perSol;
                }
                else if(method=="IRMA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=6;
                    perLiq=100-perSol;
                }
                break;
                case "T4":
                kataskeyasths=document.getElementById("manu").value;
                method=document.getElementById("method").value;
                var e=document.getElementById("efficiency").value;
                    if(kataskeyasths=="BECKMAN"){
                        document.getElementById("method").value="RIA";
                        tTracer=110;
                        tVolTracer=55;
                        VolPerTube=0.5;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=25;
                        perLiq=100-perSol;
                        document.getElementById("measCpmPerTube").value="";
                    }
                    else if(kataskeyasths=="IZOTOP"){
                        document.getElementById("method").value="RIA";
                        tTracer=260;
                        tVolTracer=11;
                        VolPerTube=0.1;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=25;
                        perLiq=100-perSol;
                        document.getElementById("measCpmPerTube").value="";
                    }
                    else if(kataskeyasths=="DIASOURCE"){
                        document.getElementById("method").value="RIA";
                        tTracer=111;
                        tVolTracer=21;
                        VolPerTube=0.2;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=25;
                        perLiq=100-perSol;
                        document.getElementById("measCpmPerTube").value="";
                    }
                    else if(kataskeyasths=="CIS"){
                        document.getElementById("method").value="RIA";
                        tTracer=150;
                        tVolTracer=105;
                        VolPerTube=1;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        perSol=25;
                        perLiq=100-perSol;
                        document.getElementById("measCpmPerTube").value="";
                    }
                    else if(method=="RIA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=25;
                        perLiq=100-perSol;
                    }
                    else if(method=="IRMA"){
                        tTracer=0;
                        tVolTracer=0;
                        VolPerTube=0;
                        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                        theoCpmPerTube=theoRadPerTube*e*600;
                        document.getElementById("measCpmPerTube").value=0;
                        document.getElementById("measRadPerTube").value=0;
                        perSol=6;
                        perLiq=100-perSol;
                    }
                    break;
             case "17-OH PROGESTERONE":
             kataskeyasths=document.getElementById("manu").value;
             method=document.getElementById("method").value;
             var e=document.getElementById("efficiency").value;
             if(kataskeyasths=="BECKMAN" && method=="RIA"){
                tTracer=640;
                tVolTracer=45;
                VolPerTube=0.4;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=25;
                perLiq=100-perSol;
                document.getElementById("measCpmPerTube").value="";
             }
             else if(kataskeyasths=="DIASOURCE" && method=="RIA"){
                tTracer=190;
                tVolTracer=55;
                VolPerTube=0.5;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=25;
                perLiq=100-perSol;
                document.getElementById("measCpmPerTube").value="";
             }
             else if(method=="RIA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=25;
                perLiq=100-perSol;
            }
            else if(method=="IRMA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=6;
                perLiq=100-perSol;
            }
             break;
             case "hCG":
             kataskeyasths=document.getElementById("manu").value;
             method=document.getElementById("method").value;
             var e=document.getElementById("efficiency").value;
             if(kataskeyasths=="BECKMAN" && method=="RIA"){
                tTracer=325;
                tVolTracer=22;
                VolPerTube=0.2;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=25;
                perLiq=100-perSol;
                document.getElementById("measCpmPerTube").value="";
             }
             else if(method=="RIA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=25;
                perLiq=100-perSol;
            }
            else if(method=="IRMA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=6;
                perLiq=100-perSol;
            }
             break;
             case "LH":
             kataskeyasths=document.getElementById("manu").value;
             method=document.getElementById("method").value;
             var e=document.getElementById("efficiency").value;    
             if(kataskeyasths=="BECKMAN" && method=="IRMA"){
                tTracer=370;
                tVolTracer=5.5;
                VolPerTube=0.05;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=6;
                perLiq=100-perSol;
                document.getElementById("measCpmPerTube").value="";

             }
             else if(kataskeyasths=="IZOTOP" && method=="IRMA"){
                tTracer=740;
                tVolTracer=21;
                VolPerTube=0.2;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=6;
                perLiq=100-perSol;
                document.getElementById("measCpmPerTube").value="";
             }
             else if(kataskeyasths=="DIASOURCE" && method=="IRMA"){
                tTracer=700;
                tVolTracer=5.5;
                VolPerTube=0.05;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=6;
                perLiq=100-perSol;
                document.getElementById("measCpmPerTube").value="";
             }
             else if(method=="RIA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=25;
                perLiq=100-perSol;
            }
            else if(method=="IRMA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=6;
                perLiq=100-perSol;
            }
            break;
            case "FSH":
            kataskeyasths=document.getElementById("manu").value;
            method=document.getElementById("method").value;
            var e=document.getElementById("efficiency").value; 
            if(kataskeyasths=="BECKMAN" && method=="IRMA"){
                tTracer=370;
                tVolTracer=5.5;
                VolPerTube=0.05;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=6;
                perLiq=100-perSol;
                document.getElementById("measCpmPerTube").value="";

             }
             else if(kataskeyasths=="IZOTOP" && method=="IRMA"){
                tTracer=740;
                tVolTracer=21;
                VolPerTube=0.2;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=6;
                perLiq=100-perSol;
                document.getElementById("measCpmPerTube").value="";
             }
             else if(kataskeyasths=="DIASOURCE" && method=="IRMA"){
                tTracer=700;
                tVolTracer=5.5;
                VolPerTube=0.05;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=6;
                perLiq=100-perSol;
                document.getElementById("measCpmPerTube").value="";
             }   
             else if(method=="RIA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=25;
                perLiq=100-perSol;
            }
            else if(method=="IRMA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=6;
                perLiq=100-perSol;
            }
            break;
            case "PROLACTIN":
             kataskeyasths=document.getElementById("manu").value;
             method=document.getElementById("method").value;
             var e=document.getElementById("efficiency").value; 
             if(kataskeyasths=="BECKMAN" && method=="IRMA"){
                tTracer=370;
                tVolTracer=55;
                VolPerTube=0.5;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=6;
                perLiq=100-perSol;
                document.getElementById("measCpmPerTube").value="";

             }
             else if(kataskeyasths=="IZOTOP" && method=="IRMA"){
                tTracer=740;
                tVolTracer=21;
                VolPerTube=0.2;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=6;
                perLiq=100-perSol;
                document.getElementById("measCpmPerTube").value="";
             }
             else if(method=="RIA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=25;
                perLiq=100-perSol;
            }
            else if(method=="IRMA"){
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                document.getElementById("measCpmPerTube").value=0;
                document.getElementById("measRadPerTube").value=0;
                perSol=6;
                perLiq=100-perSol;
            }
            break;
            case "TESTOSTERONE":
             kataskeyasths=document.getElementById("manu").value;
             method=document.getElementById("method").value;
             var e=document.getElementById("efficiency").value; 
                if(kataskeyasths=="BECKMAN" && method=="RIA"){
                    tTracer=370;
                    tVolTracer=33;
                    VolPerTube=0.3;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=25;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
    
                 }
                 else if(kataskeyasths=="IZOTOP" && method=="RIA"){
                    tTracer=260;
                    tVolTracer=44;
                    VolPerTube=0.4;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=25;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
                 }
                 else if(kataskeyasths=="DIASOURCE" && method=="RIA"){
                    tTracer=180;
                    tVolTracer=5;
                    VolPerTube=0.5;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=25;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
                 }
                 else if(method=="RIA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=25;
                    perLiq=100-perSol;
                }
                else if(method=="IRMA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=6;
                    perLiq=100-perSol;
                }
                break;
                case "PTH":
                 kataskeyasths=document.getElementById("manu").value;
                 method=document.getElementById("method").value;
                 var e=document.getElementById("efficiency").value; 
                 if(kataskeyasths=="BECKMAN" && method=="IRMA"){
                    tTracer=855;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=6;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
                 }
                 else if(kataskeyasths=="DIASOURCE" && method=="IRMA"){
                    tTracer=680;
                    tVolTracer=10.5;
                    VolPerTube=0.1;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=6;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
                 }
                 else if(method=="RIA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=25;
                    perLiq=100-perSol;
                }
                else if(method=="IRMA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=6;
                    perLiq=100-perSol;
                }
                break;
                case "RENIN ACTIVE":
                 kataskeyasths=document.getElementById("manu").value;
                 method=document.getElementById("method").value;
                 var e=document.getElementById("efficiency").value; 
                 if(kataskeyasths=="BECKMAN"){
                    document.getElementById("method").value="IRMA";
                    tTracer=370;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=6;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
                 }
                 else if(method=="RIA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=25;
                    perLiq=100-perSol;
                }
                else if(method=="IRMA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=6;
                    perLiq=100-perSol;
                }
                break;
                case "INSULIN":
                kataskeyasths=document.getElementById("manu").value;
                method=document.getElementById("method").value;
                var e=document.getElementById("efficiency").value; 
                if(kataskeyasths=="BECKMAN" && method=="IRMA"){
                    tTracer=640;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=6;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
                 }
                 else if(kataskeyasths=="DIASOURCE" && method=="IRMA"){
                    tTracer=350;
                    tVolTracer=5.5;
                    VolPerTube=0.05;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=6;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
                 }
                 else if(method=="RIA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=25;
                    perLiq=100-perSol;
                }
                else if(method=="IRMA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=6;
                    perLiq=100-perSol;
                }
                break;
                case "C-PEPTIDE":
                kataskeyasths=document.getElementById("manu").value;
                method=document.getElementById("method").value;
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="BECKMAN" && method=="IRMA"){
                    tTracer=640;
                    tVolTracer=17;
                    VolPerTube=0.15;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=6;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
    
                 }
                 else if(kataskeyasths=="IZOTOP" && method=="IRMA"){
                    tTracer=740;
                    tVolTracer=21;
                    VolPerTube=0.2;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=6;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
                 }
                 else if(kataskeyasths=="DIASOURCE" && method=="RIA"){
                    tTracer=175;
                    tVolTracer=6;
                    VolPerTube=0.05;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=25;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
                 } 
                 else if(method=="RIA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=25;
                    perLiq=100-perSol;
                }
                else if(method=="IRMA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=6;
                    perLiq=100-perSol;
                }
                break;
                case "β-HCG":
                 kataskeyasths=document.getElementById("manu").value;
                 method=document.getElementById("method").value;
                 var e=document.getElementById("efficiency").value;
                 if(kataskeyasths=="BECKMAN" && method=="IRMA"){
                    tTracer=650;
                    tVolTracer=22;
                    VolPerTube=0.2;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=6;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
    
                 }
                 else if(kataskeyasths=="IZOTOP" && method=="IRMA"){
                    tTracer=740;
                    tVolTracer=32;
                    VolPerTube=0.3;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=6;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
                 }
                 else if(kataskeyasths=="DIASOURCE" && method=="IRMA"){
                    tTracer=750;
                    tVolTracer=22;
                    VolPerTube=0.2;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=6;
                    perLiq=100-perSol;
                    document.getElementById("measCpmPerTube").value="";
                 }
                 else if(method=="RIA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=25;
                    perLiq=100-perSol;
                }
                else if(method=="IRMA"){
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    document.getElementById("measCpmPerTube").value=0;
                    document.getElementById("measRadPerTube").value=0;
                    perSol=6;
                    perLiq=100-perSol;
                }
                break;
                
    }
    document.getElementById("tTracer").value=tTracer.toFixed(2);
   document.getElementById("tVolTracer").value=tVolTracer.toFixed(2);
   document.getElementById("VolPerTube").value=VolPerTube.toFixed(2);
   document.getElementById("theoRadPerTube").value=theoRadPerTube.toFixed(3);
   document.getElementById("theoCpmPerTube").value=theoCpmPerTube.toFixed(2);
   document.getElementById("perSol").value=perSol.toFixed(2);
   document.getElementById("perLiq").value=perLiq.toFixed(2);
}
 
