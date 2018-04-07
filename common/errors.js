const status = require('http-status');

class RuntimeError extends Error {}
class ServiceNotFoundError extends RuntimeError {}
class ConfigurationError extends RuntimeError {}

class ApiError extends Error {
  constructor(message, httpStatus, previousError) {
    if (message instanceof Error) {
      previousError = message;
      message = previousError.message;
    }

    super(message);
    this.httpStatus = httpStatus || status.INTERNAL_SERVER_ERROR;
    this.previousError = previousError;
  }
}

class AuthorizationError extends ApiError {
  constructor(message, previousError) {
    super(message, status.UNAUTHORIZED, previousError);
  }
}

class AuthenticationError extends ApiError {
  constructor(message, previousError) {
    super(message, status.FORBIDDEN, previousError);
  }
}

class BadRequestError extends ApiError {
  constructor(message, previousError) {
    super(message, status.BAD_REQUEST, previousError);
  }
}

class InternalServerError extends ApiError {
  constructor(message, previousError) {
    super(message, status.INTERNAL_SERVER_ERROR, previousError);
  }
}

class NotFoundError extends ApiError {
  constructor(message, previousError) {
    super(message, status.NOT_FOUND, previousError);
  }
}

module.exports = {
  RuntimeError,
  ServiceNotFoundError,
  ConfigurationError,
  ApiError,
  AuthorizationError,
  AuthenticationError,
  BadRequestError,
  InternalServerError,
  NotFoundError,
};
