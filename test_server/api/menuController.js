import Menu from "../models/Menu";

// 가게명을 검색받기
export const searchRestaurant = async (req, res) => {
  const { restaurantName } = req.params;
  let menus = [];
  if (restaurantName) {
    menus = await Menu.find({
      restaurantName: {
        $regex: new RegExp(`${restaurantName}$`, "i"),
      },
    });
  }
  res.json({ success: true, data: menus });
};

// 모든 객체의 모든 정보를 보내주기
export const index = async (req, res) => {
  const menus = await Menu.find({}).sort({ menuName: "asc" });
  res.json(menus);
};

// 알레르기 검색받기
export const searchAllergy = async (req, res) => {
  const { allergies } = req.params;
  let menus = [];
  if (allergies) {
    menus = await Menu.find({
      allergies: {
        $regex: new RegExp(`${allergies}$`, "i"),
      },
    });
  }
  res.json({ success: true, data: menus });
};
