console.log("welcome to my database")

//**************************************************************/
//
// Generalised firebase routines
// Written by Conor Church, Term 2 2025
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = '#FFC0CB';	    // These two const are part of the coloured 	
const COL_B = '#FF69B4';	//  console.log for functions scheme
const COL_G = '#15ff00'
const COL_R = '#ff0000'
console.log('%c fb_io.mjs',
            'color: blue; background-color: white;');
var fb_Db; 
var userUid = "uid";
/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules
import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import { getDatabase }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { getAuth, GoogleAuthProvider, signInWithPopup,onAuthStateChanged,signOut }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"; 

    import { ref, set,get,update }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export { 
    fb_initialise, fb_authenticate, fb_writeRecord
};

function fb_initialise(){
    console.log('%c fb_initialise(): ', 
                'color: ' + COL_C + 
                '; background-color: ' + COL_B +';' );
    console.log("%c galvinise:",
                'color:'+ COL_B + 
                '; background-color:' + COL_C + ';');
    const FB_GAMECONFIG = {
        apiKey: "AIzaSyCCqhJW7S5L9nSkhlB_8Nvg3zzD4w65hjU",
        authDomain: "comp-conor-church.firebaseapp.com",
        databaseURL: "https://comp-conor-church-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "comp-conor-church",
        storageBucket: "comp-conor-church.firebasestorage.app",
        messagingSenderId: "807950196532",
        appId: "1:807950196532:web:44538dd1b8184ee5760f61",
        measurementId: "G-G7Z4YR3HX7"
    };
    const FB_GAMEAPP = initializeApp(FB_GAMECONFIG)
    fb_Db = getDatabase(FB_GAMEAPP)
    console.info(fb_Db);
}

function fb_authenticate(){
    console.log('%c authenticate():',
    'color:' + COL_C +
    'background-color:' + COL_B + ';');
    const AUTH =  getAuth(); //something is wrong here
    const PROVIDER = new GoogleAuthProvider();
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });

    signInWithPopup(AUTH, PROVIDER).then((result) => {
        alert("thank you for signing correctly")
        console.log(result.user.uid)
        userUid = result.user.uid;
        console.log(result.user.uid)
    })
    

};

function fb_writeRecord(){
    
    const REF = ref(fb_Db,"users/" + userUid);
        
    set(REF,{
        userName:document.getElementById('name').value,
        userFavFruit:document.getElementById('favoriteFruit').value,
        userQuantity:parseInt(document.getElementById('fruitQuantity').value)
    }).then(() => { 
        console.log('%c preferences recorded', 
                'color: ' + COL_C + 
                '; background-color: ' + COL_G +';' )
        })
    .catch((error) => {
        console.log(error);
        console.log('%c something went wrong! ', 
                'color: ' + COL_C + 
                '; background-color: ' + COL_R +';' );
    })

    console.log('%c fb_readRecord ', 
                'color: ' + COL_C + 
                '; background-color: ' + COL_B +';' );
                const dbReference= ref(fb_Db, "users/" + userUid);
    get(dbReference).then((snapshot) => {
        var fb_data = snapshot.val();

        if (fb_data != null) {
            console.log('%c Record found! ', 
                'color: ' + COL_C + 
                '; background-color: ' + COL_G +';' );
            console.log(snapshot.val());
             var user_Name = snapshot.val().userName
             var user_favourite_fruit = snapshot.val().userFavFruit
             var user_fruit_quantity = snapshot.val().userQuantity
  
            console.log(user_Name)
            console.log(user_favourite_fruit)
            console.log(user_fruit_quantity)
        } else {
            console.log('%c Record NOT found ', 
                'color: ' + COL_C + 
                '; background-color: ' + COL_R +';' );

        }
    }).catch((error) => {
       console.log('%c Error! ', 
                'color: ' + COL_C + 
                '; background-color: ' + COL_R +';' ); 
        console.log(error);
    
    });
    console.log(user_Name)
    console.log(user_favourite_fruit)
    console.log(user_fruit_quantity)
document.getElementById('email').innerHTML = "Hello "+ user_Name +"! thank you for informing our company your preferences. it will be very good for companies to know you like "+user_favourite_fruit+".we will send you more emails to do with "+ user_favourite_fruit +" we will try and accomate for your taste of "+user_fruit_quantity +"servings a week!";
console.log(document.getElementById('favoriteFruit').value);



};