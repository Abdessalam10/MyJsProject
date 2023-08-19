const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.createUser = (req, res, next) => {
  console.log(req.body);
  bcrypt
    .hash(req.body.password, 7)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
        number: req.body.number,
        username: req.body.username,
        image: req.body.image,
        role: req.body.role,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "success" }))
        .catch(() => res.status(400).json({ message: "error" }));
    })
    .catch(() => res.status(500).json({ message: "error" }));
  /*const user = new Users({
    ...req.body,
  });*/
};

exports.modifyUser = (req, res, next) => {
  Users.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "User modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};
exports.getUsers = (req, res, next) => {
  User.find()
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
};

exports.getUser = (req, res, next) => {
  Users.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteUser = (req, res, next) => {
  Users.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "User supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: "Paire login/mot de passe incorrecte" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ message: "Paire login/mot de passe incorrecte" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "Random", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
