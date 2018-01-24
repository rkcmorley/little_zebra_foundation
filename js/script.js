//Change animal image in donation widget
$("#animalSelector").change(function(){          
    var value = $("#animalSelector option:selected").val();
    var image = $(".is" + value);
    image.fadeIn(400).removeClass("hidden");
    image.siblings('[class*=is]').fadeOut(400, function() { $(this).addClass("hidden"); });
});

//Validate amount greater than £11
Foundation.Abide.defaults.validators['greater_than'] =
function($el,required,parent) {
  if (!required) return true;
  var from = $('#'+$el.attr('data-greater-than')).val(),
  to = $el.val();
  return (parseInt(to) > parseInt(from));
};

//Button Behaviour
$(".donation-amount-btn").click(function(){            
   $("input").prop('required',false);
   $('.donation-input[type=number]').val('');
   $('.donation-input').removeClass('is-invalid-input');
   $("span").attr('style', 'display: none !important');
   $(this).addClass('selected').siblings().removeClass('selected');
});

//Input Behaviour
$("#max").click(function(){            
   $(".donation-input").prop('required',true);
   $("#min").prop('required',true);  
   $(".donation-amount-btn").removeClass('selected');    
});
