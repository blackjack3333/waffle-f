export interface ITranscriptionResponse {
  transcription?: {
    id: string;
    filePath: string;
    link: string;
    text: string;
  };
}
