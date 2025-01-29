import bcrypt from "bcryptjs";

const password = "preetiArts123";
const hashedPassword = bcrypt.hashSync(password, 10);

console.log("Hashed Password:", hashedPassword);
