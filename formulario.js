const formMensaje = document.querySelector("#formularioMensaje")

formMensaje.addEventListener("submit", enviarMensaje)

async function enviarMensaje(event) {
    event.preventDefault()

    const formulario = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: formulario,
        headers: {
            "Accept": "aplication/json"
        }
    })
    if (response.ok) {
        this.reset()
        alert("Gracias por contactarnos, a la brevedad responderemos tu mensaje")
    }
}