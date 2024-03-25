import useSWR from "swr";
import { readUserCookie } from "../page/api/userAPI";

export const useUserCookie = () => {
  const { data, isLoading } = useSWR("/get-user-cookie", async () => {
    return readUserCookie().then((res: any) => {
      return res;
    });
  });
  return { data, isLoading };
};
