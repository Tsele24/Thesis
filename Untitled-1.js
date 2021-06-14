function Delete(y){
    let javascriptrow=y.parentNode.parentNode //διαβάζει τον δείκτη της σειράς που πατήθηκε το delete
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
    for(var i=1;i<rows.length-1;i++){
        alldates[i-1]=rows[i][0]
    }
    dates=alldates.filter((v, i, a) => a.indexOf(v) === i);   //αφαίρεση των όμοιων τιμών
for(var i=0;i<dates.length;i++){
  Roows[i] = RoWs.filter(function(x){
      return x[0]==dates[i];
  }) }
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
 RoWs.pop();
 RoWs.shift();
 let Allsolidwastes=[];
 let AllLiquidwastes=[];
 let AllWastes=0;
 Allsolidwastes=RoWs.map(d => parseFloat(d[4]));// επιλέγω από έναν πίνακα 2d μία στήλη την οποία αθροίζω μετά
 AllLiquidwastes=RoWs.map(d => parseFloat(d[5]));// επιλέγω από έναν πίνακα 2d μία στήλη την οποία αθροίζω μετά
  Allsolidwastes=Allsolidwastes.reduce((a,b)=>a+b,0).toFixed(2);
  AllLiquidwastes=AllLiquidwastes.reduce((a,b)=>a+b,0).toFixed(2);
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
 let table2=document.getElementById("csv_table_Sums")
 while(table2.rows.length>1){
        table2.deleteRow(1);
 }
 for(var i=0;i<dates.length;i++){
    var Rrow=table2.insertRow(i+1)
    let Cells=Rrow.insertCell(0);
     Cells.innerHTML=dates[i];
    }
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