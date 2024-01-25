export default function validateAndRenameFile(file, fileName) {
  console.log(file, fileName, "Hello from functi");
  if (!file) {
    return [false, "Files not found"];
  }
  if (file.size > 5000000) {//max file 5MB
    return [false, "File size too large"];
  }
  const allowedExtensions = [".jpg", ".jpeg", ".png", ".pdf"];
  const originalFileName = file.name;
  const originalExtension = originalFileName.slice(
    ((originalFileName.lastIndexOf(".") - 1) >>> 0) + 2,
  );
  if (!allowedExtensions.includes(`.${originalExtension.toLowerCase()}`)) {
    return [false, "File type not allowed"];
  }
  const renamedFileName = `${fileName}.${originalExtension}`;
  const renamedFile = new File([file], renamedFileName, { type: file.type });
  return [true, renamedFile];
}
