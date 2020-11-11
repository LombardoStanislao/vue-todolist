// Vi consiglio di procedere per step:
// definire una lista di todo e stamparli in pagina in un elenco
// predisporre un input testuale per aggiungere un nuovo todo: al click di un pulsante, il testo inserito nell'input viene aggiunto alla lista dei todo
// al click su un item della lista, il todo viene rimosso
// BONUS: intercettare anche il tasto "ENTER" per aggiungere un nuovo todo

var app = new Vue({

  el: '#root',

  data: {

      todo: ['Fare stretching', 'Finire il sito', 'Lavare la macchina',
      'Compilare i documenti', 'Mandare la mail a Luca'],
      


  },

  methods: {



  }, // Fine methods


});
