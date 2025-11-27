
    function mostrarFormulario() {
        document.getElementById('formulario').style.display = 'block';
    }
    function cerrarFormulario() {
        document.getElementById('formulario').style.display = 'none';
    }
    function enviarFormulario() {
        alert('Solicitud enviada correctamente.');
        cerrarFormulario();
    }