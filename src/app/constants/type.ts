export interface UserData {
  account: string;
  password: string;
}
export interface UserAuthInfo {
  auth: boolean;
  role: 'student'|'teacher';
}
export interface ReportState {
  name: string;
  isSubmit: boolean;
  id: string;
}
export interface UserInfo {
  role: 'student'|'teacher';
  reports: Array<ReportState>;
}
