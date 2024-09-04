const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  
  event.preventDefault();
  
  deferredPrompt = event;
 
  butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  
  if (deferredPrompt) {
  
    deferredPrompt.prompt();
    
    const { outcome } = await deferredPrompt.userChoice;
    
    console.log('User response to the install prompt:', outcome);
    
    deferredPrompt = null;
   
    butInstall.style.display = 'none';
  }
});


window.addEventListener('appinstalled', (event) => {
  
  console.log('App installed successfully');
});
