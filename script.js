console.log('JS OK');
console.table(contacts);



const app = new Vue({
    el: '#boolzapp',

    data: {
        contacts,
        index: 0,
        activeContact: null
    },
    methods: {
        setActiveContact: function (index) {
            this.activeContact = index;
        },

        imgURLUser: function (index) {
            return `img-bolzapp/avatar${contacts[index].avatar}.jpg`;
        }

        
    }
});
