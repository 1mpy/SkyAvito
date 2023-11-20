export function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validateReg(user) {
  var re = /^[A-ZА-Я]{1}[a-zа-я-]{1,}/mg;
  return re.test(user);
}

export function validatePhone(phone) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(phone);
  }

  export function validatePrice(price) {
    var re = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;
    return re.test(price);
  }


  