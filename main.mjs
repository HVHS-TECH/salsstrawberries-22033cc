import { fb_initialise, fb_authenticate,fb_writeRecord
 }
 from'./script.mjs';
    window.fb_initialise = fb_initialise;
    window.fb_authenticate = fb_authenticate;
    window.fb_writeRecord = fb_writeRecord
   
fb_initialise();

console.log(document.getElementById('favoriteFruit'));
