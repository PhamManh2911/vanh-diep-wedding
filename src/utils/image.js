function createImage(options) {
  const img = (Image) ? new Image() : document.createElement("img");
  if (options.src) {
  	img.src = options.src;
  }
  return img;
}

async function copyImageToClipboard(pngBlob, callback) {
  try {
    await navigator.clipboard.write([
      new ClipboardItem({
        "image/png": pngBlob
      })
    ]);
    console.log("Image copied");
    callback();
  } catch (error) {
    console.error(error);
  }
}

export function convertToPng(src, callback) {
  const image = new Image();

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  image.onload = (e) => {
    canvas.width = e.target.naturalWidth;
    canvas.height = e.target.naturalHeight;
    ctx.drawImage(e.target, 0, 0);
    canvas.toBlob((pngBlob) => copyImageToClipboard(pngBlob, callback), "image/png");
  };     
  image.src = src;
}
