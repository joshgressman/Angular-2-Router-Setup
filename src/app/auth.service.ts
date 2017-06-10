//this is here for demo, this would be handled through authenication
export class AuthService {
  loggedIn = false;

  isAuthenicated(){
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }


  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }

}
