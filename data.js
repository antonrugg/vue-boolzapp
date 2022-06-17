const contacts = [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent',
                active: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
                active: false
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received',
                active: false
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent',
                active: false
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                active: false
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
                active: false
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received',
                active: false
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
                active: false
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received',
                active: false
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
                active: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received',
                active: false
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent',
                active: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received',
                active: false
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent',
                active: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received',
                active: false
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent',
                active: false
            }
        ],
    },
    {
        name: 'Federico',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent',
                active: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received',
                active: false
            }
        ],
    },
    {
        name: 'Davide',
        avatar: '_8',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                active: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                active: false
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received',
                active: false
            }
        ],
    }
]


// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente(verdi) e dall’interlocutore(bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v -for, visualizzare nome e immagine di ogni contatto
// QUINDI solo la parte a sinistra sarà dinamica(per mostrare la lista contatti), mentre a destra ci sarà HTML statico, uguale a quello presentato nel layout
// Daje!: fuoco:
// Consigli utili:
// Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella lista dei contatti
// I pulsanti e le icone possono non funzionare(a parte l’invio del messaggio)
// La struttura dell’array dei contatti è la seguente: