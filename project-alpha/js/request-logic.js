// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
  let output;
  switch (extension) {
    case "html":
      output = "text/html";
      break;
    case "css":
      output = "text/css";
      break;
    case "jpeg":
      output = "image/jpeg";
      break;
    case "jpg":
      output = "image/jpeg";
      break;
    default:
      output = "text/plain";
      break;

  }
  return output
}