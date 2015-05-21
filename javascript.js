var saveButton = document.getElementsByTagName('button')[0]
var loadButton = document.querySelector("form [name^='load']")

saveButton.addEventListener('click',function(e){
  var inputs = document.getElementsByTagName('input'),
      data = {};
  e.preventDefault();
  data.id = document.querySelector("form [name^='id']").value
  data.name = document.querySelector("form [name^='name']").value
  data.phone = document.querySelector("form [name^='phone']").value

  localStorage.setItem('data',JSON.stringify(data))
  console.log("saved")

});

loadButton.addEventListener('click',function(e){
  e.preventDefault();
  var data = JSON.parse(localStorage.getItem('data'));
  document.querySelector("form [name^='id']").value = data.id
  document.querySelector("form [name^='name']").value = data.name
  document.querySelector("form [name^='phone']").value = data.phone
  console.log("loaded")
});