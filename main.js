window.onload = function () {
  const keys = Array.from(document.getElementsByClassName("keys__item"));
  keys.forEach((key) => {
    const audio = Array.from(key.children).filter((child) =>
      child.classList.contains("audio")
    )[0];
    key.addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play();
    });
  });
};
