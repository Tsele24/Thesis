"use strict";

// function Dis(){
//     var Kit=document.getElementById("kit").value;
//     switch (Kit){
//         case "FT3":
            
//                 document.getElementById("manu").options[1].disabled=false;
//                 document.getElementById("manu").options[7].disabled=false;
//                 // document.getElementById("manu").options[1].style="color: blue;font-weight:bold;";
//                 // document.getElementById("manu").options[7].style="color: blue;font-weight:bold;";
//             for(let i=2;i<7;i++){
//                 document.getElementById("manu").options[i].disabled=true;   
//             }
//             for(let i=8;i<11;i++){
//                 document.getElementById("manu").options[i].disabled=true;
//             }
            
//            break;
//         case "FT4":
//                         document.getElementById("manu").options[1].disabled=false;
//                         document.getElementById("manu").options[5].disabled=false;
//                         document.getElementById("manu").options[6].disabled=true;
//                         document.getElementById("manu").options[7].disabled=false;
                
//                 for(let i=8;i<11;i++){
//                         document.getElementById("manu").options[i].disabled=true;   
//                     }
//                 for(let i=2;i<5;i++){
//                         document.getElementById("manu").options[i].disabled=true;   
//                     }
            
//             break;
//         case "TSH":

//             document.getElementById("manu").options[1].disabled=false;
//             document.getElementById("manu").options[4].disabled=false;
//             document.getElementById("manu").options[5].disabled=false;
//             for(let i=2;i<4;i++){
//                         document.getElementById("manu").options[i].disabled=true;
//                 }
//                 for(let i=6;i<11;i++){
//                         document.getElementById("manu").options[i].disabled=true;   
//                     }
               
//             break;
//         case "TgAb":
//             document.getElementById("manu").options[1].disabled=true
//             document.getElementById("manu").options[2].disabled=false;
//             document.getElementById("manu").options[8].disabled=false;
//             document.getElementById("manu").options[9].disabled=true;
//             document.getElementById("manu").options[10].disabled=false;
//             for(let i=3;i<8;i++){
//                         document.getElementById("manu").options[i].disabled=true; 
//             }
            
//             break;
//         case "TPO":
//             for(let i=1;i<8;i++){
//                         document.getElementById("manu").options[i].disabled=false;
//                 }
//                         document.getElementById("manu").options[1].disabled=true;
//                         document.getElementById("manu").options[2].disabled=true;
//             for(let i=4;i<7;i++){
//                         document.getElementById("manu").options[i].disabled=true;
//             }
            
//         break;
//         case "rTSH-Ab":
//             for(let i=1;i<8;i++){
//                         document.getElementById("manu").options[i].disabled=false;
//                 }
//                         document.getElementById("manu").options[1].disabled=true;
//             for(let i=3;i<7;i++){
//                         document.getElementById("manu").options[i].disabled=true; 
//             }
           
//         break;
//         case "Tg":
//             document.getElementById("manu").options[4].disabled=false;
//             document.getElementById("manu").options[7].disabled=false;
//             document.getElementById("manu").options[8].disabled=true;
//             document.getElementById("manu").options[9].disabled=true;
//             document.getElementById("manu").options[10].disabled=false;
//             for(let i=1;i<4;i++){
//                         document.getElementById("manu").options[i].disabled=true;
//             }

           
//         break;
//         case "CEA":
//             for(let i=5;i<11;i++){
//                         document.getElementById("manu").options[i].disabled=true;
//                 }
//                         document.getElementById("manu").options[1].disabled=false;
//                         document.getElementById("manu").options[2].disabled=true;
//                         document.getElementById("manu").options[3].disabled=true;
//                         document.getElementById("manu").options[4].disabled=false;
                       
                       
               
//         break;
//         case "CA 19-9":
//                 document.getElementById("manu").options[1].disabled=false;
//                 document.getElementById("manu").options[7].disabled=false;
//                 for(let i=2;i<7;i++){
//                         document.getElementById("manu").options[i].disabled=true;   
//                 }
//                 for(let i=8;i<11;i++){
//                     document.getElementById("manu").options[i].disabled=true;   
//             }
               
