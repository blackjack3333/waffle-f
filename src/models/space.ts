export interface ISpaceResponse {
  transcriptions?: {
    id: string;
    filePath: string;
    link: string;
    text: string;
  }[];
}
