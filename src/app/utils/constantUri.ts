
const baseUrl = 'https://api.themoviedb.org/3'
export class ConstantUri {
  public static readonly apikey = 'ef3c79b865dbaaf9778dfc0a5ba82fde';
  public static readonly validateWithLogin = baseUrl+  '/authentication/token/validate_with_login';
  public static readonly tokenNew = baseUrl + '/authentication/token/new';
}
