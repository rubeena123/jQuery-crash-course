// SELECTORS
// $('h1').hide()
// $('h1#heading1').hide()
// $('.heading2').hide()
// $('p span').css('color','red')
// $('ul#list li:first').css('color','blue');
// $('ul#list li:last').css('color','green');
// $('ul#list li:even').css('background-color','brown');
// $('ul#list li:odd').css('background-color','pink');
// $('ul#list li:nth-child(3n)').css('list-style','none');
// $(':button').hide();
// $(':text').hide();
// $(':submit').hide();
// $('[href]').css('color','red');
// $('a[href="http://yahoo.com"]').css('color','brown');
// $('*').hide();
// EVENTS
// $('#btn1').click(function(){alert('You are Awesome')});
// 0r
// $('#btn1').on('click',function(){alert('You are Awesome')})
//
// $('#btn1').click(function(){
//   $('.para1').hide();
// });
// $('#btn2').click(function(){
//   $('.para1').show();
// });
//  or if you want to use th same button to show and hide USE TOGGLE
// $('#btn1').click(function(){
//   $('.para1').toggle();
// });
// $('#btn1').dblclick(function(){
//   $('.para1').toggle();
// });
// HOVER is not an actual event; it is a short-cut to two other events-mousenter and mouseleave
// $('#btn1').mousemove(function(){
//   $('.para1').toggle();
// });
// $('#btn1').mousedown(function(){
//   $('.para1').toggle();
// });
// $('#btn1').mouseup(function(){
//   $('.para1').toggle();
// });
//
// $('#btn1').click(function(e){
//   alert(e.currentTarget.id);
//   alert(e.currentTarget.innerHTML);
//   alert(e.currentTarget.outerHTML);
//   alert(e.currentTarget.className);
// });
// $('#btn1').mousemove(function(e){
//   console.log('Coords: Y: ' +e.clientY+"X: "+e.clientX)
// });
// $(document).mousemove(function(e){
//   console.log('Coords: Y: ' +e.clientY+"X: "+e.clientX)
// });
// $(document).mousemove(function(e){
//   $('#coords').html('Coords: Y: ' +e.clientY+"X: "+e.clientX)
// });
// $('input').focus(function(){
// // alert('Focus')
// $(this).css("background","pink")
// });
// $('input').blur(function(){
// // alert('Focus')
// $(this).css("background","white")
// });
// $('input').keyup(function(e){
//   console.log(e.target.value);
// })
//
// $('select#gender').change(function(e){
// alert(e.target.value);
//
// });
// $('#form').submit(function(e){
//   e.preventDefault();
//   var name = $('input#name').val()
//   // console.log('form submitted')
//   console.log(name);
// })
// DOM MANIPULATION
// $('p.para1').css("color","red");
// $('p.para1').css({color:"red", background:'#ccc'});
// $('p.para2').addClass('myclass');
// $('p.para2').removeClass('myclass');
// $('#btn-1').click(function(){
//   $('p.para2').toggleClass('myclass');
// })
// $('#myDiv').text('Hello World');
// $('#myDiv').html('<h3>Hello World</h3>');
// alert($('#myDiv').text());
// $('ul').append('<li>This is an appended list</li>')
// $('ul').prepend('<li>This is a prepended list</li>')
// $('.para1').appendTo('.para2');
// $('.para1').prependTo('.para2');
// $('ul').before('<h4> Hello </h4>');
// $('ul').after('<h4> World </h4>');
// $('ul').empty();
// $('ul').detach();
// $('a').attr('target','_blank')
// alert($('a').attr('href'));
// $('a').removeAttr('target')
// $('p').wrap('<h1>');
// $('p').wrapAll('<h1>');
// $('#newItem').keyup(function(e){
//   var code = e.which;
//   if(code == 13){
//     e.preventDefault();
//     $('ul').append('<li>'+ e.target.value + '</li>')
//   }
// });
//
// // var myArr =['Brad','Kelly','Nate','Jose'];
// //
// // $.each(myArr,function(i,val){
// // // console.log(val);
// // $('#users').append('<li>'+ val + '</li>')
//
// // });
// var newArr= $('ul#list li').toArray();
// // console.log(newArr);
// $.each(newArr,function(i,val){
//   console.log(val.innerHTML)
// });
// EFFECTS AND ANIMATION
// $('#btnFadeOut').click(function(){
//   $('#box').fadeOut(3000,function(){
//     $('#btnFadeOut').text('Its Gone')
//   });
// })
// $('#btnFadeIn').click(function(){
//   $('#box').fadeIn(3000);
// })
// $('#btnFadeTog').click(function(){
//   $('#box').fadeToggle(1000);
// })
// // ---------------------------------------------------------------------
// $('#btnSlideDown').click(function(){
//   $('#box').slideDown(3000);
// })
// $('#btnSlideUp').click(function(){
//   $('#box').slideUp(3000);
// })
// $('#btnSlideTog').click(function(){
//   $('#box').slideToggle(3000);
// })
// $('#btnStop').click(function(){
//   $('#box').stop()
// })
// // --------------------ANIMATE----------------------------------------------
// $('#moveRight').click(function(){
//   $('#box2').animate({
//     left: 500,
//     height: '300px',
//     width:'300px',
//     opacity:'0.5'
//   });
// })
//
// $('#moveLeft').click(function(){
//   $('#box2').animate({
//     left: 0,
//     height:'100px',
//     width:'100px',
//     opacity:'1'
//   });
// })
// $('#moveAround').click(function(){
// var box = $('#box2');
// box.animate({
//   left: 300
// });
// box.animate({
//   top: 300
// });
// box.animate({
//   left: 0,
//   top: 300
// });
// box.animate({
//   left: 0,
//   top : 0
// });
//
// })
// --------------AJAX-------------------------------------------------------
//  LOAD method
// $('#result').load('test.html',function(responseTxt, statusTxt,xhr){
// if(statusTxt == "success"){
//   alert("It went fine")
// } else if(statusTxt == "error"){
//   alert('Error:' + xhr.statusText)
// }
// });
//  GET method
// $.getJSON('users.json',function(data){
//   $.each(data,function(i, user){
//     $('ul#users').append('<li>'+ user.
//     firstName+'</li>')
//   });
// })
// $.ajax({
//   method:'GET',
//   url: 'https://jsonplaceholder.typicode.com/posts',
//   dataType: 'json'
// }).done (function(data){
//   console.log(data);
//   $.map(data, function(post,i){
//     $('#result').append('<h3>'+post.title+'</h3><p>'+ post.body+'</p>')
//   })
// })
$('#postForm').submit(function(e){
  e.preventDefault();

  var title = $('#title').val();
  var body  = $('#body').val();
  var url   = $(this).attr('action');

  $.post(url,{title: title, body:body}).
  done(function(data){
    console.log('Post Saved');
    console.log(data);
  })


})
