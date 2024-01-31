// Oh, before we dive into the code, let's start with a friendly alert message.
// to make sure our js is linked"
alert("HI'm gaining weight 😫");

// Now, onto the exciting part – capturing a screenshot!


// This button has a special ID called 'screenshotBtn'.

document.getElementById('screenshotBtn').addEventListener('click', function() {
  // we use the id so to kind of grab the s screen Btn, so when it is clicked some things will happen:

  // like  making the button disappear by adding a 'hidden' class.
  // this is how you do it."
  this.classList.add('hidden');

  // 2. Now, let's talk about html2canvas – a library that can take a snapshot (screenshot) of our webpage.
  // We give it some instructions, like considering the device's pixel ratio, enabling logs for debugging,
  // and handling any tricky images that might be on the page.

  html2canvas(document.documentElement, {
    scale: window.devicePixelRatio, // Consider the device's pixel ratio for a crisp image
    logging: true, // Enable some behind-the-scenes notes for us (developers) to debug
    useCORS: true, // Handle potential cross-origin images gracefully
    windowHeight: window.innerHeight, // Capture the whole window height
    windowWidth: window.innerWidth // Capture the whole window width
  }).then(canvas => {
    // 3. Now, we have this fantastic screenshot, but it's in a canvas (like an artist's canvas).
    // Let's transform it into something we can download.
    // We convert the canvas to a data URL, which is like a special address for our image.

    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

    // 4. Time to create a download link! We're making a clickable link for our image.

    var link = document.createElement('a');
    // We name our image 'screenshot.png' for the download.
    link.download = 'screenshot.png';
    
    link.href = image;
    // And then, we set the link to be click automatically so.
    // the images downloads right away.

    link.click();
    // 5. The grand finale! Our button did its magic trick. 
    // We remove the 'hidden' class, and our button is ready for work one more time!

    this.classList.remove('hidden');
  });
});


