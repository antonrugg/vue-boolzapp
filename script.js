console.log('JS OK');
console.table(contacts);


const app = new Vue({
    el: '#boolzapp',

    data: {
        contacts,
        activeContact: null,
        index: 0

    },
    methods: {
        setActiveContact: function (i) {
            this.activeContact = i;
        },


    }
});
