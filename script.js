
$("#btn").click(function(){
 $.getJSON("http://random.cat/meow")
  .done(function(data){
   console.log(data.file)
   $("#photo").attr("src", data.file)
   
 })
})

