document.getElementById('btn').addEventListener('click', () => {
  const name = document.getElementById('dogName').value.trim();
  const age = Number(document.getElementById('dogAge').value);
  const output = document.getElementById('output');

  if (!name || isNaN(age) || age <= 0) {
    output.innerHTML = "Please enter a valid name and age.";
    return;
  }

  const humanAge = ((age - 2) * 4) + 21;
  output.innerHTML = `${name} is approximately ${humanAge.toFixed(2)} human years old.`;
});
