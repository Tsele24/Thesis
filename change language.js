
var greek_words_h5=["Ημερομηνία","Άνοιγμα αρχείου :","Εξέταση","Κατασκευαστής","RIA/IRMA",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#σωληναρίων","Οι υπολογισμοί να γίνουν με:","ονομαστική ενεργότητα του kit","Ονομ. ενεργότητα<br> tracer (kBq)",
"Συνολικός όγκος<br> tracer (ml)","Όγκος tracer ανά<br> σωληνάριο (ml)",
"Ενεργότητα ανά<br> σωληνάριο (kBq)","Κρούσεις ανά<br> σωληνάριο (cpm)","μετρούμενες τιμές cpm του kit","Τυπικές μετρ. κρούσεις <br>ανά σωληνάριο (cpm)"
,"Ίδιες μετρ.κρούσεις<br> ανά σωληνάριο (cpm)","Μετρ. ενεργότητα<br> ανά σωληνάριο (kBq)","&nbsp;","Ευαισθησία γ-counter (%)","cpm/kBq","Υπολογισμοί",
"Ποσοστό<br> στερεών (%)","Ποσοστό<br> υγρών (%)","Στερεά απόβλητα<br> (kBq)","Υγρά απόβλητα<br> (kBq)"];
var greek_words_underlined=["Συγκεντρωτικός Πίνακας","Πίνακας αθροισμάτων ανά ημέρα"];

var greek_words_h4=["Ημερομηνία","Kit","Κατασκευαστής","#σωληναρίων","Στερεά απόβλητα<br>(kBq)",
"Υγρά απόβλητα<br>(kBq)","Στερεά+Υγρά<br>(kBq)","Ημερομηνία","Άθροισμα Στερεών<br> αποβλήτων(kBq)",
"Άθροισμα Υγρών<br> αποβλήτων(kBq)","Συνολικά <br>απόβλητα(kBq)"];
var greek_words_buttons=["Υπολογισμός","Αποθήκευση","Εκτύπωση"];
var english_words_h5=["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date",
"&nbsp;Open file :","Assay","Manufucturer","RIA/IRMA","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#tubes"
,"Calculations will be made using:","nominal kit activity","Nominal tracer<br> activity (kBq)","Total tracer<br> volume (ml)",
"Tracer volume<br> per tube (ml)","Activity added  <br> per tube (kBq)","Counts added <br>per tube (cpm)","actual kit measured cpm","Typical counts added<br> per tube (cpm)",
"Own measured counts added<br> per tube (cpm)","Measured activity<br> per tube (kBq)","&nbsp;","γ-counter sensitivity (%)","cpm/kBq","Calculations",
"Solid<br> percentage (%)","Liquid <br>percentage (%)","Solid waste<br> (kBq)","Liquid waste<br> (kBq)"];
var english_words_underlined=["Concentrating Table","Sum Per Day Table"];
var english_words_buttons=["Calculation","Save","Print"];
var english_words_h4=["Date","Kit","Manufacturer","#tubes","Solid waste<br>(kBq)","Liquid waste<br>(kBq)","Solid+Liquid<br>(kBq)","Date","Sum Solid waste(kBq)","Sum Liquid waste(kBq)","Total waste(kBq)"]
function gr(){
  let Labels1=document.getElementsByTagName("h5");
  let Labels2=document.getElementsByTagName("u");
  let Labels3=document.getElementsByTagName("h4");
  let ButtoNs=document.getElementsByClassName("button");
  let CheckBox=document.getElementsByClassName("checkbox");
  console.log(Labels1);
  console.log(Labels2);
  console.log(Labels3);
  console.log(ButtoNs);
  console.log(CheckBox);
  console.log(greek_words_h5);
  console.log(english_words_h5)
  for(let i=0;i<7;i++){
    Labels1[i].innerHTML=greek_words_h5[i];
  }
  CheckBox[0].innerHTML="ονομαστική ενεργότητα του kit";
  for(let i=8;i<13;i++){
    Labels1[i].innerHTML=greek_words_h5[i];
  }
  CheckBox[1].innerHTML="μετρούμενες τιμές cpm του kit";
  Labels1[14].innerHTML=greek_words_h5[14];
  CheckBox[2].innerHTML="Ίδιες μετρ.κρούσεις <br> ανά σωληνάριο (cpm)";
  for(let i=16;i<25;i++){
    Labels1[i].innerHTML=greek_words_h5[i];
  }
  for(let i=0;i<2;i++){
    Labels2[i].innerHTML=greek_words_underlined[i];
  }
  for(let i=0;i<11;i++){
    Labels3[i].innerHTML=greek_words_h4[i];
  }
  console.log(document.getElementById("loaded_file").innerHTML)
  for(let i=0;i<3;i++){
    ButtoNs[i].innerHTML=greek_words_buttons[i];
  }
 document.getElementById("loaded_file").innerHTML="Άνοιγμα αρχείου";
 document.getElementById("loaded_file").style="padding-left:15px;padding-right:15px;"
}
function eng(){
  let Labels1=document.getElementsByTagName("h5");
  let Labels2=document.getElementsByTagName("u");
  let Labels3=document.getElementsByTagName("h4");
  let ButtoNs=document.getElementsByClassName("button");
  let CheckBox=document.getElementsByClassName("checkbox");
  console.log(Labels1);
  console.log(Labels2);
  console.log(Labels3);
  console.log(ButtoNs);
  console.log(CheckBox);
  for(let i=0;i<7;i++){
    Labels1[i].innerHTML=english_words_h5[i];
  }
  for(let i=8;i<13;i++){
    Labels1[i].innerHTML=english_words_h5[i];
  }
  CheckBox[0].innerHTML="nominal kit's activity";
  CheckBox[1].innerHTML="measured cpm kit's values";
  Labels1[14].innerHTML=english_words_h5[14];
  CheckBox[2].innerHTML="Your measured counts<br> per tube (cpm)";
  for(let i=16;i<25;i++){
    Labels1[i].innerHTML=english_words_h5[i];
  }
  for(let i=0;i<2;i++){
    Labels2[i].innerHTML=english_words_underlined[i];
  }
  for(let i=0;i<11;i++){
    Labels3[i].innerHTML=english_words_h4[i];
  }
  document.getElementById("loaded_file").innerHTML="Open file";
  document.getElementById("loaded_file").style="padding-left:40px;padding-right:40px;"
  for(let i=0;i<3;i++){
    ButtoNs[i].innerHTML=english_words_buttons[i];
  }

}