export default function validateAndRenameFile(file, fileName) {
  if (!file) {
    return null;
  }
  if (file.size > 1024 * 1024) {
    return alert("File size is larger than 1MB");;
  }
  const allowedExtensions = [".jpg", ".jpeg", ".png"];
  const originalFileName = file.name;
  const originalExtension = originalFileName.slice(
    ((originalFileName.lastIndexOf(".") - 1) >>> 0) + 2,
  );
  if (!allowedExtensions.includes(`.${originalExtension.toLowerCase()}`)) {
   return alert("File type not supported");
  }
  const renamedFileName = `${fileName}.${originalExtension}`;
  const renamedFile = new File([file], renamedFileName, { type: file.type });
  return renamedFile;
}
