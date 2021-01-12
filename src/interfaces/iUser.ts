/* eslint-disable semi */
export default interface iUser {
  _id?: string;
  _name: string;
  _image: string;
  _invited?: boolean;
  _role?: string;
  _email: string;
  _effort?: string | null;
  _logged?: boolean;
}
