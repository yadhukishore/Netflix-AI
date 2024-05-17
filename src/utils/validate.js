export const checkValidData = (email, password, name = "") => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z]{3,}(\s[a-zA-Z]+)*$/.test(name.trim());
  
    if (!isEmailValid) return "Email is Not Valid";
    if (!isPasswordValid) return "Password is Not Valid";
    if (name && name.trim() === "") return "Please add your name correctly";
    if (name && !isNameValid) return "Please add your name correctly";
  
    return null;
  };