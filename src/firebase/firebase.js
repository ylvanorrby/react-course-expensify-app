import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_removed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val(up));
// })

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses)
// // })

// // database.ref('expenses').push({
// //     description: '',
// //     note: '',
// //     amount: 1,
// //     createdAt: 0
// // });

// /* database.ref('notes/-MGDXk-6XPVrjex-Dk5z').remove();

//  database.ref('notes').push({
//     title: 'Annat',
//     body: 'Pinnen'
// })
//  */
// /* const onValueChange = database.ref().on('value', (snapshot) => {
//     const name = snapshot.val().name;
//     const job = snapshot.val().job.title;
//     const company = snapshot.val().job.company;

//     console.log(name, 'is a', job, 'at', company);
// }, (e) => {
//     console.log('Something went wrong', e)
// })

// setTimeout(() => {
//     database.ref('name').set('Ylva');
// }, 3500);




/*
database.ref('location/city')
.once('value')
.then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
})
.catch((e) => {
console.log('Error fetching data', e)
}); */

/* database.ref().set({
    name: 'Ylva Norrby',
    age: 27,
    stressLevel: 6,
    job: {
        title: 'Developer',
        company: 'Google'
    },
    location: {
        city: 'Åtvidaberg',
        country: 'Sweden'
    }
}).then(() => {
    console.log('Data is saved')
}).catch((e) => {
    console.log('This failed', e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});
 */
/* database.ref().remove()
    .then(() => {
        console.log('Removed data')
    }).catch((e) => {
        console.log('Did not remove', e)
    }); */