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

// $('#btn1').click(function(e){
  // alert(e.currentTarget.id);
  // alert(e.currentTarget.innerHTML);
  // alert(e.currentTarget.outerHTML);
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
