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
var userUid = "asdfasd";
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

console.log(document.getElementById('favoriteFruit:value'));

}