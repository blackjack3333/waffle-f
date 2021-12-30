import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useQuery } from "react-query";
import { BACK_API } from "src/config";
import { ISpacesResponse } from "src/models";

export const useSpaces = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const getSpaces = async () => {
    const token = await getAccessTokenSilently();
    if (token) {
      const { data } = await axios.get<ISpacesResponse>(`${BACK_API}/api/v1/spaces`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    }
  };

  return useQuery(["spaces"], () => getSpaces(), { enabled: isAuthenticated });
};
