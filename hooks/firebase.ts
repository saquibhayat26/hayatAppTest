import messaging from "@react-native-firebase/messaging";
import { useEffect } from "react";

const requestPermission = async () => {
  const authStatus = await messaging().requestPermission();
  console.log(
    "🚀 ~ file: firebase.ts:7 ~ requestPermission ~ authStatus:",
    authStatus
  );
};

const useFirebase = () => {
  useEffect(() => {
    console.log("useFirebase");
    requestPermission();
  }, []);
  return null;
};

export default useFirebase;
