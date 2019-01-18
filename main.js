$(document).ready(function(){
    
    

$("#imgs1").click(function(){
 
     $("#info").removeClass();
$("#info").addClass("nz");
 
var text="Crazy frogs - New Zeland" ;
var self=$(this);

var copy= self.clone();    
     copy.addClass('clone').insertAfter('#imgs1'); 
copy.css({
position: "absolute",    
width: self.width(),   
height: self.height(), 
top: self.offset().top,
left: self.offset().left 
    
})    
   
copy.animate({
    
width: $("#myholder").width(),   
 height: $("#myholder").height(),   
   top: $("#myholder").offset().top,
left: $("#myholder").offset().left  
    
},1500,function(){
	
$("#info").text(text);	
	
})    
    
    
$("body").append(copy);    
    
})





$("#imgs2").click(function(){
 
 
    $("#info").removeClass();
$("#info").addClass("hol");
 
var text="Valley of balloons - Holand";
var self=$(this);

var copy= self.clone();    
     copy.addClass('clone').insertAfter('#imgs2'); 
copy.css({
position: "absolute",    
width: self.width(),   
height: self.height(), 
top: self.offset().top,
left: self.offset().left 
    
})    
   
copy.animate({
    
width: $("#myholder").width(),   
 height: $("#myholder").height(),   
   top: $("#myholder").offset().top,
left: $("#myholder").offset().left  
    
},1500,function(){
	
$("#info").text(text);	
	
})    
    
    
$("body").append(copy);    
    
})


$("#imgs3").click(function(){
 
   $("#info").removeClass();
$("#info").addClass("gre");
 
var text="Halkidiki heaven on earth - Greece";
var self=$(this);

var copy= self.clone();    
     copy.addClass('clone').insertAfter('#imgs3'); 
copy.css({
position: "absolute",    
width: self.width(),   
height: self.height(), 
top: self.offset().top,
left: self.offset().left 
    
})    
   
copy.animate({
    
width: $("#myholder").width(),   
 height: $("#myholder").height(),   
   top: $("#myholder").offset().top,
left: $("#myholder").offset().left  
    
},1500,function(){
	
$("#info").text(text);	
	
})    
    
    
$("body").append(copy);    
    
})



$("#imgs4").click(function(){
 
   $("#info").removeClass();
$("#info").addClass("spa");
 
var text="Beach of sun Ibiza - Spain" ;
var self=$(this);

var copy= self.clone();    
     copy.addClass('clone').insertAfter('#imgs4'); 
copy.css({
position: "absolute",    
width: self.width(),   
height: self.height(), 
top: self.offset().top,
left: self.offset().left 
    
})    
   
copy.animate({
    
width: $("#myholder").width(),   
 height: $("#myholder").height(),   
   top: $("#myholder").offset().top,
left: $("#myholder").offset().left  
    
},1500,function(){
	
$("#info").text(text);	
	
})    
    
    
$("body").append(copy);    
    
})



$("#imgs5").click(function(){
 
  $("#info").removeClass();
$("#info").addClass("ser");
 
var text="Winter race Kopaonik - Serbia" ;
var self=$(this);

var copy= self.clone();    
     copy.addClass('clone').insertAfter('#imgs5'); 
copy.css({
position: "absolute",    
width: self.width(),   
height: self.height(), 
top: self.offset().top,
left: self.offset().left 
    
})    
   
copy.animate({
    
width: $("#myholder").width(),   
 height: $("#myholder").height(),   
   top: $("#myholder").offset().top,
left: $("#myholder").offset().left  
    
},1500,function(){
	
$("#info").text(text);	
	
})    
    
    
$("body").append(copy);    
    
})



$("#imgs6").click(function(){
 
 $("#info").removeClass();
$("#info").addClass("usa");
 
var text="Land of happiness Malibu - USA" ;
var self=$(this);

var copy= self.clone();    
     copy.addClass('clone').insertAfter('#imgs6'); 
copy.css({
position: "absolute",    
width: self.width(),   
height: self.height(), 
top: self.offset().top,
left: self.offset().left 
    
})    
   
copy.animate({
    
width: $("#myholder").width(),   
 height: $("#myholder").height(),   
   top: $("#myholder").offset().top,
left: $("#myholder").offset().left  
    
},1500,function(){
	
$("#info").text(text);	
	
})    
    
    
$("body").append(copy);    
    
})


$("#imgs7").click(function(){
 
var text="Sky spa center Andi - Argentina" ;
$("#info").removeClass();
$("#info").addClass("arg");
var self=$(this);

var copy= self.clone();   
  copy.addClass('clone').insertAfter('#imgs7'); 

   
copy.css({
position: "absolute",    
width: self.width(),   
height: self.height(), 
top: self.offset().top,
left: self.offset().left 
    
})    
   
copy.animate({
    
width: $("#myholder").width(),   
 height: $("#myholder").height(),   
   top: $("#myholder").offset().top,
left: $("#myholder").offset().left  
    
},1500,function(){
	
$("#info").text(text);	
	
})    
    
    
$("body").append(copy);    
    
})



$("#imgs8").click(function(){
var text="Tour to Himalai - China";
$("#info").removeClass();
$("#info").addClass("china");
var self=$(this);

var copy= self.clone();    
     copy.addClass('clone').insertAfter('#imgs8'); 
copy.css({
position: "absolute",    
width: self.width(),   
height: self.height(), 
top: self.offset().top,
left: self.offset().left 
    
})    
   
copy.animate({
    
width: $("#myholder").width(),   
 height: $("#myholder").height(),   
   top: $("#myholder").offset().top,
left: $("#myholder").offset().left  
    
},1500,function(){
	
$("#info").text(text);	
	
})    
    
    
$("body").append(copy);    
    
})

$( window ).resize(function() {
  $(".clone").remove();
});




    })

