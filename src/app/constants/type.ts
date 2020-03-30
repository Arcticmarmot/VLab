export interface UserData {
  account: string;
  password: string;
}
export interface UserInfo {
  auth: boolean;
  role: 'student'|'teacher';
}
export interface UserPermission {
  role: 'student'|'teacher';
  canCheck: boolean;
  canCorrect: boolean;
}
