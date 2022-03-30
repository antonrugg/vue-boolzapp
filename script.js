console.log('JS OK');
console.table(contacts);



const app = new Vue({
    el: '#boolzapp',

    data: {
        contacts,
        index: 0,
        activeContact: null,
        newMessage: ''
    },
    methods: {
        setActiveContact: function (index) {
            this.activeContact = index;
        },

        imgURLUser: function (index) {
            return `img-bolzapp/avatar${contacts[index].avatar}.jpg`;
        },

        pushNewMessage(i) {
            if ((this.newMessage.trim()).length > 0) {

                this.contacts[i].messages.push(
                    {
                        date: new Date(),
                        message: this.newMessage,
                        status: 'sent'
                    }
                )
            }
            this.newMessage = ''
        }
    }
});
