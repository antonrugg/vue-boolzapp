console.log('JS OK');
console.table(contacts);



const app = new Vue({
    el: '#boolzapp',

    data: {
        contacts,
        index: 0,
        activeContact: null,
        newMessage: undefined,
        
        
        
    },
    methods: {
        setActiveContact: function (index) {
            this.activeContact = index;
        },

        imgURLUser: function (index) {
            return `img-bolzapp/avatar${contacts[index].avatar}.jpg`;
        },

        //invio nuovo messaggio
        pushNewMessage: function (index) {
            
            if ((this.newMessage.trim()).length > 0) {
                
                this.contacts[index].messages.push(
                    {
                        date: new Date(),
                        message: this.newMessage,
                        status: 'sent'
                    }
                )
                this.okMessage(index)
               
            }
            this.newMessage = '';
            
        },

        // fine invio nuovo messaggio

        okMessage: function (index) {
            this.contacts[index].messages.push(
                {
                    date: new Date(),
                    message: 'Ok',
                    status: 'received'
                }
            )
            setTimeout(this.okMessage, 1000, activeContact);

        },

        // getLastDate: function (contact) {
        //     this.lastDate = contact.messages[contact.messages.length - 1].date;
            
        // },
        


        
    }
        }
    );
