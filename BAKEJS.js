<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Date and Lightbox Slideshow</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      text-align: center;
      margin: 0;
      padding: 0;
    }

    /* Date styling */
    #date {
      background-color: #333;
      color: #fff;
      padding: 15px;
      font-size: 20px;
    }

    /* Gallery grid */
    .gallery {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    .gallery img {
      width: 200px;
      height: 130px;
      margin: 10px;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.3s;
    }

    .gallery img:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }

    /* Lightbox background */
    .lightbox {
      display: none;
      position: fixed;
      z-index: 1000;
      padding-top: 60px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0,0,0,0.9);
    }

    /* Lightbox image */
    .lightbox-content {
      margin: auto;
      display: block;
      width: 80%;
      max-width: 700px;
      border-radius: 10px;
    }

    /* Close button */
    .close {
      position: absolute;
      top: 30px;
      right: 50px;
      color: white;
      font-size: 40px;
      font-weight: bold;
      cursor: pointer;
    }

    /* Caption */
    #caption {
      color: #ccc;
      font-size: 18px;
      margin-top: 15px;
    }
  </style>
</head>
<body>

  <!-- Automatic Date -->
  <div id="date"></div>

  <h1>My Lightbox Slideshow</h1>

  <!-- Image Gallery -->
  <div class="gallery">
    <img src="https://via.placeholder.com/600x400/ff7f7f/333333?text=Image+1" alt="Beautiful Landscape 1">
    <img src="https://via.placeholder.com/600x400/7fbfff/333333?text=Image+2" alt="Beautiful Landscape 2">
    <img src="https://via.placeholder.com/600x400/7fff7f/333333?text=Image+3" alt="Beautiful Landscape 3">
    <img src="https://via.placeholder.com/600x400/ffff7f/333333?text=Image+4" alt="Beautiful Landscape 4">
  </div>

  <!-- Lightbox Section -->
  <div id="myLightbox" class="lightbox">
    <span class="close">&times;</span>
    <img class="lightbox-content" id="lightbox-img">
    <div id="caption"></div>
  </div>

  <script>
    // ✅ Display Automatic Date
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").textContent = today.toLocaleDateString('en-GB', options);

    // ✅ Lightbox Script
    const lightbox = document.getElementById("myLightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    // When an image is clicked
    document.querySelectorAll(".gallery img").forEach(img => {
      img.addEventListener("click", function() {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
        captionText.innerHTML = this.alt;
      });
    });

    // Close when clicking the close button
    closeBtn.onclick = function() {
      lightbox.style.display = "none";
    }

    // Close when clicking outside the image
    lightbox.onclick = function(e) {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    }
  </script>

</body>
</html>