const Datastore = require("nedb-promise");
const password = new Datastore({
  filename: "./db/password.db",
  autoload: true,
});
const {v4 : uuidv4} = require('uuid');

const userId = uuidv4()

module.exports = {
  //GET ALL PASSWORDS
  async getAll() {
    return await password.find({});
  },
  //GET ONE PASSWORD
  async get(passwordID) {
    return await password.findOne({ _id: passwordID });
  },
  //CREATE NEW PASSEWORD
  async create(body) {
    if (body.password == true) {
      const passwordHash = await bcrypt.hash(body.password, 10);
      const newPassword = {
        site: body.site,
        username: body.username,
        password: passwordHash,
        role: "user",
        _id:userId
      };
      console.log("Created password", newPassword);
      return await password.insert(newPassword);
    } else {
      return false;
    }
  },
};
