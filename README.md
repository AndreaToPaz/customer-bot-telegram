# Raudo Bot 🚀

Bot de telegram para Raudo, con el fin de crear interaccion entre los usuarios usando comandos.

### Instalación 🔧

Una vez copiado el proyecto use el siguiente comando para instalarlo

```
npm init
```
### Pre-requisitos para las pruebas 📋

1. bot token<br>
    _identificador unico del bot, debe colocaro en el index.js de la carpeta config_

1. chat_id<br>
    1.orden
    En la carpeta de sample, en order.json debe colocar los chat_id de las personas con las que desea realizar la prueba.
    ```
    {
    "chat_id_RaudocustomerService":"XXXXXXXXX"
    }
    ```
    2.Raudo Service
    En la carpeta de sample, en raudoService.json debe colocar los chat_id para el servicio al cliente de raudo.
    ```
    {
	"order_id":"xxxx",
	"chat_id_cliente":"XXXXXXXXX",
	"chat_id_repartidor":"XXXXXXXXX",
	"chat_id_customerService":"XXXXXXXXX"
    }
    ```

## Ejecutando las pruebas ⚙️

Para ejecutar las pruebas, escriba el comando
    ```
	npm run dev
    ``
## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Telegraff.js](https://telegraf.js.org) - El framework usado
* [prettier](https://prettier.io) - El formateador de codigo
