let counterProm = new Promise((resolve, reject) => {
  let interval = setInterval(() => {
    const find = document.querySelector(".green");
    if (find !== null) {
      clearInterval(interval);
      let updatedLoads = localStorage.getItem("updated");
      updatedLoads = JSON.parse(updatedLoads);
      resolve(updatedLoads);
    }
  }, 1000);
});

counterProm.then((updatedLoads) => {
  window.addEventListener("storage", function (e) {
    updatedLoads = localStorage.getItem("updated");
    updatedLoads = JSON.parse(updatedLoads);
  });

  let elemBeforeCounter = document.querySelector(".headline5");

  let counterContainer = document.createElement("div");
  counterContainer.classList.add("counterContainer");
  elemBeforeCounter.append(counterContainer);

  let updateCounter = document.createElement("div");
  updateCounter.classList.add("updateCounter");
  counterContainer.append(updateCounter);

  let updateLabel = document.createElement("div");
  updateLabel.classList.add("updateLabel");
  updateLabel.textContent = "Updates";
  updateCounter.append(updateLabel);

  let updateNumber = document.createElement("div");
  updateNumber.classList.add("updateNumber");
  updateCounter.append(updateNumber);

  let loadsCounter = document.createElement("div");
  loadsCounter.classList.add("loadsCounter");
  counterContainer.append(loadsCounter);

  let loadsLabel = document.createElement("div");
  loadsLabel.classList.add("loadsLabel");
  loadsLabel.textContent = "Loads";
  loadsCounter.append(loadsLabel);

  let loadsNumber = document.createElement("div");
  loadsNumber.classList.add("updateNumber");
  loadsCounter.append(loadsNumber);

  let clearBtn = document.createElement("button");
  clearBtn.classList.add("clearBtn");
  clearBtn.textContent = "clear";
  counterContainer.append(clearBtn);

  clearBtn.addEventListener("click", function () {
    updatedLoads.updates = 0;
    updatedLoads.loads = 0;
    localStorage.setItem("updated", JSON.stringify(updatedLoads));
  });

  let countsInt = setInterval(() => {
    updatedLoads = localStorage.getItem("updated");
    updatedLoads = JSON.parse(updatedLoads);
    updateNumber.textContent = updatedLoads.updates;
    loadsNumber.textContent = updatedLoads.loads;
  }, 1000);
});
