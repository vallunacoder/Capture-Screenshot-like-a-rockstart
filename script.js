// Oh, before we dive into the code, let's start with a friendly alert message.
// It's like saying "Hey there! How about a Canada Dry moment? 🍁"
alert("Hey there! How about a Canada Dry moment? 🍁");

// Now, onto the exciting part – capturing a screenshot!

// Imagine we have this cool button on our webpage, and when someone clicks it,
// we want to do some behind-the-scenes magic.

// This button has a special ID called 'screenshotBtn'.

document.getElementById('screenshotBtn').addEventListener('click', function() {
  // Inside this magical event, we have a few tricks up our sleeves:

  // 1. Let's play a bit of hide and seek! We make the button disappear by adding a 'hidden' class.
  // It's like telling the button, "Shh, go hide for a moment."
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
    // It's like giving our image a passport to travel from the web to our device.

    var link = document.createElement('a');
    // We name our image 'screenshot.png' for the download.
    link.download = 'screenshot.png';
    // The link gets the special power of our screenshot data URL.
    link.href = image;
    // And then, we secretly tell the link to click itself, triggering the download.

    link.click();

    // 5. The grand finale! Our button did its magic trick. Let's bring it back to the stage.
    // We remove the 'hidden' class, and our button is ready for an encore!

    this.classList.remove('hidden');
  });
});


