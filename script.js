function ageIs14(birthday) {
  const now = new Date();
  const birthDate = new Date(birthday);

  let age = now.getFullYear() - birthDate.getFullYear();

  const hasBirthdayPassed =
    now.getMonth() > birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() && now.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age >= 14;
}

console.log(ageIs14('2010-07-02'));
