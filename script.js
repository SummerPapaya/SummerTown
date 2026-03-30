const infoName = document.getElementById("location-name");
const infoSummary = document.getElementById("location-summary");
const mapNodes = document.querySelectorAll(".map-node");

mapNodes.forEach((node) => {
  const title = node.dataset.title;
  const summary = node.dataset.summary;

  const updateInfo = () => {
    if (infoName && infoSummary) {
      infoName.textContent = title;
      infoSummary.textContent = summary;
    }
  };

  node.addEventListener("mouseenter", updateInfo);
  node.addEventListener("focus", updateInfo);
});
