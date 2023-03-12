let imgEl = document.querySelector('.bg-image');
let url = ["https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.2.1070014817.1675015122&semt=sph",
"https://img.freepik.com/free-photo/beautiful-shot-small-lake-with-wooden-rowboat-focus-breathtaking-clouds-sky_181624-2490.jpg?size=626&ext=jpg&ga=GA1.2.1070014817.1675015122&semt=sph",
"https://img.freepik.com/premium-photo/digital-national-geographic-realistic-illustration-with-stunning-scene_451583-211.jpg?size=626&ext=jpg&ga=GA1.2.1070014817.1675015122&semt=sph",
"https://img.freepik.com/premium-photo/winding-river-virgin-forest-valley-against-mountains_76964-970.jpg?size=626&ext=jpg&ga=GA1.2.1070014817.1675015122&semt=sph",
"https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?size=626&ext=jpg&ga=GA1.1.1070014817.1675015122&semt=sph",
"https://img.freepik.com/free-photo/beautiful-aerial-shot-forest-enveloped-creepy-mist-fog_181624-2659.jpg?size=626&ext=jpg&ga=GA1.1.1070014817.1675015122&semt=sph",
"https://img.freepik.com/free-photo/small-house-built-peaceful-green-hill-high-up-mountains_181624-8241.jpg?size=626&ext=jpg&ga=GA1.1.1070014817.1675015122&semt=sph"]


if (!imgEl) {
    console.error("Could not find element with class 'bg-image'");
  } else if (!url.length) {
    console.error("No URLs provided for background images");
  } else {
    let index = 1;
  
    setInterval(() => {
      imgEl.style.backgroundImage = `url(${url[index]})`;
      index = (index + 1) % url.length;
    }, 1000);
  }