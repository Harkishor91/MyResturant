// import { useMutation } from "react-query";
// import SecureStorage from "react-secure-storage";
// import { loginApi, registerApi } from "../api/authApi";
// import { saveData } from "../localStorage";

// export const useLogin = () => {
//   return useMutation(
//     async (credentials) => {
//       const data = await loginApi(credentials);        
//       saveData("TOKEN", data.token);
//       return data;
//     },
//     {
//       onError: (error) => {
//         console.error("Login failed:", error.message);
//       },
//     }
//   );
// };

// export const useRegister = () => {
//   return useMutation(
//     async (userInfo) => {
//       const data = await registerApi(userInfo);
//       SecureStorage.setItem("user", JSON.stringify(data));
//       return data;
//     },
//     {
//       onError: (error) => {
//         console.error("Registration failed:", error.message);
//       },
//     }
//   );
// };
