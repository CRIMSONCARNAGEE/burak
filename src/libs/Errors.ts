export enum HttpCode {
  OK = 200,                     // So‘rov muvaffaqiyatli bajarildi
  CREATED = 201,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,              // Yangi resurs yaratildi
  INTERNAL_SERVER_ERROR = 500,  // Serverdagi umumiy xato
}
export enum Messages {
  NO_DATA_FOUND = "No data found for the requested query",
  CREATE_FAILED = "Failed to create new record",
  UPDATE_FAILED = "Failed to update the record",
  SOMETHING_WENT_WRONG = "An unexpected error occurred"
}

class Errors extends Error {
  public code: HttpCode;
  public message:  Messages;

  constructor(statusCode: HttpCode, statusMessage: Messages) {
    super()
    this.code = statusCode;
    this.message = statusMessage
  }
}

export default Errors;