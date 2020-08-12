const $chatbox = $(".chatbox");

const chatMessages = [
  {
    time: "16:25",
    content:
      "Ab quasi fuga illum repellendus, praesentium tenetur consectetur error! Nemo, temporibus fugit. Aut asperiores autem totam necessitatibus quae repudiandae, labore nobis quos.",
    author: {
      name: "Damaris Bauch",
      image: "http://lorempixel.com/50/50/people/1",
    },
  },
  {
    time: "16:35",
    content: "Voluptas nihil magnam molestiae soluta exercitationem.",
    author: {
      name: "Branson Spencer",
      image: "http://lorempixel.com/50/50/people/2",
    },
  },
  {
    time: "17:32",
    content: "Et et culpa.",
    author: {
      name: "Damaris Bauch",
      image: "http://lorempixel.com/50/50/people/1",
    },
  },
  {
    time: "18:15",
    content: "At dolorem aperiam corporis.",
    author: {
      name: "Emelie Smitham",
      image: "http://lorempixel.com/50/50/people/3",
    },
  },
];

//funcion para imprimir mensajes en caja de chat
function printChatMessages(chatMessage) {
  const { author, time, content } = chatMessage; //destructing de variable

  const template = `<div class="chatbox--user">
  <img src="${author.image}" alt="imagen persona">
  <div class="chatbox--user--message">
      <div class="info">                    
          <a class="info__name" href="#">${author.name}</a>
          <span class="info__date">${time}</span>                    
      </div>            
      <span class="message">${content}</span>
  </div>
  </div>`;

  $chatbox.append(template);
}

//ciclo para iterar el arreglo de mensajes ya llamar funcion para imprimirlos
$.each(chatMessages, function (index, obj) {
  printChatMessages(obj);

  // condicional para agregar clase self a un nombre
  if (obj.author.name === 'Branson Spencer') {
    $('.chatbox--user:last').addClass('self');
  }

});

/* $(document).ready(function () {
  $(".inputMessage").on("click", function (e) {
    e.preventDefault();
    console.log("boton presionado");
    var $message = $(".inputMessage input").val();
    console.log($message);
    $(".inputMessage input").val("");
    $(".chatbox").append(chatLog);
  });
});
 */
