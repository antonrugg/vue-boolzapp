console.log('JS OK');
console.table(contacts);



const app = new Vue({
    el: '#boolzapp',

    data: {
        contacts,
        index: 0,
        activeContact: null,
        newMessage: undefined,
        searched: '',
        active: false,
        



    },
    methods: {
        // select active contact when clicked
        setActiveContact: function (index) {
            this.activeContact = index;
        },

        //dynamic avatar image for users
        imgURLUser: function (index) {
            return `img-bolzapp/avatar${contacts[index].avatar}.jpg`;
        },

        //to send a new message
        pushNewMessage: function (index) {

            if ((this.newMessage.trim()).length > 0) {

                this.contacts[index].messages.push( //push a new message object inside messages array
                    {
                        date: this.getTimeString(),
                        message: this.newMessage,
                        status: 'sent',
                        active: false
                    }
                )

                setTimeout(this.okMessage, 1000, this.activeContact); //invoke function that send an ok-message after 1 sec from new message
            }
            this.newMessage = ''; //reset input text value

        },


        //push a new message saying ok
        okMessage: function (index) {
            this.contacts[index].messages.push(
                {
                    date: this.getTimeString(),
                    message: 'Ok',
                    status: 'received',
                    active: false
                }
            )


        },

        //using newDate.etc to find right hour and minutes
        getTimeString: function () {
            const newDate = new Date();
            const thisYear = newDate.getUTCMonth() + '/' + newDate.getUTCDate() + '/' + newDate.getUTCFullYear();
            const getTime = newDate.getHours() + ':' + newDate.getMinutes();
            return thisYear + ' ' + getTime;
        },

        // '10/01/2020 15:30:55'  <----- date format base

        
        //function to search contact, using includes on search value (v-model), set visible
        searchContact: function () {
            let search = this.searched.toLowerCase();
            for (let i = 0; i < this.contacts.length; i++) {
                let userName = this.contacts[i].name.toLowerCase();
                if (userName.includes(search)) {
                    this.contacts[i].visible = true;
                }
                else {
                    this.contacts[i].visible = false;
                }
            }

        },


        //open and close pop-up when clicking arrow-down arrow-up
        //(something is wrong about index and message check v-for)
       

        dropDown(setter) {
             this.contacts[this.activeContact].messages[setter].active = true;
        },
        dropUp(setter) {
             this.contacts[this.activeContact].messages[setter].active = false;
        },


        //function to delete a message
        deleteMessage: function (index) {
            contacts[this.activeContact].messages.splice(index, 1);

        }




    }
}
);

