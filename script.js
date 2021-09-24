(function() {
    // variables
    var lista = document.getElementById('lista'),
    tareainput = document.getElementById('tareaInput'),
    btnNuevaTarea = document.getElementById('btn-agregar');

    // funciones
    var agregarTarea = function(){
       var tarea = tareaInput.value;
        nuevaTarea = document.createElement('li'),
        enlace = document.createElement('a'),
        contenido = document.createTextNode(tarea);
        
        if (tarea === '') {
            tareainput.setAttribute('placeholder', 'Agrega una tarea valida');
            tareaInput.className = 'error';
            return false;
        }

        // agregamos contenido al enlace

        enlace.appendChild(contenido);

        //se establece atributo href

        enlace.setAttribute('href', '#');
        //se agrega enlace a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        lista.appendChild(nuevaTarea);

        //se limpia la barra de tareas
        tareaInput.value = '';

        for (var i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener('click', function(){
                this.parentNode.removeChild(this);
            });
        }
    

    };
    var comprobarInput = function(){
        tareaInput.className ='';
        tareaInput.setAttribute('placeholder', 'Agrega tu tarea');
        
    };
    var eliminarTarea = function(){
        this.parentNode.removeChild(this)
    };
    // eventos

    // agregar tarea
    btnNuevaTarea.addEventListener('click', agregarTarea);

    //comprobar input
    tareainput.addEventListener('click', comprobarInput);

    //borrar elementos de la lista
    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener('click', eliminarTarea);
    }

}());

