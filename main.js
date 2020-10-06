window.onload = function () {
 
  class Circle {
    root = document.getElementsByClassName("app")[0];
    constructor(clientX, clientY, color) {
      this.circle = document.createElement("div");
      this.circle.classList.add("circle");
      this.circle.style.position = "absolute";
      this.circle.style.top = `${clientY}px`;
      this.circle.style.left = `${clientX}px`;
      this.circle.classList.add(color);
      this.root.append(this.circle);

      return this.circle;
    }
  }


  const keys = Array.from(document.getElementsByClassName("keys__item"));

  keys.forEach((key) => {
    const audio = Array.from(key.children).filter((child) =>
      child.classList.contains("audio")
    )[0];
    key.addEventListener("mousedown", (event) => {
      const color = Array.from(event.currentTarget.classList)[1];
      const circle = new Circle(event.clientX, event.clientY, color);
      audio.currentTime = 0;
      audio.play();
      circle.addEventListener("animationend", function () {
        root.removeChild(this)
      });
    });
  });
};
