export interface UserData {
  account: string;
  password: string;
}
export interface UserInfo {
  auth: boolean;
  role: 'student'|'teacher';
}
