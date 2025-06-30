function ageIs14(birthday) {
  const nowDate = new Date();
  const userBirthday = new Date(birthday);
  if (nowDate.getFullYear() - userBirthday.getFullYear() > 14) {
    return true;
  } else {
    return false;
  }
}

console.log(ageIs14('2006-01-01'));
