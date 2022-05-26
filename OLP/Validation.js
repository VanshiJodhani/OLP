debugger
$(document).ready(function() {
  //fname lname city state
  jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
  }, "Letters only please"); 

  //address
  jQuery.validator.addMethod("notspecialchar", function(value, element)   {
    return this.optional(element) || /^[a-z," ",0-9]+$/i.test(value);
  }, "Special character not allow"); 

  //phone number
  jQuery.validator.addMethod("phno", function(value, element) {
    return this.optional(element) || /^[6-9]\d{9}$/.test(value);
  }, "Enter only ten digit and it must be start from 6 to 9");

  //email
  jQuery.validator.addMethod("Maill", function(value, element) {
    return this.optional(element) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  }, "Invalid mail");

  $("#myform").validate({
    rules: {
      fname : {
        required: true,
        lettersonly: true,
        minlength: 3
      },
      lname : {
        required: true,
        lettersonly: true,
        minlength: 3
      },
      streetaddress1 : {
        required: true,
        notspecialchar: true
      },
      streetaddress2 : {
        required: true,
        notspecialchar: true
      },
      city : {
        required: true,
        lettersonly: true
      },
      state : {
        required: true,
        lettersonly: true
      },
      postal : {
        required: true,
        rangelength: [6,6],
        digits: true
      },
      phone : {
        required: true,
        rangelength: [10,10],
        digits: true,
        phno: true,
      },
      e_mail : {
        required: true,
        Maill: true
      },
      how:{
        required:{
          depends: function(element){
            if(0 == $('#how').val()){
                //Set predefined value to blank.
                $('#how').val('');
            }
            return true;
          }
        }
      },
      feedback : {
        required: true,
        minlength: 5
      },
      suggetion : {
        required: true,
        minlength: 5
      },
      recommend : {
        required: true,
      },
      male : {
        required: true,
      }      
    },
    // messages : {
    //   phone: {
    //     rangelength: "Name should be at least 3 characters"
    //   },},
    errorPlacement: function(error, element) 
        {
            if ( element.is(":radio") ) 
            {
                error.appendTo( element.parents('.radio-container') );
            }
            else 
            { // This is the default behavior 
                error.insertAfter( element );
            }
         },    
  });
  $('#submit').on('click', function() {
    var fname=$('#fname').val();
    var lname=$('#lname').val();
    var street1 =$('#street1').val();
    var street2 =$('#street2').val();
    var city =$('#city').val();
    var state=$('#state').val();
    var postal=$('#postal').val();
    var phone=$('#phone').val();
    var e_mail =$('#e_mail').val();
    var how =$('#how').val();
    var feedback =$('#feedback').val();
    var suggetion=$('#suggetion').val();
    var recommend =$('#recommend').val();
    var male=$('input[type="radio"][name = "male"]:checked').val();
    var count = $('#myTable tr').length;
    if(fname!="" && lname !="" && street1!="" && street2 !="" && city!="" && state !="" && postal !="" && phone !="" && 
       e_mail !="" && how !="" && feedback !="" && suggetion!="" && recommend !="" && male!=""){
    $('#myTable tbody').append('<tr class="child"><td>'+count+'</td><td>'+fname+'</td><td>'+lname+'</td><td>'+
    street1+'</td><td>'+street2+'</td><td>'+city+'</td><td>'+state+'</td><td>'+postal+'</td><td>'+phone+'</td><td>'
    +e_mail+'</td><td>'+how+'</td><td>'+feedback+'</td><td>'+suggetion+'</td><td>'+recommend+'</td><td>'
    +male+'</td><td><a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">Remove</a><br><a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">Update</a></td></tr>');}});

    //remove
    $(document).on('click','.remCF1',function(){
    $(this).parent().parent().remove();
    $('#myTable tbody tr').each(function(i){            
     $($(this).find('td')[0]).html(i+1);          
    });
  });

  //update
  $(document).on('click','.remCF1',function(){
    $(this).parent().parent().update();
    $('#myTable tbody tr').each(function(i){            
     $($(this).find('td')[0]).html(i);          
    });
  });

  $("#myform").submit(function(e){
    e.preventDefault();
  });
});