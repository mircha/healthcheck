let problems = document.getElementById("problemsContainer"),
  gain = document.getElementById("gain"),
  automate = document.getElementById("automate"),
  plain = document.getElementById("plain"),
  legacy = document.getElementById("legacy"),
  speed = document.getElementById("speed"),
  enrich = document.getElementById("enrich"),
  migrate = document.getElementById("migrate"),
  workflows = document.getElementById("workflows");
document.addEventListener("DOMContentLoaded", function () {
  problems.innerHTML = speed.innerHTML;

  gain.addEventListener("click", () => {
    problems.innerHTML = speed.innerHTML;
    [gain, automate, plain, legacy].forEach((el) => {
      el.classList.remove("active");
    });
    gain.classList.add("active");
  });

  automate.addEventListener("click", () => {
    problems.innerHTML = workflows.innerHTML;
    [gain, automate, plain, legacy].forEach((el) => {
      el.classList.remove("active");
    });
    automate.classList.add("active");
  });

  plain.addEventListener("click", () => {
    problems.innerHTML = enrich.innerHTML;
    [gain, automate, plain, legacy].forEach((el) => {
      el.classList.remove("active");
    });
    plain.classList.add("active");
  });

  legacy.addEventListener("click", () => {
    problems.innerHTML = migrate.innerHTML;
    [gain, automate, plain, legacy].forEach((el) => {
      el.classList.remove("active");
    });
    legacy.classList.add("active");
  });
});
