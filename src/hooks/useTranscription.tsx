import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useQuery } from "react-query";
import { BACK_API } from "src/config";
import { ITranscriptionResponse } from "src/models";

export const useTranscription = (spaceId: string, transcriptionId: string) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const getTranscription = async (spaceId: string, transcriptionId: string) => {
    const token = await getAccessTokenSilently();
    if (token) {
      const { data } = await axios.get<ITranscriptionResponse>(
        `${BACK_API}/api/v1/spaces/${spaceId}/transcriptions/${transcriptionId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    }
  };

  return useQuery(
    ["transcriptionDetails"],
    () => getTranscription(spaceId, transcriptionId),
    {
      enabled: isAuthenticated,
    }
  );
};
