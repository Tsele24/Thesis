"use strict";
var data_set=[["kit","manufacturer","method","tTracer","tVolume","ml_per_tube","actual_cpm_per_tube","%solid","%liquid"],
              ["FT3","IZOTOP","RIA","300","55","0.5","69292","28","72"],
              ["FT3","BECKMAN","RIA","225","45","0.4","42504","47","53"],
              ["FT4","IZOTOP","RIA","260","55","0.5","62620","34","66"],
              ["FT4","DIASORIN","RIA","300","110","0.5","31795","19","81"]
]
function Data_insert(){
    let Kit=document.getElementById("kit").value;
    let manufacturer=document.getElementById("manu").value;
    let tTracer=0;
    let tVolTracer=0;
    let VolPerTube=0;
    let theoCpmPerTube=0;
    let data=data_set.filter(function(x){
        return x[0]==Kit && x[1]==manufacturer
    })
    console.log(data);
    console.log(data[0][2]);
    tTracer=data[0][3];
    tVolTracer=data[0][4];
    VolPerTube=data[0][5];
    let theoRadPerTube=tTracer/tVolTracer*VolPerTube;
    document.getElementById("method").value=data[0][2];
    document.getElementById("tTracer").value=tTracer;
    document.getElementById("tVolTracer").value=tVolTracer;
    document.getElementById("VolPerTube").value=VolPerTube;
    document.getElementById("measCpmPerTube").value=data[0][6];
    document.getElementById("perSol").value=data[0][7];
    document.getElementById("perLiq").value=data[0][8];
    document.getElementById("theoRadPerTube").value=theoRadPerTube.toFixed(3);
    document.getElementById("theoCpmPerTube").value=theoCpmPerTube.toFixed(2);
}
function ria_irma_average(){
    let Kit=document.getElementById("kit").value;
    let manufacturer=document.getElementById("manu").value;
    let method=document.getElementById("method").value;
    let tTracer=0;
    let tVolTracer=0;
    let VolPerTube=0;
    let theoCpmPerTube=0;
    let theoRadPerTube=0;
    console.log(method);
    let data=data_set.filter(function(x){
        return x[0]==Kit && x[1]==manufacturer
    })
    console.log(data);
    console.log(data.length);
    if(method=="RIA"){
      if(data.length==1 && method==data[0][2]){
        tTracer=data[0][3];
        tVolTracer=data[0][4];
        VolPerTube=data[0][5];
        theoRadPerTube=tTracer/tVolTracer*VolPerTube;
        document.getElementById("method").value=data[0][2];
        document.getElementById("tTracer").value=tTracer;
        document.getElementById("tVolTracer").value=tVolTracer;
        document.getElementById("VolPerTube").value=VolPerTube;
        document.getElementById("measCpmPerTube").value=data[0][6];
        document.getElementById("perSol").value=data[0][7];
        document.getElementById("perLiq").value=data[0][8];
        document.getElementById("theoRadPerTube").value=theoRadPerTube.toFixed(3);
        document.getElementById("theoCpmPerTube").value=theoCpmPerTube.toFixed(2);
        Calc_kBq();
      }
      else{
        tTracer=0;
        tVolTracer=0;
        VolPerTube=0;
        theoRadPerTube=0;
        document.getElementById("tTracer").value=tTracer;
        document.getElementById("tVolTracer").value=tVolTracer;
        document.getElementById("VolPerTube").value=VolPerTube;
        document.getElementById("measCpmPerTube").value=0;
        document.getElementById("perSol").value=25;
        document.getElementById("perLiq").value=75;
        document.getElementById("theoRadPerTube").value=theoRadPerTube.toFixed(3);
        document.getElementById("theoCpmPerTube").value=theoCpmPerTube.toFixed(2);
        document.getElementById("measRadPerTube").value=0.00000;
      }
    }
    else if(method=="IRMA"){
        console.log(999);
        if(data.length==1 && method==data[0][2]){
            tTracer=data[0][3];
            tVolTracer=data[0][4];
            VolPerTube=data[0][5];
            theoRadPerTube=tTracer/tVolTracer*VolPerTube;
            document.getElementById("tTracer").value=tTracer;
            document.getElementById("tVolTracer").value=tVolTracer;
            document.getElementById("VolPerTube").value=VolPerTube;
            document.getElementById("measCpmPerTube").value=data[0][6];
            document.getElementById("perSol").value=data[0][7];
            document.getElementById("perLiq").value=data[0][8];
            document.getElementById("theoRadPerTube").value=theoRadPerTube.toFixed(3);
            document.getElementById("theoCpmPerTube").value=theoCpmPerTube.toFixed(2);
            Calc_kBq();
          }
          else{
            tTracer=0;
            tVolTracer=0;
            VolPerTube=0;
            theoRadPerTube=0;
            document.getElementById("tTracer").value=tTracer;
            document.getElementById("tVolTracer").value=tVolTracer;
            document.getElementById("VolPerTube").value=VolPerTube;
            document.getElementById("measCpmPerTube").value=0;
            document.getElementById("perSol").value=6;
            document.getElementById("perLiq").value=94;
            document.getElementById("theoRadPerTube").value=theoRadPerTube.toFixed(3);
            document.getElementById("theoCpmPerTube").value=theoCpmPerTube.toFixed(2);
            document.getElementById("measRadPerTube").value=0.00000;
          }
    }
}


function Dis(){
    let Kit=document.getElementById("kit").value;
    let AvailableData=data_set.filter(function(x){
        return x[0]==Kit
    });
    console.log(AvailableData);
    let AvailableManu=AvailableData.map(f => f[1]);
    console.log(AvailableManu);
    let AllManu=document.getElementById("manu").options;
    console.log(AllManu[1].value);
    let AllManu1=[];
    for(let i=0;i<AllManu.length;i++){
        AllManu1[i]=AllManu[i].value;
    }
    console.log(AllManu);
    console.log(AllManu1);
    let positionsOfManu=[];
    for(let i=0;i<AvailableManu.length;i++){
       positionsOfManu[i]=AllManu1.indexOf(AvailableManu[i]);
    }
    console.log(positionsOfManu);
    for(let i=1;i<AllManu1.length;i++){
        document.getElementById("manu").options[i].style="color: black;font-weight:normal";
    }
    for(let i=0;i<positionsOfManu.length;i++){
        document.getElementById("manu").options[positionsOfManu[i]].style="color: rgb(53,96,145);font-weight:bold;";
    }
}
    
    
    
    
