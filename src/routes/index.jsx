import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

// eslint-disable-next-line react-hooks/rules-of-hooks

export function Routes() {
  const { user } = useAuth()
  
  return(
    <BrowserRouter>
      { user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}