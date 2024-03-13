import { Login } from "@/components/Login";
import SignButtons from "@/components/SignButtons";

export default function UserLogin() {

    return (
    <div className="items-center justify-center h-screen">
      <SignButtons />
      <Login />
    </div> 
    );
}