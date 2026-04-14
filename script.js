(() => {
  const img = document.getElementById("app-shot");
  if (!img) return;

  const candidates = [
    "./images/main.gif",
    "./images/main.webp",
    "./images/main.png",
    "./images/main.jpg",
    "./images/main.jpeg",
    "./images/welcome.gif"
  ];

  const pickFirstAvailable = async () => {
    for (const src of candidates) {
      const testImg = new Image();
      testImg.src = src;

      const loaded = await new Promise((resolve) => {
        testImg.onload = () => resolve(true);
        testImg.onerror = () => resolve(false);
      });

      if (loaded) {
        img.src = src;
        return;
      }
    }
  };

  pickFirstAvailable();
})();