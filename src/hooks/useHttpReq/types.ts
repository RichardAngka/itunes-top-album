export type uesHttpReqParams = {
  method: "get" | "post" | "put" | "delete";
  baseUrl?: string;
};

export type useHttpReqResponse = {
  data?: any;
  error?: any;
  isLoading: boolean;
};
