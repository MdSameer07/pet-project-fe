// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_movie$suggestions_pb = require('../proto/movie-suggestions_pb.js');

function serialize_proto_AddMovieToDatabaseRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.AddMovieToDatabaseRequest)) {
    throw new Error('Expected argument of type proto.AddMovieToDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AddMovieToDatabaseRequest(buffer_arg) {
  return proto_movie$suggestions_pb.AddMovieToDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_AddMovieToDatabaseResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.AddMovieToDatabaseResponse)) {
    throw new Error('Expected argument of type proto.AddMovieToDatabaseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AddMovieToDatabaseResponse(buffer_arg) {
  return proto_movie$suggestions_pb.AddMovieToDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_AddMovieToLikesRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.AddMovieToLikesRequest)) {
    throw new Error('Expected argument of type proto.AddMovieToLikesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AddMovieToLikesRequest(buffer_arg) {
  return proto_movie$suggestions_pb.AddMovieToLikesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_AddMovieToLikesResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.AddMovieToLikesResponse)) {
    throw new Error('Expected argument of type proto.AddMovieToLikesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AddMovieToLikesResponse(buffer_arg) {
  return proto_movie$suggestions_pb.AddMovieToLikesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_AddMovieToWatchListRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.AddMovieToWatchListRequest)) {
    throw new Error('Expected argument of type proto.AddMovieToWatchListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AddMovieToWatchListRequest(buffer_arg) {
  return proto_movie$suggestions_pb.AddMovieToWatchListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_AddMovieToWatchListResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.AddMovieToWatchListResponse)) {
    throw new Error('Expected argument of type proto.AddMovieToWatchListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AddMovieToWatchListResponse(buffer_arg) {
  return proto_movie$suggestions_pb.AddMovieToWatchListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_AddReviewRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.AddReviewRequest)) {
    throw new Error('Expected argument of type proto.AddReviewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AddReviewRequest(buffer_arg) {
  return proto_movie$suggestions_pb.AddReviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_AddReviewResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.AddReviewResponse)) {
    throw new Error('Expected argument of type proto.AddReviewResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AddReviewResponse(buffer_arg) {
  return proto_movie$suggestions_pb.AddReviewResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DeleteFeedBackRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.DeleteFeedBackRequest)) {
    throw new Error('Expected argument of type proto.DeleteFeedBackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DeleteFeedBackRequest(buffer_arg) {
  return proto_movie$suggestions_pb.DeleteFeedBackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DeleteFeedBackResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.DeleteFeedBackResponse)) {
    throw new Error('Expected argument of type proto.DeleteFeedBackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DeleteFeedBackResponse(buffer_arg) {
  return proto_movie$suggestions_pb.DeleteFeedBackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DeleteMovieFromDatabaseRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.DeleteMovieFromDatabaseRequest)) {
    throw new Error('Expected argument of type proto.DeleteMovieFromDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DeleteMovieFromDatabaseRequest(buffer_arg) {
  return proto_movie$suggestions_pb.DeleteMovieFromDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DeleteMovieFromDatabaseResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.DeleteMovieFromDatabaseResponse)) {
    throw new Error('Expected argument of type proto.DeleteMovieFromDatabaseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DeleteMovieFromDatabaseResponse(buffer_arg) {
  return proto_movie$suggestions_pb.DeleteMovieFromDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DeleteReviewRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.DeleteReviewRequest)) {
    throw new Error('Expected argument of type proto.DeleteReviewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DeleteReviewRequest(buffer_arg) {
  return proto_movie$suggestions_pb.DeleteReviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DeleteReviewResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.DeleteReviewResponse)) {
    throw new Error('Expected argument of type proto.DeleteReviewResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DeleteReviewResponse(buffer_arg) {
  return proto_movie$suggestions_pb.DeleteReviewResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetAllMoviesRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.GetAllMoviesRequest)) {
    throw new Error('Expected argument of type proto.GetAllMoviesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetAllMoviesRequest(buffer_arg) {
  return proto_movie$suggestions_pb.GetAllMoviesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetAllMoviesResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.GetAllMoviesResponse)) {
    throw new Error('Expected argument of type proto.GetAllMoviesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetAllMoviesResponse(buffer_arg) {
  return proto_movie$suggestions_pb.GetAllMoviesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetFeedBackRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.GetFeedBackRequest)) {
    throw new Error('Expected argument of type proto.GetFeedBackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetFeedBackRequest(buffer_arg) {
  return proto_movie$suggestions_pb.GetFeedBackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetFeedBackResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.GetFeedBackResponse)) {
    throw new Error('Expected argument of type proto.GetFeedBackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetFeedBackResponse(buffer_arg) {
  return proto_movie$suggestions_pb.GetFeedBackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GiveFeedBackRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.GiveFeedBackRequest)) {
    throw new Error('Expected argument of type proto.GiveFeedBackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GiveFeedBackRequest(buffer_arg) {
  return proto_movie$suggestions_pb.GiveFeedBackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GiveFeedBackResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.GiveFeedBackResponse)) {
    throw new Error('Expected argument of type proto.GiveFeedBackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GiveFeedBackResponse(buffer_arg) {
  return proto_movie$suggestions_pb.GiveFeedBackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_LoginRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.LoginRequest)) {
    throw new Error('Expected argument of type proto.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_LoginRequest(buffer_arg) {
  return proto_movie$suggestions_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_LoginResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.LoginResponse)) {
    throw new Error('Expected argument of type proto.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_LoginResponse(buffer_arg) {
  return proto_movie$suggestions_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_MarkAsReadRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.MarkAsReadRequest)) {
    throw new Error('Expected argument of type proto.MarkAsReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_MarkAsReadRequest(buffer_arg) {
  return proto_movie$suggestions_pb.MarkAsReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_MarkAsReadResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.MarkAsReadResponse)) {
    throw new Error('Expected argument of type proto.MarkAsReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_MarkAsReadResponse(buffer_arg) {
  return proto_movie$suggestions_pb.MarkAsReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_MarkAsUnreadRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.MarkAsUnreadRequest)) {
    throw new Error('Expected argument of type proto.MarkAsUnreadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_MarkAsUnreadRequest(buffer_arg) {
  return proto_movie$suggestions_pb.MarkAsUnreadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_MarkAsUnreadResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.MarkAsUnreadResponse)) {
    throw new Error('Expected argument of type proto.MarkAsUnreadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_MarkAsUnreadResponse(buffer_arg) {
  return proto_movie$suggestions_pb.MarkAsUnreadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RegisterRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.RegisterRequest)) {
    throw new Error('Expected argument of type proto.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RegisterRequest(buffer_arg) {
  return proto_movie$suggestions_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RegisterResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.RegisterResponse)) {
    throw new Error('Expected argument of type proto.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RegisterResponse(buffer_arg) {
  return proto_movie$suggestions_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveMovieFromLikesRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.RemoveMovieFromLikesRequest)) {
    throw new Error('Expected argument of type proto.RemoveMovieFromLikesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveMovieFromLikesRequest(buffer_arg) {
  return proto_movie$suggestions_pb.RemoveMovieFromLikesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveMovieFromLikesResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.RemoveMovieFromLikesResponse)) {
    throw new Error('Expected argument of type proto.RemoveMovieFromLikesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveMovieFromLikesResponse(buffer_arg) {
  return proto_movie$suggestions_pb.RemoveMovieFromLikesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveMovieFromWatchListRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.RemoveMovieFromWatchListRequest)) {
    throw new Error('Expected argument of type proto.RemoveMovieFromWatchListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveMovieFromWatchListRequest(buffer_arg) {
  return proto_movie$suggestions_pb.RemoveMovieFromWatchListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveMovieFromWatchListResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.RemoveMovieFromWatchListResponse)) {
    throw new Error('Expected argument of type proto.RemoveMovieFromWatchListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveMovieFromWatchListResponse(buffer_arg) {
  return proto_movie$suggestions_pb.RemoveMovieFromWatchListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SearchRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.SearchRequest)) {
    throw new Error('Expected argument of type proto.SearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SearchRequest(buffer_arg) {
  return proto_movie$suggestions_pb.SearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SearchResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.SearchResponse)) {
    throw new Error('Expected argument of type proto.SearchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SearchResponse(buffer_arg) {
  return proto_movie$suggestions_pb.SearchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UpdateFeedBackRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.UpdateFeedBackRequest)) {
    throw new Error('Expected argument of type proto.UpdateFeedBackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UpdateFeedBackRequest(buffer_arg) {
  return proto_movie$suggestions_pb.UpdateFeedBackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UpdateFeedBackResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.UpdateFeedBackResponse)) {
    throw new Error('Expected argument of type proto.UpdateFeedBackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UpdateFeedBackResponse(buffer_arg) {
  return proto_movie$suggestions_pb.UpdateFeedBackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UpdateProfileRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.UpdateProfileRequest)) {
    throw new Error('Expected argument of type proto.UpdateProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UpdateProfileRequest(buffer_arg) {
  return proto_movie$suggestions_pb.UpdateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UpdateProfileResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.UpdateProfileResponse)) {
    throw new Error('Expected argument of type proto.UpdateProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UpdateProfileResponse(buffer_arg) {
  return proto_movie$suggestions_pb.UpdateProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UpdateReviewRequest(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.UpdateReviewRequest)) {
    throw new Error('Expected argument of type proto.UpdateReviewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UpdateReviewRequest(buffer_arg) {
  return proto_movie$suggestions_pb.UpdateReviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UpdateReviewResponse(arg) {
  if (!(arg instanceof proto_movie$suggestions_pb.UpdateReviewResponse)) {
    throw new Error('Expected argument of type proto.UpdateReviewResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UpdateReviewResponse(buffer_arg) {
  return proto_movie$suggestions_pb.UpdateReviewResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MovieSuggestionsServiceService = exports.MovieSuggestionsServiceService = {
  // Admin Endpoints
//
// This rpc takes in Movie as input, adds that movie to database and sends that created movie back in response
addMovieToDatabase: {
    path: '/proto.MovieSuggestionsService/AddMovieToDatabase',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.AddMovieToDatabaseRequest,
    responseType: proto_movie$suggestions_pb.AddMovieToDatabaseResponse,
    requestSerialize: serialize_proto_AddMovieToDatabaseRequest,
    requestDeserialize: deserialize_proto_AddMovieToDatabaseRequest,
    responseSerialize: serialize_proto_AddMovieToDatabaseResponse,
    responseDeserialize: deserialize_proto_AddMovieToDatabaseResponse,
  },
  // This rpc takes in Movie Id as input, remove that movie from database and returns status and error in reponse based on result of that query
deleteMovieFromDatabase: {
    path: '/proto.MovieSuggestionsService/DeleteMovieFromDatabase',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.DeleteMovieFromDatabaseRequest,
    responseType: proto_movie$suggestions_pb.DeleteMovieFromDatabaseResponse,
    requestSerialize: serialize_proto_DeleteMovieFromDatabaseRequest,
    requestDeserialize: deserialize_proto_DeleteMovieFromDatabaseRequest,
    responseSerialize: serialize_proto_DeleteMovieFromDatabaseResponse,
    responseDeserialize: deserialize_proto_DeleteMovieFromDatabaseResponse,
  },
  // This rpc takes in admin_id as input , validates that id and returns all the feedbacks posted by the user in response
getFeedBack: {
    path: '/proto.MovieSuggestionsService/GetFeedBack',
    requestStream: false,
    responseStream: true,
    requestType: proto_movie$suggestions_pb.GetFeedBackRequest,
    responseType: proto_movie$suggestions_pb.GetFeedBackResponse,
    requestSerialize: serialize_proto_GetFeedBackRequest,
    requestDeserialize: deserialize_proto_GetFeedBackRequest,
    responseSerialize: serialize_proto_GetFeedBackResponse,
    responseDeserialize: deserialize_proto_GetFeedBackResponse,
  },
  // User Endpoints
//
// This rpc takes in user credentials such as email and password as input and authenticates that user and returns access_token as output
login: {
    path: '/proto.MovieSuggestionsService/Login',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.LoginRequest,
    responseType: proto_movie$suggestions_pb.LoginResponse,
    requestSerialize: serialize_proto_LoginRequest,
    requestDeserialize: deserialize_proto_LoginRequest,
    responseSerialize: serialize_proto_LoginResponse,
    responseDeserialize: deserialize_proto_LoginResponse,
  },
  // This rpc takes in all user credentials adds them to user database and returns created user credentials
register: {
    path: '/proto.MovieSuggestionsService/Register',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.RegisterRequest,
    responseType: proto_movie$suggestions_pb.RegisterResponse,
    requestSerialize: serialize_proto_RegisterRequest,
    requestDeserialize: deserialize_proto_RegisterRequest,
    responseSerialize: serialize_proto_RegisterResponse,
    responseDeserialize: deserialize_proto_RegisterResponse,
  },
  // This rpc doesn't need any request paramter, it just sends all the movies present in the database in response
getAllMovies: {
    path: '/proto.MovieSuggestionsService/GetAllMovies',
    requestStream: false,
    responseStream: true,
    requestType: proto_movie$suggestions_pb.GetAllMoviesRequest,
    responseType: proto_movie$suggestions_pb.GetAllMoviesResponse,
    requestSerialize: serialize_proto_GetAllMoviesRequest,
    requestDeserialize: deserialize_proto_GetAllMoviesRequest,
    responseSerialize: serialize_proto_GetAllMoviesResponse,
    responseDeserialize: deserialize_proto_GetAllMoviesResponse,
  },
  // This rpc takes in parameter based on name/category, if it is category again it selects that category which is passed in request argument , 
// and if it is name it searches for all movies that start with that name and returns all that movies based on that condition in response
searchForMovies: {
    path: '/proto.MovieSuggestionsService/SearchForMovies',
    requestStream: false,
    responseStream: true,
    requestType: proto_movie$suggestions_pb.SearchRequest,
    responseType: proto_movie$suggestions_pb.SearchResponse,
    requestSerialize: serialize_proto_SearchRequest,
    requestDeserialize: deserialize_proto_SearchRequest,
    responseSerialize: serialize_proto_SearchResponse,
    responseDeserialize: deserialize_proto_SearchResponse,
  },
  // This rpc takes user_id and movie_id as request and returns added to watchlist movie in response
addMovieToWatchList: {
    path: '/proto.MovieSuggestionsService/AddMovieToWatchList',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.AddMovieToWatchListRequest,
    responseType: proto_movie$suggestions_pb.AddMovieToWatchListResponse,
    requestSerialize: serialize_proto_AddMovieToWatchListRequest,
    requestDeserialize: deserialize_proto_AddMovieToWatchListRequest,
    responseSerialize: serialize_proto_AddMovieToWatchListResponse,
    responseDeserialize: deserialize_proto_AddMovieToWatchListResponse,
  },
  // This rpc takes user_id and movie_id as request , deletes that movie from the database and returns status and error in reponse based on result of that query
removeMovieFromWatchList: {
    path: '/proto.MovieSuggestionsService/RemoveMovieFromWatchList',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.RemoveMovieFromWatchListRequest,
    responseType: proto_movie$suggestions_pb.RemoveMovieFromWatchListResponse,
    requestSerialize: serialize_proto_RemoveMovieFromWatchListRequest,
    requestDeserialize: deserialize_proto_RemoveMovieFromWatchListRequest,
    responseSerialize: serialize_proto_RemoveMovieFromWatchListResponse,
    responseDeserialize: deserialize_proto_RemoveMovieFromWatchListResponse,
  },
  // Done, check
// This rpc takes user_id and movie_id as request and returns added to likes movie in response
addMovieToLikes: {
    path: '/proto.MovieSuggestionsService/AddMovieToLikes',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.AddMovieToLikesRequest,
    responseType: proto_movie$suggestions_pb.AddMovieToLikesResponse,
    requestSerialize: serialize_proto_AddMovieToLikesRequest,
    requestDeserialize: deserialize_proto_AddMovieToLikesRequest,
    responseSerialize: serialize_proto_AddMovieToLikesResponse,
    responseDeserialize: deserialize_proto_AddMovieToLikesResponse,
  },
  // This rpc takes user_id and movie_id as request , deletes that movie from the database and returns status and error in reponse based on result of that query
removeMovieFromLikes: {
    path: '/proto.MovieSuggestionsService/RemoveMovieFromLikes',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.RemoveMovieFromLikesRequest,
    responseType: proto_movie$suggestions_pb.RemoveMovieFromLikesResponse,
    requestSerialize: serialize_proto_RemoveMovieFromLikesRequest,
    requestDeserialize: deserialize_proto_RemoveMovieFromLikesRequest,
    responseSerialize: serialize_proto_RemoveMovieFromLikesResponse,
    responseDeserialize: deserialize_proto_RemoveMovieFromLikesResponse,
  },
  // This rpc takes user_id movie_id and description of that review as request and returns created review as response
addReviewForMovie: {
    path: '/proto.MovieSuggestionsService/AddReviewForMovie',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.AddReviewRequest,
    responseType: proto_movie$suggestions_pb.AddReviewResponse,
    requestSerialize: serialize_proto_AddReviewRequest,
    requestDeserialize: deserialize_proto_AddReviewRequest,
    responseSerialize: serialize_proto_AddReviewResponse,
    responseDeserialize: deserialize_proto_AddReviewResponse,
  },
  // This rpc takes user_id movie_id and description of review as request , updates the table based on condition and returns the updated review as response
updateReviewForMovie: {
    path: '/proto.MovieSuggestionsService/UpdateReviewForMovie',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.UpdateReviewRequest,
    responseType: proto_movie$suggestions_pb.UpdateReviewResponse,
    requestSerialize: serialize_proto_UpdateReviewRequest,
    requestDeserialize: deserialize_proto_UpdateReviewRequest,
    responseSerialize: serialize_proto_UpdateReviewResponse,
    responseDeserialize: deserialize_proto_UpdateReviewResponse,
  },
  // This rpc takes user_id movie_id as request , deletes that particular review and returns status and error in reponse based on result of that query
deleteReviewForMovie: {
    path: '/proto.MovieSuggestionsService/DeleteReviewForMovie',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.DeleteReviewRequest,
    responseType: proto_movie$suggestions_pb.DeleteReviewResponse,
    requestSerialize: serialize_proto_DeleteReviewRequest,
    requestDeserialize: deserialize_proto_DeleteReviewRequest,
    responseSerialize: serialize_proto_DeleteReviewResponse,
    responseDeserialize: deserialize_proto_DeleteReviewResponse,
  },
  // This rpc takes user_id name email phone_number as request, updates them for that particular user and returns updated profile values as response
updateProfile: {
    path: '/proto.MovieSuggestionsService/UpdateProfile',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.UpdateProfileRequest,
    responseType: proto_movie$suggestions_pb.UpdateProfileResponse,
    requestSerialize: serialize_proto_UpdateProfileRequest,
    requestDeserialize: deserialize_proto_UpdateProfileRequest,
    responseSerialize: serialize_proto_UpdateProfileResponse,
    responseDeserialize: deserialize_proto_UpdateProfileResponse,
  },
  // This rpc takes user_id and movie_id as request , adds that into viewed table and returns that added particular added row as response 
markAsRead: {
    path: '/proto.MovieSuggestionsService/MarkAsRead',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.MarkAsReadRequest,
    responseType: proto_movie$suggestions_pb.MarkAsReadResponse,
    requestSerialize: serialize_proto_MarkAsReadRequest,
    requestDeserialize: deserialize_proto_MarkAsReadRequest,
    responseSerialize: serialize_proto_MarkAsReadResponse,
    responseDeserialize: deserialize_proto_MarkAsReadResponse,
  },
  // This rpc takes user_id and movie_id as request , removes that from viewed table and return status and error
markAsUnread: {
    path: '/proto.MovieSuggestionsService/MarkAsUnread',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.MarkAsUnreadRequest,
    responseType: proto_movie$suggestions_pb.MarkAsUnreadResponse,
    requestSerialize: serialize_proto_MarkAsUnreadRequest,
    requestDeserialize: deserialize_proto_MarkAsUnreadRequest,
    responseSerialize: serialize_proto_MarkAsUnreadResponse,
    responseDeserialize: deserialize_proto_MarkAsUnreadResponse,
  },
  // This rpc takes in user_id description as request and returns newly created feedback as response
giveFeedBack: {
    path: '/proto.MovieSuggestionsService/GiveFeedBack',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.GiveFeedBackRequest,
    responseType: proto_movie$suggestions_pb.GiveFeedBackResponse,
    requestSerialize: serialize_proto_GiveFeedBackRequest,
    requestDeserialize: deserialize_proto_GiveFeedBackRequest,
    responseSerialize: serialize_proto_GiveFeedBackResponse,
    responseDeserialize: deserialize_proto_GiveFeedBackResponse,
  },
  // This rpc takes in user_id description as request , updates required values in the database and returns the updated feedback as response
updateFeedBack: {
    path: '/proto.MovieSuggestionsService/UpdateFeedBack',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.UpdateFeedBackRequest,
    responseType: proto_movie$suggestions_pb.UpdateFeedBackResponse,
    requestSerialize: serialize_proto_UpdateFeedBackRequest,
    requestDeserialize: deserialize_proto_UpdateFeedBackRequest,
    responseSerialize: serialize_proto_UpdateFeedBackResponse,
    responseDeserialize: deserialize_proto_UpdateFeedBackResponse,
  },
  // This rpc takes in user_id , feedback id as request deletes that particular feedback and returns status and error in reponse based on result of that query
deleteFeedBack: {
    path: '/proto.MovieSuggestionsService/DeleteFeedBack',
    requestStream: false,
    responseStream: false,
    requestType: proto_movie$suggestions_pb.DeleteFeedBackRequest,
    responseType: proto_movie$suggestions_pb.DeleteFeedBackResponse,
    requestSerialize: serialize_proto_DeleteFeedBackRequest,
    requestDeserialize: deserialize_proto_DeleteFeedBackRequest,
    responseSerialize: serialize_proto_DeleteFeedBackResponse,
    responseDeserialize: deserialize_proto_DeleteFeedBackResponse,
  },
};

exports.MovieSuggestionsServiceClient = grpc.makeGenericClientConstructor(MovieSuggestionsServiceService);
