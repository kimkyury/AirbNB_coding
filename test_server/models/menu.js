var mongoose = require("mongoose");

const nutrientsSchema = new mongoose.Schema({
  nt_calories: { type: Number, required: true },
  nt_totalCarbohydrate: { type: Number, required: true },
  nt_totalSugars: { type: Number, required: true },
  nt_protein: { type: Number, required: true },
  nt_totalFat: { type: Number, required: true },
  nt_SaturatedFat: { type: Number, required: true },
  nt_transFat: { type: Number, required: true },
  nt_cholesterol: { type: Number, required: true },
  nt_sodium: { type: Number, required: true },
});

const menuSchema = new mongoose.Schema({
  restaurantName: { type: String, required: true },
  menuName: { type: String, required: true, trim: true, maxLength: 20 },
  description: { type: String, required: true, trim: true, maxLength: 40 },
  allergies: [{ type: String, trim: true }],
  ingredients: { type: String, required: true },
  nutrients: nutrientsSchema,

  cookingTime: { type: Number, required: true },
  realeaseData: { type: Date, required: true },

  fileUrl: { type: String, required: true },
  imgUrl: { type: String, required: false },
});

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