//         break;
//         case "AchRAb":
            
//                         document.getElementById("manu").options[4].disabled=false;
//                         document.getElementById("manu").options[5].disabled=true;
//                         document.getElementById("manu").options[6].disabled=false;
//                         for(let i=7;i<11;i++){
//                             document.getElementById("manu").options[i].disabled=true;   
//                     }
                        
//         break;
//         case "CA 125":
            
//                  document.getElementById("manu").options[1].disabled=false;
//                  document.getElementById("manu").options[7].disabled=false;
                
//                 for(let i=2;i<7;i++){
//                         document.getElementById("manu").options[i].disabled=true;   
//                 }
//                 for(let i=8;i<11;i++){
//                     document.getElementById("manu").options[i].disabled=true;   
//                 }
                
//         break;
//         case "CA 15-3":
//                  document.getElementById("manu").options[1].disabled=false;
//                  document.getElementById("manu").options[7].disabled=false;
                
//                 for(let i=2;i<7;i++){
//                         document.getElementById("manu").options[i].disabled=true;   
//                 }
//                 for(let i=8;i<11;i++){
//                     document.getElementById("manu").options[i].disabled=true;   
//                 }
                
//         break;
//         case "AFP":
//             document.getElementById("manu").options[1].disabled=false;
//             document.getElementById("manu").options[7].disabled=false;
           
//            for(let i=2;i<7;i++){
//                    document.getElementById("manu").options[i].disabled=true;   
//            }
//            for(let i=8;i<11;i++){
//                document.getElementById("manu").options[i].disabled=true;   
//            }
            
//         break;
//         case "TPSA":
//             document.getElementById("manu").options[1].disabled=false;
//             document.getElementById("manu").options[7].disabled=false;
//             document.getElementById("manu").options[8].disabled=false;
//             for(let i=2;i<7;i++){
//                 document.getElementById("manu").options[i].disabled=true;   
//              }
//              document.getElementById("manu").options[9].disabled=true;
//              document.getElementById("manu").options[10].disabled=true;
//         break;
//         case "FPSA":
//             document.getElementById("manu").options[1].disabled=false;
//             document.getElementById("manu").options[8].disabled=false;
//             for(let i=2;i<8;i++){
//                 document.getElementById("manu").options[i].disabled=true;   
//              }
//              document.getElementById("manu").options[9].disabled=true;
//              document.getElementById("manu").options[10].disabled=true;
//         break;
//         case "RENIN":
//             document.getElementById("manu").options[1].disabled=false;
//             document.getElementById("manu").options[10].disabled=false;
//                 for(let i=2;i<10;i++){
//                         document.getElementById("manu").options[i].disabled=true;   
//                 }
                
//         break;
//         case "ALDO":
//             document.getElementById("manu").options[1].disabled=false;
//             document.getElementById("manu").options[9].disabled=false;
        
//             for(let i=2;i<9;i++){
//                     document.getElementById("manu").options[i].disabled=true;   
//             }
                
//         break;
//         case "Δ4":
//             document.getElementById("manu").options[1].disabled=false;
//             document.getElementById("manu").options[2].disabled=true;
//             document.getElementById("manu").options[3].disabled=true;
//             document.getElementById("manu").options[4].disabled=false;
//             for(let i=5;i<11;i++){
//                         document.getElementById("manu").options[i].disabled=true;
//                 }
                        
                       
//         break;
//         case "CALCITONIN":
//             document.getElementById("manu").options[4].disabled=false;
//             document.getElementById("manu").options[5].disabled=true;
//             document.getElementById("manu").options[6].disabled=true;
//             document.getElementById("manu").options[7].disabled=false;
//             for(let i=1;i<4;i++){
//                 document.getElementById("manu").options[i].disabled=true;
//              }
//              for(let i=8;i<11;i++){
//                 document.getElementById("manu").options[i].disabled=true;
//              }
           
//         break;
//         case "25-OH":
//             document.getElementById("manu").options[1].disabled=false;
//             document.getElementById("manu").options[2].disabled=true;
//             document.getElementById("manu").options[3].disabled=true;
//             document.getElementById("manu").options[4].disabled=false;
//             for(let i=5;i<11;i++){
//                         document.getElementById("manu").options[i].disabled=true;
//                 }
               
