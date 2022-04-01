console.log('JS OK');
console.table(contacts);



const app = new Vue({
    el: '#boolzapp',

    data: {
        contacts,
        index: 0,
        activeContact: null,
        newMessage: undefined,
        search: undefined,
        active: false



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
                        date: this.getTimeString(),
                        message: this.newMessage,
                        status: 'sent'
                    }
                )

                setTimeout(this.okMessage, 1000, this.activeContact);
            }
            this.newMessage = '';

        },

        // fine invio nuovo messaggio

        okMessage: function (index) {
            this.contacts[index].messages.push(
                {
                    date: this.getTimeString(),
                    message: 'Ok',
                    status: 'received'
                }
            )


        },

        getTimeString: function () {
            const newDate = new Date();
            const thisYear = newDate.getUTCMonth() + '/' + newDate.getUTCDate() + '/' + newDate.getUTCFullYear();
            const getTime = newDate.getHours() + ':' + newDate.getMinutes();
            return thisYear + ' ' + getTime;
        },

        // '10/01/2020 15:30:55'


        searchContact: function () {
            for (let i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].name.includes(this.search)) {
                    this.contacts[i].visible = true;
                }
                else {
                    this.contacts[i].visible = false;
                }
            }

        },

        toggle() {
            this.active = !this.active
        }




    }
}
);

