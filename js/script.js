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
                    message: 'Mi piacerebbe ma purtroppo devo andare a fare la spesa.',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            online: true,
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
            online: false,
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
    pushMessage: function(chatIndex, msg, sts) {
      // add a new message to the messages object
      // param chatIndex: int
      // param message, sts: string
      if(msg != "") {
        let today = dayjs();
        let newMsgObj = {
          date: today.format("DD/MM/YYYY HH:mm:ss"),
          message: msg,
          status: sts
        };
        this.contacts[chatIndex].messages.push(newMsgObj);
        }
      return 0;
      },
    goOffline: function(chatIndex) {
      // give to the bot the offline status
      this.contacts[chatIndex].online = false;
      let today = dayjs();
      this.contacts[chatIndex].lastSeen = today.format("HH:mm");
      return 0;
    },
    autoResponse: function(chatIndex, msg) {
      // give the capacity to the bots to responde with 'ok'
      // param chatIndex: int
      console.log(msg);
      if(msg != "") {
        if(this.contacts[chatIndex].online == false) {
          this.contacts[chatIndex].online = true;
          setTimeout(this.pushMessage, 1000, chatIndex, "ok", "received");
          setTimeout(this.goOffline, 3000, chatIndex);
          }
        else {
          // if the bot is online, it will go offline without answering the user
          setTimeout(this.goOffline, 3000, chatIndex);
          }
        this.newMessage = "";
        }
      return 0;
      }
    }
  }
);
