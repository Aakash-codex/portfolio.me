// Typing text content
const text = "Hi,\nI am Aakash\nFrontend developer";
const target = document.querySelector(".hero_text");

let index = 0;

// Set base style if needed
target.style.whiteSpace = "pre-line";
target.style.fontFamily = "Courier New, Courier, monospace";
target.style.fontSize = "24px";

// Typing effect
function typeLetterByLetter() {
  if (index < text.length) {
    target.innerHTML = `<span class="typing">${text.slice(0, index + 1)}</span>`;
    index++;
    setTimeout(typeLetterByLetter, 100);
  } else {
    target.textContent = text; // remove cursor after done
  }
}
typeLetterByLetter();

// Optional: Add blinking cursor effect
const style = document.createElement("style");
style.textContent = `
  .typing {
    border-right: 2px solid lightskyblue;
    animation: blink 0.75s step-end infinite;
  }
  @keyframes blink {
    from, to { border-color: transparent; }
    50% { border-color: lightskyblue; }
  }
`;
const nameSpan = document.querySelector('.aakashlight');
nameSpan.style.color = 'lightskyblue';


