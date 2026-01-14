import multer from "multer";

//SALVAR NA PASTA
// const diskStorage = multer.diskStorage({
//   filename: (req, file, cb) => {
//     const prefix = "img-" + Math.floor(Math.random() * 9999);
//     cb(null, prefix + ".jpg");
//   },
//   destination: (req, file, cb) => {
//     cb(null, "./public/uploads/tmp");
//   },
// });

//SALVAR NA MEMORIA
// const memStorage = multer.memoryStorage();

export const upload = multer({
  dest: "./public/tmp",
});
