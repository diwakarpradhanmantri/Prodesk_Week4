const form = document.getElementById("coverForm");
const outputBox = document.getElementById("outputBox");
const letterOutput = document.getElementById("letterOutput");
const copyBtn = document.getElementById("copyBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const company = document.getElementById("company").value;
  const skills = document.getElementById("skills").value;

  const letter = mockAI(name, role, company, skills);

  letterOutput.value = letter;
  outputBox.classList.remove("hidden");
});

// Mock AI Function
function mockAI(name, role, company, skills) {
  return `Dear Hiring Manager at ${company},

I am writing to express my interest in the ${role} position at your organization.

My name is ${name}, and I bring hands-on experience with ${skills}. I am passionate about applying my skills to solve real-world problems and contribute meaningfully to your team.

I am excited about the opportunity to grow with ${company} and would welcome the chance to discuss how I can add value.

Thank you for your time and consideration.

Sincerely,  
${name}`;
}

// Copy to Clipboard
copyBtn.addEventListener("click", function () {
  letterOutput.select();
  document.execCommand("copy");
  copyBtn.innerText = "Copied!";
});