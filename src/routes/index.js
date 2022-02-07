import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("Servidor express ok!");
});

router.get("/contador", (req, res) => {
  if (req.session.contador) {
    req.session.contador++;
    res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`);
  } else {
    req.session.contador = 1;
    res.send("Bienvenido!");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) res.send("Logout ok!");
    else res.send({ status: "Logout ERROR", body: err });
  });
});

router.get("/info", (req, res) => {
  res.send({
    session: req.session,
    sessionId: req.sessionID,
    cookies: req.cookies,
  });
});

export default router;

// router.get("/login", (req, res) => {
//   const pass = req.query;

//   if (pass.myUser == myUser && pass.myPassword == myPassword) {
//     req.session.loggedIn = true;
//     req.session.contador = 1;
//     req.session.admin = true;
//     res.json({ msg: "bienvenido", oneDay });
//   } else res.status(401).json({ msg: "no estas autorizado" });
// });

// router.get("/logout", (req, res) => {
//   req.session.destroy();
//   res.json({ msg: "session destruida" });
// });

// const validateLogIn = (req, res, next) => {
//   if (req.session.loggedIn) next();
//   else res.status(401).json({ msg: "no estas autorizado" });
// };

// router.get("/", validateLogIn, getProducts);

// export default router;
