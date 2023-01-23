import { TOrderStatus } from "../types/generalTypes";

const statusConverted: Record<TOrderStatus, string> = {
  done: "Выполнен",
  pending: "Готовится",
  created: "Создан",
};

export const convertStatus = (status: TOrderStatus): string => {
  return statusConverted[status];
};
