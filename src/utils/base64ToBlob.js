export default function base64ToBlob(key, base64Data) {
  const regex = /^data:(image\/\w+|application\/pdf);base64,([\s\S]*)$/;
  const match = base64Data?.match(regex);
  if (match) {
    const contentType = match[1]; // Extract the content type
    const getExtensionFromMimeType = (contentType) => {
      const mimeMap = {
        "image/png": ".png",
        "image/jpeg": ".jpeg",
        "image/jpg": ".jpg",
        "application/pdf": ".pdf",
      };
      return mimeMap[contentType] || "";
    };
    const extension = getExtensionFromMimeType(contentType);
    const fileNameWithExtension = key + extension;
    const base64String = match[2]; // Extract the base64-encoded data
    const byteCharacters = atob(base64String);
    const byteNumbers = new Uint8Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const blobType = new Blob([byteNumbers], { type: contentType });
    return [blobType, fileNameWithExtension];
  } else {
    return false;
  }
}
