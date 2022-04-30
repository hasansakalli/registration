


function gonder(){
 const name= document.getElementById("name").value;
 const fatherName= document.getElementById("fatherName").value;
 const adresse= document.getElementById("adresse").value;
 const state= document.getElementById("state");
 const city= document.getElementById("city");
 const dob= document.getElementById("dob").value;
 const pincode= document.getElementById("pincode").value;
 const course= document.getElementById("course");
 const email= document.getElementById("email").value;
 const errormessage= document.getElementById("formValidator");
   
   

    document.getElementById("resultName").innerHTML=name;
    document.getElementById("resultFatherName").innerHTML=fatherName;
    document.getElementById("resultAdress").innerHTML=adresse;
    document.getElementById("resultDob").innerHTML=dob;
    document.getElementById("resultPincode").innerHTML=pincode;
    document.getElementById("resultEmail").innerHTML=email;
    
   
    if(male.checked){
        document.getElementById("resultGender").innerHTML="male";
    }else if(female.checked){
        document.getElementById("resultGender").innerHTML="female";
    } 
   
   document.querySelector(".form_header").style.display="none"
   document.querySelector(".form_result").style.display="block"
    
     
}

    function stategoster(){
    document.getElementById("resultState").innerHTML=state.options[state.selectedIndex].textContent; 
   }
   function citygoster(){
    document.getElementById("resultCity").innerHTML=city.options[city.selectedIndex].textContent;
     }

   function coursegoster(){
    document.getElementById("resultCourse").innerHTML=course.options[course.selectedIndex].textContent;
     }

    
  //-->
  function validator(){

    if( name == "") {
          
        errormessage.innerHTML="* Lütfen İsminizi giriniz."
        return false;
        name.focus();
        
      
     }
     if( fatherName == "") {
        errormessage.innerHTML="* Lütfen soyadınızı giriniz."
        return false;
        fatherName.focus();
       
      }

     
     if( state.options[state.selectedIndex].textContent=="" ) {
      
        errormessage.innerHTML="Lütfen bir ülke seçiniz."
        return false;
        state.focus();
         
        }
        if( city.options[city.selectedIndex].textContent=="" ) {
      
            errormessage.innerHTML="Lütfen bir dil seçiniz."
            return false;
            city.focus();
        
        }

        if( pincode.length < 6 ) {
      
            errormessage.innerHTML="Lütfen en az altı rakamlı pin giriniz."
            return false;
            pincode.focus();
         }
        if( course.options[course.selectedIndex].textContent=="" ) {
      
            errormessage.innerHTML="Lütfen ilgilendiğiniz kursu seçiniz."
            return false;
            course.focus();
        
        }
       
    
       
         atpos = email.indexOf("@");
         dotpos = email.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            errormessage.innerHTML="Lütfen geçerli bir email adresi giriniz. <br>"
            return false;
            email.focus();
          
         }
      
            return true;
        }
