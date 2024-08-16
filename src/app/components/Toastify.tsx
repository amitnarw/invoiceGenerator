import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastifySuccess = (msg: string) => {
  toast(msg, {
    type: "success",
    position: "bottom-center",
    autoClose: 1000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Bounce,
  });
};

export const toastifyError = (msg: string) => {
  toast(msg, {
    type: "error",
    position: "bottom-center",
    autoClose: 1000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Bounce,
  });
};
