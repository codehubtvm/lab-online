const programs = [
  "adder","bankers","cscan","deadlock","diningph",
  "fork1","fork_exec","fullscheduling","look","multithread",
  "osfork","pagereplacement","paging","process1","process2",
  "quadratic","receiver","semaphores12","semaphores13",
  "sender","sstf","time_print"
];

const grid = document.getElementById("grid");
const codeBox = document.getElementById("code");

/* CREATE BUTTONS */
programs.forEach(p => {
  const btn = document.createElement("button");
  btn.innerText = p.toUpperCase();
  btn.onclick = () => loadCode(p);
  grid.appendChild(btn);
});

/* LOAD CODE FILE */
async function loadCode(program) {
  codeBox.innerText = "Loading...";

  try {
    const res = await fetch(`programs/${program}.c`);
    const text = await res.text();
    codeBox.innerText = text;
  } catch (err) {
    codeBox.innerText = "Error loading file";
  }
}

/* SEARCH */
function filterPrograms() {
  const val = document.getElementById("search").value.toLowerCase();
  const buttons = document.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.style.display = btn.innerText.toLowerCase().includes(val)
      ? "block"
      : "none";
  });
}
