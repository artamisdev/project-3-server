import mongoose from ("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
      //Informações de login e acesso do usuário
      username: { type: String, required: true },
      email: {
        type: String,
        required: true,
        unique: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      },
      passwordHash: { type: String, required: true },
      age: {type: Number},
      role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
      //Usaremos para pesquisar/filtrar a região do usuário e talvez criar um mapa do globo para mostrar onde temos jardins
      region:{type: String, required: true ,default: "Escolha sua região"},
      country:{type: String, required: true ,default: "Escolha seu país"},
      city:{type: String, required: true ,default: "Escolha sua cidade"},
      //Onde será possível comentar o jardim do vizinho ;)
      posts: [{ type: Schema.Types.ObjectId, ref: "Post" }], 
      //Onde mostraremos quem o usuário segue e quantos o seguem
      followers: [{ type: Schema.Types.ObjectId, ref: "User" }], 
      following: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //Puxando o Garden.Model
      garden: [{ type: Schema.Types.ObjectId, ref: "garden" }],
      //Areas de vivência da casa
      residence:{type: String, enum: ["Apartamento","Casa","Sítio","Studio","Escritório","Outro"]},
      livingSpace:{type: String, required: true , enum: ["Sala", "Banheiro","Cozinha","Jardim","Varanda","Lavanderia","Quarto","Outros"], default: "other"},
      emailConfirm: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
  );
  
  export const UserModel = mongoose.model("User", UserSchema);
  
