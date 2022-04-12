const User = require("../models/User");

module.exports = {
  async index(request, response) {
    const { email } = request.params;

    let user = await User.findOne({ email });

    if (user) {
      return response
        .status(200)
        .send({ message: "Login efetuado", user: user });
    } else if (!user) {
      return response.status(406).send({ message: "Usúario não cadastrado" });
    }
  },

  async store(request, response) {
    const { email, senha } = request.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        email,
        senha,
      });

      return response
        .status(200)
        .send({ message: "Usúario cadastrado com sucesso", user: user });
    } else if (user) {
      return response.status(406).send({ message: "Usúario já cadastrado" });
    }
  },
};
