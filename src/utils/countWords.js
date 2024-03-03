export default function countWords(text, wordsLength = 10) {
  if (typeof text === "string") {
    const words = text.split(" ").slice(0, wordsLength).join(" ");
    return words;
  } else {
    return null;
  }
}
