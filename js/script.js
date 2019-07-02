//Project 3
$("#name").focus();

//set initial focus to "name" input elementwhen page loads
  $("#other-title").hide();               
  $("#title").on('change',function()
    {    // listening for 'job title' to change to something else
      if ($(this).val()==="other"){    // if 'other' is chosen, show the text input field
    $("#other-title").show();
      }
      else {
        $("#other-title").hide();          // if 'other' is not chosen, hide the text input field
    }
  }); 

  // T-shirt section
     $("#colors-js-puns").hide();             
     
     $("#design").on('change',function() {
        $("#color").html('');
          if($(this).val()==="js puns") {
        $("#color").append(`<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>`);
        $("#color").append(`<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>`);
        $("#color").append(`<option value="gold">Gold (JS Puns shirt only)</option>`);
        $("#colors-js-puns").show();
          }
          else if
          ($(this).val()==="heart js") {
        $("#color").append(`<option value="tomato">Tomato (I &#9829; JS shirt only)</option>`);
        $("#color").append(`<option value="tomato">Tomato (I &#9829; JS shirt only)</option>`);
        $("#color").append(`<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>`);
        $("#colors-js-puns").show();
          }
          else {$("#colors-js-puns").hide();}
      }); 
       //Activities Selection
      let totalActCost= 0;
      $(".activities").append('<label id="total">Total Act Cost:$ </label>');
       document.getElementById("total").innerHTML = "<p><strong>Total: $" + totalActCost + "</strong></p>"

      $('[type = "checkbox"]').change((event) => {                //listening for checkbox to change
        let totalActCost = 0;

        //Disabling activities with conflicting times on the same days
        // Adding prices for each activity
      if ($(`input[name="all"]`).prop("checked")) {
        totalActCost += 200; 
      }
      
      if ($(`input[name="build-tools"]`).prop("checked")) {
         totalActCost += 100;
      }

      if ($(`input[name="npm"]`).prop("checked")) {
        totalActCost += 100;
         }

      if ($(`input[name="js-libs"]`).prop("checked")) {
           $(`input[name ="node"]`).attr("disabled",true);
        totalActCost += 100;
      } else {
        $(`input[name="node"]`).removeAttr("disabled")
      }

      if ($(`input[name="node"]`).prop("checked")) {
        $(`input[name="js-libs"]`).attr("disabled",true) ;
        totalActCost += 100; 
      } else {
         $(`input[name="js-libs"]`).removeAttr("disabled")
       }

       if ($(`input[name="js-frameworks"]`).prop("checked")) {
         $(`input[name="express"]`).attr("disabled",true);
         totalActCost += 100;

      } else {
         $(`input[name="express"]`).removeAttr("disabled")
       }

       if ($(`input[name="express"]`).prop("checked")) {
        $(`input[name="js-frameworks"]`).attr("disabled",true);
        totalActCost += 100;

      } else {
         $(`input[name="js-frameworks"]`).removeAttr("disabled")
       }

      $("#total").html("<p><strong>Total: $" + totalActCost + "</strong></p>")
      });
      //Payment Information Section
      $("#credit-card").siblings().eq(3).addClass("paypal");
      $("#credit-card").siblings().eq(4).addClass("bitcoin");
      $('select option[value="credit card"]').attr("selected", true);
      $('select option[value="select_method"]').attr("disabled", true);
      $('select option[value="select_method"]').hide();
      $(".paypal").hide();
      $(".bitcoin").hide();

  $("#payment").on('change', function () {
    if ($(this).val() === "credit card") {
      $("#credit-card").show();
      $(".paypal").hide();
      $(".bitcoin").hide();
    } 
    else if 
      ($(this).val() === "paypal") {
      $("#credit-card").hide();
      $(".paypal").show();
      $(".bitcoin").hide();
    }
    else if 
    ($(this).val() === "bitcoin") {
     $("#credit-card").hide();
     $(".bitcoin").show();
     $(".paypal").hide();
  
    }
  }
  ); 
  //Creating and appending error messages and hiding them all in default
  $('label[for="name"]').before('<label class="error" id="name-error"><font color="red">Name field must not be empty</font></label>');
  $('label[for="mail"]').before('<label class="error" id="email-error"><font color="red">Please enter a valid email address</font</label>');
  $('.activities legend').before('<label class="error" id="activity-error"><font color="red">Please select at least one activity</font></label>');
  $('#credit-card').before('<label class="error" id="cc-empty-error"><font color="red">Credit Card Number is empty</font></label>');
  $('#credit-card').before('<label class="error" id="cc-number-error"><font color="red">Please enter a number that is between 13 and 16 digits long</font></label>');
  $('#credit-card').before('<label class="error" id="cc-zip-error"><font color="red">Please enter 5 digit Zip code</font></label>');
  $('#credit-card').before('<label class="error" id="cc-cvv-error"><font color="red">Please enter 3 digit cvv number</font></label>');
  $('.error').hide();
 //Name validation
  const validName = (username) => {
    let valid = /^\S/.test(username);
    if (valid) {
      $('#name-error').hide();
      return true;
    } else {
      $('#name-error').show();
      return false;

     }
  }
  //Email validation
  const validEmail = (email) => {
    let valid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
    if (valid) {
      $('#email-error').hide();
      return true;
    } else {
      $('#email-error').show();
      return false;
    }
  }
    //Activities validation
    const validActivities = () => {
      if ($('.activities input:checked').length > 0) {
        $('#activity-error').hide();
        return true;
      } else {
        $('#activity-error').show();
        return false;
      }
      }
      //Credit Card validation
      const validCCnumber =(cc) => {
        if ($('#payment').val() === 'credit card') {
          let valid = /^\d{13,16}$/.test(cc);

          if (valid) {
            $('#cc-number-error').hide();
            $('#cc-empty-error').hide();
            return true;

          } else if (cc!=='') {
            $('#cc-empty-error').hide();
            $('#cc-number-error').show();
            return false;
          } else {
            $('#cc-number-error').hide();
            $('#cc-empty-error').show();
            return false;
          }
        }
      }
      //Zip code validation
      const validZipcode = (zip) => {
        if ($('#payment').val() === 'credit card') {
          let valid = /^\d{5}$/.test(zip);
        if (valid) {
            $('#cc-zip-error').hide();
            return true;
          } else {
            $('#cc-zip-error').show();
            return false;
          }
        }
      }
      //CVV validation
      const validCvv =(cvv) => {
        if ($('#payment').val() === 'credit card') {
          let valid = /^\d{3}$/.test(cvv);
        if (valid) {
          $('#cc-cvv-error').hide();
          return true;
        } else {
          $('#cc-cvv-error').show();
          return false;
        }
        } 
      }
      //Validation of all form fields
      const formValid = () => {
        //If credit card is selected
        if ($("#payment").val() === "credit card") {
        if (validName($("#name").val()) && validEmail($('#mail').val()) && validActivities() && validCCnumber($('#cc-num').val()) && 
           validZipcode($('#zip').val()) && validCvv($('#cvv').val())) {
             return true;
            
          
        } else { 
          validName($('#name').val());
          validEmail($('#mail').val());
          validActivities();
          validCCnumber($('#cc-num').val());
          validZipcode($('#zip').val());
          validCvv($('#cvv').val());
          return false;
          //If credit card is NOT selected
         }
        } else {
           if (validName ($('#name').val()) && validEmail($('#mail').val()) && validActivities()) {
            return true;
           } else { 
            validName($('#name').val());
            validEmail($('#mail').val());
            validActivities(); 
            return false;
          }
         }
        }
        //Preventing default action of form submitting if any errors are present
        $('form').on('submit', (e) => {
          if (formValid() === true) {
            window.location.reload();
          } else {
            e.preventDefault();
          }


        });


        
      
    

  



  
   


  
    
      

      