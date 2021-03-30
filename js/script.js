const app = new Vue(
  {
  el:"#root",
  data: {
    currentChat: 0,
    newMessage: "",
    myAccount: {
      name: "Odina",
      avatar: '_io',
    },
    contacts: [
        {
            name: 'Michele',
            avatar: '_1',
            online: false,
            lastSeen: '15:30',
            visible: true,
            messages: [{
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            online: false,
            lastSeen: '16:52',
            visible: false,
            messages: [{
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            online: false,
            lastSeen: '16:52',
            visible: true,
            messages: [{
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Luisa',
            avatar: '_4',
            online: true,
            lastSeen: '16:15',
            visible: true,
            messages: [{
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
    ]
  },
  methods: {
    getIndex: function(index) {
      this.currentChat = index;
      return 0;
    },
    pushMessage: function(msg, sts) {
      if(msg != "") {
        console.log(msg);
        let newMsgObj = {
          date: "data",
          message: msg,
          status: sts
        };
        this.contacts[this.currentChat].messages.push(newMsgObj);
        this.newMessage = "";
        }
      },
    autoResponse: function() {
      let response = "ok";

      }
    }
  }
);
