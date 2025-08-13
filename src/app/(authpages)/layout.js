// authpages layout.js

import "../globals.css"; 
export const metadata = {
  title: "Cryptxion-login",
};
import { Toaster } from "sonner";

export default function AuthLayout({ children }) {
  return (
    
        <div>
          {children}
          <Toaster/>
        </div>

 
  );
}

