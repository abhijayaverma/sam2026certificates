import { createCanvas, loadImage } from 'canvas';
export async function renderCertificate(template: ArrayBuffer, name: string){
  const img = await loadImage(Buffer.from(template));
  const canvas = createCanvas(img.width, img.height); const ctx = canvas.getContext('2d'); ctx.drawImage(img,0,0);
  const maxWidth = img.width * .68; let size = Math.round(img.width * .055);
  ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillStyle='#1f2937';
  do { ctx.font = `700 ${size}px Georgia, Times New Roman, serif`; if (ctx.measureText(name).width <= maxWidth) break; size -= 2; } while (size > 30);
  ctx.fillText(name, img.width/2, img.height*.56);
  return canvas.toBuffer('image/png');
}
