import { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface ToastNotificationProps {
  children: ReactNode;
}

const ToastNotification: FC<ToastNotificationProps> = ({ children }) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </>
  );
};

export default ToastNotification;
