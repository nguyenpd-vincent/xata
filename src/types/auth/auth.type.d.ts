// import { Image } from "../image/image";

export namespace Auth {
  export interface LoginResponse {
    accessToken?: string;
    refreshToken?: string;
  }

  export interface RefreshTokenResponse {
    accessToken?: string;
  }

  export interface LoginPayload {
    username?: string;
    password?: string;
  }

  export interface UserDetails {
    _id?: string;
    name?: string;
    username?: string;
    email?: string;
    isActive?: boolean;
    isBan?: boolean;
    createdAt?: string;
    updatedAt?: string;
  }

  export interface InitialState {
    token?: Auth.LoginResponse;
    refreshToken?: Auth.RefreshTokenResponse;
    userInfo?: Auth.UserDetails;
    // userImageInConversation?: Image.ImageResponse[];
  }
}
