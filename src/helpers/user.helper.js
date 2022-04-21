export default class User {
  static user = JSON.parse(localStorage.getItem("user"));

  static Set(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  static Get() {
    return JSON.parse(localStorage.getItem("user"));
  }

  static Clear() {
    localStorage.removeItem("user");
  }

  static isRole(roles) {
    const user = this.Get();
    if (!user) return false;
    return roles.includes(user.role);
  }

  static loggedIn() {
    return !!localStorage.getItem("user");
  }
}
