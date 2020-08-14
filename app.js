const $inputMessage = $('.inputMessage input');
const $btnSend = $('.inputMessage button');
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

const channels = [
  'course', 'blablabla', 'bobadas', 'material'
];


//funcion para imprimir canales en la lista
function printChannels(channel) {
  const template = `<li><a href="#">#${channel}</a></li>`

  $('.channels ul').append(template);
}


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

  // condicional para agregar clase self a un nombre
  if (author.name === 'Branson Spencer') {
    $('.chatbox--user:last').addClass('self');
  }
}


//funcion que retorna el nombre del canal seleccionado
function getChannel() {
  let channelName = $('.channels ul li .selected').text();
  return channelName.substr(1);
}


//funcion para enviar mensaje en el chat
$btnSend.on('click', function (e) {  
  e.preventDefault();
  const value = $inputMessage.val();

  if (value !== '') {
    //hora y minuto de mensaje
    const timeNow = new Date();
    const timeHour = timeNow.getHours();
    const timeMinute = timeNow.getMinutes();

    //mensaje a enviar
    const message =  {
      time: `${timeHour}:${timeMinute}`,
      content: value,
      author: {
        name: "Branson Spencer",
        image: "http://lorempixel.com/50/50/people/2",
      }
    };
    printChatMessages(message);
    chatMessages.push(message);
    $inputMessage.val('');
    $chatbox[0].scrollTo(0, $chatbox[0].scrollHeight);
   /*  const container = document.querySelector(".chatbox");
    container.scrollTo(0, container.scrollHeight); */
  }

})


//ciclo para iterar el arreglo de canales ya llamar funcion para imprimirlos
$.each(channels, function (index, obj) {
  printChannels(obj);
});


//ciclo para iterar el arreglo de mensajes ya llamar funcion para imprimirlos
$.each(chatMessages, function (index, obj) {
  printChatMessages(obj);
});


//funcion para agregar clase selected a el canal seleccionado
$('.channels a').on('click', function () { 
  $('.channels a').removeClass('selected');
  $(this).addClass('selected');

  //imrprimir el canal seleccionado en el input Message
  $inputMessage.attr('placeholder' , `Enviar mensaje a #${getChannel()}`)
})

