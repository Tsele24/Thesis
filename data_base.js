"use strict";
var data_set=[["kit","manufacturer","method","tTracer","tVolume","ml_per_tube","actual_cpm_per_tube","%solid","%liquid"],
["T3","BECKMAN COULTER","RIA","165","21","0.200","","25","75"],
["T3","CIS BIO","RIA","150","105","1.000","","25","75"],
["T3","DIASOURCE","RIA","111","21","0.200","","25","75"],
["T3","IZOTOP","RIA","260","22","0.200","","25","75"],
["T4","BECKMAN COULTER","RIA","110","55","0.500","","25","75"],
["T4","CIS BIO","RIA","150","105","1.000","","25","75"],
["T4","DIASOURCE","RIA","111","21","0.200","","25","75"],
["T4","IZOTOP","RIA","260","11","0.100","","25","75"],
["FT3","BECKMAN COULTER","RIA","225","45","0.400","42504","47","53"],
["FT3","BRAHMS","RIA","225","45","0.400","42504","47","53"],
["FT3","CIS BIO","RIA","150","105","1.000","","25","75"],
["FT3","DIASOURCE","RIA","225","45","0.400","42504","47","53"],
["FT3","IZOTOP","RIA","300","55","0.500","69292","28","72"],
["FT4","BECKMAN COULTER","RIA","310","45","0.400","37957","24","76"],
["FT4","BRAHMS","RIA","150","55","0.500","31795","19","81"],
["FT4","CIS BIO","RIA","150","105","1.000","","25","75"],
["FT4","DIASORIN","RIA","150","55","0.500","31795","19","81"],
["FT4","DIASOURCE","RIA","310","45","0.400","37957","24","76"],
["FT4","IZOTOP","RIA","260","55","0.500","62620","34","66"],
["TSH","BECKMAN COULTER","IRMA","515","11","0.100","68327","4","96"],
["TSH","BRAHMS","IRMA","600","21","0.200","182203","4","96"],
["TSH","DIASORIN","IRMA","600","21","0.200","182203","4","96"],
["TSH","DIASOURCE","IRMA","700","5.5","0.050","207836","3","97"],
["TSH","IZOTOP","IRMA","980","12","0.100","","6","94"],
["TgAb","BECKMAN COULTER","RIA","325","55","0.500","","25","75"],
["TgAb","BRAHMS","RIA","142","22","0.200","28686","23","77"],
["TgAb","DIASOURCE","RIA","137","22","0.200","33760","20","80"],
["TgAb","IZOTOP","RIA","260","11","0.100","62993","33","67"],
["TPO","BECKMAN COULTER","RIA","640","22","0.200","","25","75"],
["TPO","BRAHMS","RIA","110","22","0.200","","25","75"],
["TPO","DIASOURCE","RIA","114","22","0.200","26388","22","78"],
["TPO","IZOTOP","RIA","260","11","0.100","62731","25","75"],
["Tg","BECKMAN COULTER","IRMA","480","27.5","0.250","","6","94"],
["Tg","BRAHMS","IRMA","867","27","0.250","219812","9","91"],
["Tg","CIS BIO","IRMA","481","42","0.400","","6","94"],
["Tg","DIASORIN","IRMA","867","27","0.250","219812","9","91"],
["Tg","DIASOURCE","IRMA","480","27.5","0.250","126653","5","95"],
["Tg","IZOTOP","IRMA","980","21","0.200","162174","5","95"],
["CEA","BECKMAN COULTER","IRMA","640","33","0.300","110601","2","98"],
["CEA","DIASOURCE","IRMA","440","5.5","0.050","113234","5","95"],
["CEA","IZOTOP","IRMA","740","21","0.200","","6","94"],
["CA 15-3","BECKMAN COULTER","IRMA","600","22","0.200","130549","9","91"],
["CA 15-3","DIASOURCE","IRMA","870","6","0.050","","6","94"],
["CA 15-3","IZOTOP","IRMA","980","21","0.200","240097","3","97"],
["CA 19-9","BECKMAN COULTER","IRMA","310","11","0.100","67454","7","93"],
["CA 19-9","DIASOURCE","IRMA","760","10.5","0.100","","6","94"],
["CA 19-9","IZOTOP","IRMA","980","21","0.200","225347","3","97"],
["CA 125","BECKMAN COULTER","IRMA","480","33","0.300","99043","8","92"],
["CA 125","DIASOURCE","IRMA","760","10.5","0.100","","6","94"],
["CA 125","IZOTOP","IRMA","980","11","0.100","238846","2","98"],
["AFP","BECKMAN COULTER","IRMA","320","22","0.200","200222","8","92"],
["AFP","DIASOURCE","IRMA","320","22","0.200","","6","94"],
["AFP","IZOTOP","IRMA","740","21","0.200","125641","4","96"],
["TPSA","BECKMAN COULTER","IRMA","580","11","0.100","102182","3","97"],
["TPSA","IZOTOP","IRMA","980","11","0.100","178269","7","93"],
["FPSA","BECKMAN COULTER","IRMA","275","5.5","0.100","","6","94"],
["FPSA","DIASOURCE","IRMA","740","21","0.200","","6","94"],
["FPSA","IZOTOP","IRMA","740","11","0.100","","6","94"],
["FPSA","LAB SUPPLIES","IRMA","840","21","0.200","171319","11","89"],
["FSH","BECKMAN COULTER","IRMA","370","5.5","0.050","","6","94"],
["FSH","DIASOURCE","IRMA","700","5.5","0.050","","6","94"],
["FSH","IZOTOP","IRMA","740","21","0.200","","6","94"],
["LH","BECKMAN COULTER","IRMA","370","5.5","0.050","","6","94"],
["LH","DIASOURCE","IRMA","700","5.5","0.050","","6","94"],
["LH","IZOTOP","IRMA","740","21","0.200","","6","94"],
["Prolactin","BECKMAN COULTER","IRMA","370","55","0.500","","6","94"],
["Prolactin","IZOTOP","IRMA","740","21","0.200","","6","94"],
["β-HCG","BECKMAN COULTER","IRMA","650","22","0.200","","6","94"],
["β-HCG","DIASOURCE","IRMA","750","22","0.200","","6","94"],
["β-HCG","IZOTOP","IRMA","740","32","0.300","","6","94"],
["17-OH-Progesterone","BECKMAN COULTER","RIA","640","45","0.400","","25","75"],
["17-OH-Progesterone","DIASOURCE","RIA","190","55","0.500","","25","75"],
["DHEA-S","BECKMAN COULTER","RIA","185","55","0.500","","25","75"],
["DHEA-S","DIASOURCE","RIA","450","55","0.500","","25","75"],
["DHEA-S","IZOTOP","RIA","275","55","0.500","","25","75"],
["ACTH","BECKMAN COULTER","IRMA","814","11","0.100","175480","2","98"],
["ACTH","BRAHMS","IRMA","506","33","0.300","140286","9","91"],
["ACTH","CIS BIO","IRMA","592","10","0.100","151820","5","95"],
["ACTH","DIASOURCE","IRMA","1020","10.5","0.100","","6","94"],
["Angiotensin","BECKMAN COULTER","RIA","260","11","0.100","35556","17","83"],
["Angiotensin","DIASOURCE","RIA","148","50","0.500","36605","23","77"],
["Aldosterone","BECKMAN COULTER","RIA","185","55","0.500","15798","20","80"],
["Aldosterone","DIASOURCE","RIA","85","50","0.500","","25","75"],
["Δ4-Androstenedione","BECKMAN COULTER","RIA","185","55","0.500","29039","21","79"],
["Δ4-Androstenedione","DIASOURCE","RIA","111","26","0.250","22634","19","81"],
["Calcitonin","BECKMAN COULTER","IRMA","720","5.5","0.050","","6","94"],
["Calcitonin","CIS BIO","IRMA","611","11","0.100","","6","94"],
["Calcitonin","DIASOURCE","IRMA","720","5.5","0.050","198902","9","91"],
["Calcitonin","IZOTOP","IRMA","740","11","0.100","191536","3","97"],
["25-OH-Vitamin D","BECKMAN COULTER","RIA","160","6","0.050","36679","23","77"],
["25-OH-Vitamin D","DIASOURCE","RIA","160","6","0.050","31975","26","74"],
["PTH","BECKMAN COULTER","IRMA","855","11","0.100","","6","94"],
["PTH","DIASOURCE","IRMA","680","10.5","0.100","","6","94"],
["AchRAb","DIASOURCE","IRMA","300","10.8","0.100","52774","14","86"],
["AchRAb","IBL","IRMA","300","10.8","0.100","45631","5","95"],
["Insulin","BECKMAN COULTER","IRMA","640","11","0.100","","6","94"],
["Insulin","DIASOURCE","IRMA","350","5.5","0.050","","6","94"],
["C-peptide","BECKMAN COULTER","IRMA","640","17","0.150","","6","94"],
["C-peptide","DIASOURCE","RIA","175","6","0.050","","25","75"],
["C-peptide","IZOTOP","IRMA","740","21","0.200","","6","94"],
["Testosterone","BECKMAN COULTER","RIA","370","33","0.300","","25","75"],
["Testosterone","DIASOURCE","RIA","180","55","0.500","","25","75"],
["Testosterone","IZOTOP","RIA","260","44","0.400","","25","75"],
["rTSH-Ab","BECKMAN COULTER","RIA","180","11","0.100","","25","75"],
["rTSH-Ab","BRAHMS","RIA","80","11","0.100","21711","31","69"]]
function create_lists(){
    let allKits=data_set.map(f => f[0]);
    console.log(allKits);
    let Kits=allKits.filter((v, i, a) => a.indexOf(v) === i);
        Kits.shift();
        Kits.push("Other");
    console.log(Kits);
    let allManufacturers=data_set.map(f => f[1]);
    let Manufacturers=allManufacturers.filter((v,i,a) => a.indexOf(v) === i);
        Manufacturers.shift();
        Manufacturers.push("Other");
    console.log(Manufacturers);
    let selectKits=document.getElementById("kit");
    for(let i=0;i<Kits.length;i++){
        let opt=document.createElement("option");
            opt.appendChild(document.createTextNode(Kits[i]));
            opt.value=Kits[i];
            selectKits.appendChild(opt);
        }
    let selectManus=document.getElementById("manu");
    for(let i=0; i<Manufacturers.length;i++){
        let opt=document.createElement("option");
        opt.appendChild(document.createTextNode(Manufacturers[i]));
        opt.value=Manufacturers[i];
        selectManus.appendChild(opt);
        }
    }
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
    let data=data_set.filter(function(x){
        return x[0]==Kit && x[1]==manufacturer
    })
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
    let AvailableManu=AvailableData.map(f => f[1]);
    let AllManu=document.getElementById("manu").options;
    console.log(AllManu[1].value);
    let AllManu1=[];
    for(let i=0;i<AllManu.length;i++){
        AllManu1[i]=AllManu[i].value;
    }
    let positionsOfManu=[];
    for(let i=0;i<AvailableManu.length;i++){
       positionsOfManu[i]=AllManu1.indexOf(AvailableManu[i]);
    }
    for(let i=1;i<AllManu1.length;i++){
        document.getElementById("manu").options[i].style="color: black;font-weight:normal";
    }
    for(let i=0;i<positionsOfManu.length;i++){
        document.getElementById("manu").options[positionsOfManu[i]].style="color: rgb(53,96,145);font-weight:bold;";
    }
}
    
    
    
    
