function setVisible() {
  para = document.querySelector(".story");
  para.style.visibility = "visible";
  const Names = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas",
    ["Disneyland", "the White House", "the soup kitchen"],
    [
      "spontaneously combusted",
      "into a slug and crawled away",
      "melted into a puddle on the sidewalk",
    ],
  ];
  let inputValue = document.getElementById("customname").value;
  if (inputValue === "") {
    inputValue = "Bob";
  } else {
    inputValue = document.getElementById("customname").value;
  }
  const selectedRadioButton = document.querySelector(
    'input[name="Lang"]:checked'
  );
  let temp;
  let weight;
  if (selectedRadioButton.value === "US") {
    temp = "94 fahrenheit";
    weight = "300 pounds";
  } else {
    temp = "34 centigrade";
    weight = "21 stone";
  }
  let random = Math.floor(Math.random() * 3);
  let paraInnerText = `It was ${temp} outside, so ${Names[random]} went for a walk. When they got to ${Names[3][random]}, they stared in horror for a few moments, then turned ${Names[4][random]}. ${inputValue} saw the whole thing, but was not surprised — ${Names[random]} weighs ${weight}, and it was a hot day.`;
  para.textContent = paraInnerText;
}
button = document.querySelector("button");
button.addEventListener("click", setVisible);
button.focus();
