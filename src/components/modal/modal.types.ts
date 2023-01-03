import { ReactNode } from "react"

export type TModalProps = {
  children: ReactNode;
  header?: string;
  onClose: () => void;
}