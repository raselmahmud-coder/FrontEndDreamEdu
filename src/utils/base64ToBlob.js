export default function base64ToBlob(base64Data) {
  const regex = /^data:(image\/\w+);base64,([\s\S]*)$/;
  const match = base64Data.match(regex);
  if (!match) {
    return alert("Invalid base64 image data");
  }
  const contentType = match[1]; // Extract the content type
  const base64String = match[2]; // Extract the base64-encoded data
  const byteCharacters = atob(base64String);
  const byteNumbers = new Uint8Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  return new Blob([byteNumbers], { type: contentType });
}
