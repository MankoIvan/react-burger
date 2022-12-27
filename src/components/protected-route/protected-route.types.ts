import { ReactNode } from "react";

export type TProtectedRouteProps = {
  authRequired?: boolean;
  children: ReactNode;
  path: string;
  exact?: boolean
}