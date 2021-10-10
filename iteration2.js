
window.onload = function() {
    addContent();
  }
  
  function addContent () {
    // crea un nuevo div y añade contenido
    var newDiv = document.createElement("div");
    newDiv.appendChild(newContent);
  }

  window.onload = function() {
    addContent();
  }
  
  function addContent () {
   
    var newDiv = document.createElement("div");
    var newParragraph = document.createElement("p");
    
    
   
    newDiv.appendChild(newParragraph);
    
    document.body.insertBefore(newDiv, newParragraph);
  }



  function addDivAndLoop() {
    let newDiv =document.createElement('div');
    document.body.appendChild(newDiv);
    for (let index = 1; index < 7; index++)
      let newP= document.createElement('p');
      newDiv.appendChild(newP);
    
    }
    
  



  function addDivPAndText() {
    let newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    let newP = document.createElement('p');
    let newContent = document.createTextNode('Soy dinámico!');
    newP.appendChild(newContent);
    newDiv.appendChild(newP);



    }
    
  
  function addTextH2() {
    let elements = document.getElementsByClassName('fn-insert-here');
     elements[0].innerHTML += 'Wubba Lubba dub dub';
    }


  function addList() {
    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
    let newElem = document.createElement('ul');
    for (const app of apps) {
      let newContent = document.createElement('li');
      newContent.innerHTML += app;
      newElem.appendChild(newContent);
  }
  document.body.appendChild(newElem);












  window.onload = function() {
    addContent();
  }
  
  function addContent () {
    
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Soy dinamico");
    
    newDiv.appendChild(newContent);
    
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }
}
