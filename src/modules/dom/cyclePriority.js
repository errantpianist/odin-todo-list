export default function cyclePriority(target) {
  if (target.classList.contains("normal")) {
    target.classList.remove("normal");
    target.classList.add("high");
  } else if (target.classList.contains("high")) {
    target.classList.remove("high");
    target.classList.add("low");
  } else if (target.classList.contains("low")) {
    target.classList.remove("low");
    target.classList.add("normal");
  }
}
