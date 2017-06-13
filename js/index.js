$(document).ready(function(){
  
var ans = 0;  

$("#dot").click(function(){ document.getElementById("inputText").value += $(this).text();
});  
  
$("#zero").click(function(){ document.getElementById("inputText").value += $(this).text();
});  

$("#one").click(function(){ document.getElementById("inputText").value += $(this).text();
}); 
  
$("#two").click(function(){ document.getElementById("inputText").value += $(this).text();
}); 
  
$("#three").click(function(){ document.getElementById("inputText").value += $(this).text();
}); 
  
$("#four").click(function(){ document.getElementById("inputText").value += $(this).text();
}); 
  
$("#five").click(function(){ document.getElementById("inputText").value += $(this).text();
}); 
  
$("#six").click(function(){ document.getElementById("inputText").value += $(this).text();
}); 
  
$("#seven").click(function(){ document.getElementById("inputText").value += $(this).text();
}); 
  
$("#eight").click(function(){ document.getElementById("inputText").value += $(this).text();
}); 
  
$("#nine").click(function(){ document.getElementById("inputText").value += $(this).text();
}); 
  
$("#plus").click(function(){ document.getElementById("inputText").value += (' ' + $(this).text() + ' ');
});  
  
$("#minus").click(function(){ document.getElementById("inputText").value += (' ' + $(this).text() + ' ');
});
  
$("#times").click(function(){ document.getElementById("inputText").value += (' ' + $(this).text() + ' ');
});    
  
$("#divides").click(function(){ document.getElementById("inputText").value += (' ' + $(this).text() + ' ');
});  
  
$("#modulus").click(function(){ document.getElementById("inputText").value += (' ' + $(this).text() + ' ');
});
  
$("#clearAll").click(function(){ document.getElementById("inputText").value = '';
});
 
$("#clearLast").click(function(){     $("#inputText").val($("#inputText").val().substring('',$("#inputText").val().length-1));                          });
  
$("#equals").click(function(){
var expression =  document.getElementById("inputText").value; 
var answer = eval(expression);
document.getElementById("inputText").value = answer;  
ans = answer;
});  
  
$("#previousAnswer").click(function(){
  document.getElementById("inputText").value += ans;
});
  
  
});