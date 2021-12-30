enum RouteTypes {
  home = "/",
  spaces = "/spaces",
  space = "/spaces/:spaceId",
  transcriptions = "/spaces/:spaceId/transcriptions/:transcriptionId",
  search = "/search",
  login = "/login",
}

export { RouteTypes };
export default RouteTypes;
