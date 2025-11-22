export const BASE_URL = "http://localhost:3030/api/";

// user endPoints
export const GetAllUser_URL = BASE_URL + "auth/getAllUsers";
export const Login_URL = BASE_URL + "auth/login";
export const Register_URL = BASE_URL + "auth/register";

// food endPoints
export const GetFoodList_URL = BASE_URL + "food/getFood";
export const AddFood_URL = BASE_URL + "food/addFood";

// table endPoints
export const AvailableTable_URL = BASE_URL + "table/freeTables";
export const AddTable_URL = BASE_URL + "table/addTable";
export const BookTable_URL = BASE_URL + "table/bookTable";
