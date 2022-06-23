import { User } from 'src/app/models/User';

export interface AuthState {
  user: User | null;
  accessToken: string | null;
}

export const initialState: AuthState = {
  user: null,
  accessToken: null,
};
