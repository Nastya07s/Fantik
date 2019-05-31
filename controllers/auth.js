const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const keys = require('../config/keys');
const errorHandler = require('../utils/errorHandler');

module.exports.login = async function (req, res) {

  const candidate = await User.findOne({email: req.body.email});

  if (candidate) {

    const passResult = bcrypt.compareSync(req.body.pass,candidate.pass);

    if (passResult){
      //В sign ложим те значения которые хотим знать у пользователя, второй параметр секретный ключ, третий время жизни токена
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      },keys.jwt,{expiresIn: 60*60});//время жизни час

      res.status(200).json({
        token: `Bearer ${token}`
      })

    }else{

      res.status(401).json({
        message: 'Пароль введен неверно'
      })
    }
  } else {

    res.status(404).json({
      message: 'Такого пользователя не существует'
    })
  }
};

module.exports.register = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email});

  if (candidate) {
    res.status(409).json({
      message: "Такой email уже занят"
    })
  } else {
    const salt = bcrypt.genSaltSync(10);
    const pass = req.body.pass;
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      pass: bcrypt.hashSync(pass, salt)
    });

    try {
      await user.save()
      res.status(201).json(user)
    } catch (e) {
      errorHandler(res,e)
    }
  }
};