//         break;
//         case "ACTH":
//             document.getElementById("manu").options[1].disabled=false;
//             document.getElementById("manu").options[2].disabled=false;
//             document.getElementById("manu").options[3].disabled=false;
//             for(let i=4;i<11;i++){
//                 document.getElementById("manu").options[i].disabled=true;
//         }
//         break;
//         case "Other":
//             for(let i=1;i<11;i++){
//                         document.getElementById("manu").options[i].disabled=false;
//                 }
                
//         break;
//     }
//     }
    
    
    
    
    function St_values(){
        let Kit=document.getElementById("kit").value;
        let tubesperkit=0;
        let tTracer=0;
        let tVolTracer=0;
        let VolPerTube=0;
        let theoRadPerTube=0;
        let theoCpmPerTube=0;
        let perSol=0;
        let perLiq=0;
        let kataskeyasths="";
     
       switch (Kit){
            case "FT3":
               kataskeyasths=document.getElementById("manu").value;
               document.getElementById("method").value="RIA";
               var e=document.getElementById("efficiency").value;
               if(kataskeyasths=="BECKMAN"){
                tubesperkit=100;
                tTracer=225;
                tVolTracer=45;
                VolPerTube=0.4;
                theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=47;
                perLiq=100-perSol;
                document.getElementById("method").options[2].disabled=true;
                document.getElementById("measCpmPerTube").value=22573;
               }
               else if(kataskeyasths=="IZOTOP"){
                tubesperkit=100;
                tTracer=300;
                tVolTracer=55;
                VolPerTube=0.5;
                theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=28;
                perLiq=100-perSol;
                document.getElementById("method").options[2].disabled=true;
                document.getElementById("measCpmPerTube").value=69292;
               }
               else if(kataskeyasths=="Other"){
                   document.getElementById("umanu").disabled=false;
               }
               else {
                tubesperkit=0;
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                perSol=0;
                document.getElementById("measCpmPerTube").value=0;
            }
                                     
            break;
            case "FT4":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="RIA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="BECKMAN"){
                    tubesperkit=100;
                    tTracer=310;
                    tVolTracer=45;
                    VolPerTube=0.4;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=24;
                    perLiq=100-perSol;
                    document.getElementById("method").options[2].disabled=true;
                    document.getElementById("measCpmPerTube").value=37957;
                }
                else if(kataskeyasths=="IZOTOP"){
                    tubesperkit=100;
                    tTracer=260;
                    tVolTracer=55;
                    VolPerTube=0.5;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=34;
                    perLiq=100-perSol;
                    document.getElementById("method").options[2].disabled=true;
                    document.getElementById("measCpmPerTube").value=62620;
                }
                else if(kataskeyasths=="DIAZORIN"){
                    tubesperkit=200;
                    tTracer=300;
                    tVolTracer=110;
                    VolPerTube=0.5;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=19;
                    perLiq=100-perSol;
                    document.getElementById("method").options[2].disabled=true;
                    document.getElementById("measCpmPerTube").value=31795;
                }
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
           
            
            break;
            case "TSH":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="IRMA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="BECKMAN"){
                    tubesperkit=100;
                    tTracer=515;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=4;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=68327;
                }
                else if(kataskeyasths=="DIASOURCE"){
                    tubesperkit=96;
                    tTracer=700;
                    tVolTracer=5.5;
                    VolPerTube=0.05;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=3;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=207836;
                }
                else if(kataskeyasths=="DIASORIN"){
                    tubesperkit=200;
                    tTracer=1200;
                    tVolTracer=42;
                    VolPerTube=0.2;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=4;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=182203;
                }
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
                
            break;
            case "TgAb":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="RIA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="BRAHMS"){
                    tubesperkit=100;
                    tTracer=142;
                    tVolTracer=22;
                    VolPerTube=0.2;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=23;
                    perLiq=100-perSol;
                    document.getElementById("method").options[2].disabled=true;
                    document.getElementById("measCpmPerTube").value=28686;
                }
                else if(kataskeyasths=="ZENTECH"){
                    tubesperkit=100;
                    tTracer=137;
                    tVolTracer=22;
                    VolPerTube=0.2;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=20;
                    perLiq=100-perSol;
                    document.getElementById("method").options[2].disabled=true;
                    document.getElementById("measCpmPerTube").value=33760;
                }
                else if(kataskeyasths=="LAB SUPPLIES"){
                    tubesperkit=100;
                    tTracer=260;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=33;
                    perLiq=100-perSol;
                    document.getElementById("method").options[2].disabled=true;
                    document.getElementById("measCpmPerTube").value=62993;
                }
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
                
            break;
            case "TPO":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="RIA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="IZOTOP"){
                    tubesperkit=100;
                    tTracer=260;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=25;
                    perLiq=100-perSol;
                    document.getElementById("method").options[2].disabled=true;
                    document.getElementById("measCpmPerTube").value=48361;
                }
                else if(kataskeyasths=="ZENTECH"){
                    tubesperkit=100;
                    tTracer=114;
                    tVolTracer=22;
                    VolPerTube=0.2;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=22;
                    perLiq=100-perSol;
                    document.getElementById("method").options[2].disabled=true;
                    document.getElementById("measCpmPerTube").value=26388;
                }
                else if(kataskeyasths=="ZENTECH"){
                    tubesperkit=100;
                    tTracer=260;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=25;
                    perLiq=100-perSol;
                    document.getElementById("method").options[2].disabled=true;
                    document.getElementById("measCpmPerTube").value=62731;
                }

                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
            break;
            case "rTSH-Ab":
                
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="RIA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="BRAHMS"){
                    document.getElementById("manu").value="BRAHMS";
                    document.getElementById("method").value="RIA";   
                    var e=document.getElementById("efficiency").value;   
                    tubesperkit=100;
                    tTracer=80;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=31;
                    perLiq=100-perSol;
                    document.getElementById("method").options[2].disabled=true;
                    document.getElementById("measCpmPerTube").value=21711;
                }
                
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
            break;
            case "Tg":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="IRMA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="IZOTOP"){
                    tubesperkit=100;
                    tTracer=980;
                    tVolTracer=21;
                    VolPerTube=0.2;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=4.80;
                    perLiq=100.00-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=162174;
                }
                else if(kataskeyasths=="ZENTECH"){
                    tubesperkit=100;
                    tTracer=480;
                    tVolTracer=27.5;
                    VolPerTube=0.25;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=5;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=126653;
                }
                else if(kataskeyasths=="ZENTECH"){
                    tubesperkit=100;
                    tTracer=867;
                    tVolTracer=27;
                    VolPerTube=0.25;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=9;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=219812;
                }
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
            break;
            case "CEA":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="IRMA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="DIASOURCE"){
                    tubesperkit=96;
                    tTracer=310;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=5;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=113234;
                }
                else if(kataskeyasths=="BECKMAN"){
                    tubesperkit=100;
                    tTracer=640;
                    tVolTracer=33;
                    VolPerTube=0.3;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=2;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=110601;
                }
                
                
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
            break;
            case "CA 19-9":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="IRMA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="IZOTOP"){
                    tubesperkit=100;
                    tTracer=980;
                    tVolTracer=21;
                    VolPerTube=0.2;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=3;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=225347;
                }
                
                else if(kataskeyasths=="BECKMAN"){
                    tubesperkit=100;
                    tTracer=310;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=7;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=67454;
                }
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
            break;
            case "AchRAb":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="IRMA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="IBL"){
                    tubesperkit=100;
                    tTracer=300;
                    tVolTracer=10.8;
                    VolPerTube=0.1;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=5;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=45631;
                }
                else if(kataskeyasths=="DIASOURCE"){
                    tubesperkit=100;
                    tTracer=300;
                    tVolTracer=10.8;
                    VolPerTube=0.1;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=14;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=52774;
                }
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
             break;
            case "CA 125":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="IRMA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="IZOTOP"){
                    
                    tubesperkit=100;
                    tTracer=980;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=2;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=238846;
                }
                if(kataskeyasths=="BECKMAN"){
                    tubesperkit=100;
                    tTracer=480;
                    tVolTracer=33;
                    VolPerTube=0.3;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=8;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=99043;
                }
               
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
            break;
            case "CA 15-3":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="IRMA";
                var e=document.getElementById("efficiency").value;

                if(kataskeyasths=="BECKMAN"){
                    tubesperkit=100;
                    tTracer=600;
                    tVolTracer=22;
                    VolPerTube=0.2;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=9;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=130549;
                }
                else if(kataskeyasths=="IZOTOP"){
                    tubesperkit=100;
                    tTracer=980;
                    tVolTracer=21;
                    VolPerTube=0.2;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=3;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=240097;
                }
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
            break;
            case "AFP":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="IRMA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="IZOTOP"){
                    tubesperkit=100;
                    tTracer=740;
                    tVolTracer=21;
                    VolPerTube=0.2;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=3.87;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=125641;
                }
                else if(mkataskeyasths=="BECKMAN"){
                    tubesperkit=100;
                    tTracer=320;
                    tVolTracer=22;
                    VolPerTube=0.2;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=8;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=200222;
                }
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
             break;
            case "TPSA":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="IRMA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="IZOTOP"){
                    tubesperkit=100;
                    tTracer=980;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=7;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=178269;
                }
                else if(kataskeyasths=="BECKMAN"){
                    tubesperkit=100;
                    tTracer=580;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=3;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=102182;
                }
                else if(kataskeyasths=="LAB SUPPLIES"){
                    tubesperkit=100;
                    tTracer=980;
                    tVolTracer=21;
                    VolPerTube=0.2;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=7;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=252404;
                }
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
             break;
            case "FPSA":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="IRMA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="LAB SUPPLIES"){
                    tubesperkit=100;
                    tTracer=840;
                    tVolTracer=21;
                    VolPerTube=0.2;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=11;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=171319;
                }
               
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
              break;
            case "RENIN":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="RIA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="BECKMAN")
               {
                tubesperkit=100;
                tTracer=260;
                tVolTracer=11;
                VolPerTube=0.1;
                theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=17;
                perLiq=100-perSol;
                document.getElementById("method").options[2].disabled=true;
                document.getElementById("measCpmPerTube").value=32472;
               }
               else if(kataskeyasths=="ZENTECH"){
                tubesperkit=100;
                tTracer=148;
                tVolTracer=50;
                VolPerTube=0.5;
                theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=23;
                perLiq=100-perSol;
                document.getElementById("method").options[2].disabled=true;
                document.getElementById("measCpmPerTube").value=36605;
               }
               else if(kataskeyasths=="Other"){
                document.getElementById("umanu").disabled=false;
            }
            else {
                tubesperkit=0;
                tTracer=0;
                tVolTracer=0;
                VolPerTube=0;
                perSol=0;
                document.getElementById("measCpmPerTube").value=0;
            }
             break;
            case "ALDO":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="RIA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="BECKMAN"){
                tubesperkit=100;
                tTracer=185;
                tVolTracer=55;
                VolPerTube=0.5;
                theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=20.48;
                perLiq=100-perSol;
                document.getElementById("method").options[2].disabled=true;
                document.getElementById("measCpmPerTube").value=11772;
                }
                else if(kataskeyasths=="RIAZENCO"){
                    tubesperkit=100;
                    tTracer=85;
                    tVolTracer=50;
                    VolPerTube=0.5;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=27;
                    perLiq=100-perSol;
                    document.getElementById("method").options[2].disabled=true;
                    document.getElementById("measCpmPerTube").value=27135;
                }
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
            break;
            case "Δ4":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="RIA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="DIASOURCE"){
                    tubesperkit=100;
                    tTracer=111;
                    tVolTracer=26;
                    VolPerTube=0.25;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=19;
                    perLiq=100-perSol;
                    document.getElementById("method").options[2].disabled=true;
                    document.getElementById("measCpmPerTube").value=22634
                }
                else if(mkataskeyasths=="BECKMAN"){
                    tubesperkit=100;
                    tTracer=185;
                    tVolTracer=55;
                    VolPerTube=0.5;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=21;
                    perLiq=100-perSol;
                    document.getElementById("method").options[2].disabled=true;
                    document.getElementById("measCpmPerTube").value=29039;
                }
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
             break;
            case "CALCITONIN":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="IRMA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="IZOTOP"){
                    tubesperkit=100;
                    tTracer=740;
                    tVolTracer=11;
                    VolPerTube=0.1;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=3.22;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=191536;
                }
                else if(kataskeyasths=="DIASOURCE"){
                    tubesperkit=96;
                    tTracer=720;
                    tVolTracer=5.5;
                    VolPerTube=0.05;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=9;
                    perLiq=100-perSol;
                    document.getElementById("method").options[1].disabled=true;
                    document.getElementById("measCpmPerTube").value=198902;
                }
                else if(mkataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
            break;
            case "25-OH":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="RIA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="BECKMAN"){
                
                tubesperkit=96;
                tTracer=160;
                tVolTracer=6;
                VolPerTube=0.05;
                theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=22.75;
                perLiq=100-perSol;
                document.getElementById("method").options[2].disabled=true;
                document.getElementById("measCpmPerTube").value=36679;
                }
                else if(kataskeyasths=="DIASOURCE"){
                    tubesperkit=96;
                    tTracer=160;
                    tVolTracer=6;
                    VolPerTube=0.05;
                    theoRadPerTube=(tTracer/tVolTracer)*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=26;
                    perLiq=100-perSol;
                    document.getElementById("method").options[2].disabled=true;
                    document.getElementById("measCpmPerTube").value=31975;
                }
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
            break;
            case "ACTH":
                 kataskeyasths=document.getElementById("manu").value;
                document.getElementById("method").value="RIA";
                var e=document.getElementById("efficiency").value;
                if(kataskeyasths=="BECKMAN"){
                    tubesperkit=100;
                    tTracer=814;
                    tVolTracer=10;
                    VolPerTube=0.1;
                    theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                    theoCpmPerTube=theoRadPerTube*e*600;
                    perSol=2;
                    perLiq=100-perSol;
                    document.getElementById("method").options[2].disabled=true;
                    document.getElementById("measCpmPerTube").value=175480;
                }
                else if(kataskeyasths=="BRAHMS"){
                tubesperkit=100;
                tTracer=506;
                tVolTracer=33;
                VolPerTube=0.3;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=9;
                perLiq=100-perSol;
                document.getElementById("method").options[2].disabled=true;
                document.getElementById("measCpmPerTube").value=140286;
                }
                else if(kataskeyasths=="CIS"){
                tubesperkit=96;
                tTracer=592;
                tVolTracer=10;
                VolPerTube=0.100;
                theoRadPerTube=tTracer/tVolTracer*VolPerTube;
                theoCpmPerTube=theoRadPerTube*e*600;
                perSol=5;
                perLiq=100-perSol;
                document.getElementById("method").options[2].disabled=true;
                document.getElementById("measCpmPerTube").value=151820;
                }
                else if(kataskeyasths=="Other"){
                    document.getElementById("umanu").disabled=false;
                }
                else {
                    tubesperkit=0;
                    tTracer=0;
                    tVolTracer=0;
                    VolPerTube=0;
                    perSol=0;
                    document.getElementById("measCpmPerTube").value=0;
                }
             break;
             case"Other":
             kataskeyasths=document.getElementById("manu").value;
             document.getElementById("ukit").disabled=false;
             if(kataskeyasths=="Other"){
                document.getElementById("umanu").disabled=false;
             }
             break;
    
       }
       

       //document.getElementById("tubesperkit").value=tubesperkit;
       document.getElementById("tTracer").value=tTracer.toFixed(2);
       document.getElementById("tVolTracer").value=tVolTracer.toFixed(2);
       document.getElementById("VolPerTube").value=VolPerTube.toFixed(2);
       document.getElementById("theoRadPerTube").value=theoRadPerTube.toFixed(3);
       document.getElementById("theoCpmPerTube").value=theoCpmPerTube.toFixed(2);
       document.getElementById("perSol").value=perSol.toFixed(2);
       document.getElementById("perLiq").value=perLiq.toFixed(2);
      
    }
    
    