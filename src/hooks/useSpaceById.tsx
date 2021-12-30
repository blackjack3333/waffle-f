import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useQuery } from "react-query";
import { BACK_API } from "src/config";
import { ISpaceResponse } from "src/models";

export const useSpaceById = (spaceId: string) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const getSpaceDetails = async (spaceId: string) => {
    const token = await getAccessTokenSilently();
    if (token) {
      const { data } = await axios.get<ISpaceResponse>(`${BACK_API}/api/v1/spaces/${spaceId}/transcriptions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    }
  };

  return useQuery(["spaceDetails"], () => getSpaceDetails(spaceId), {
    enabled: isAuthenticated,
  });
};
