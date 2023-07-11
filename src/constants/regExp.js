const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regExpNickname = /^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣\d`~_]{2,8}$/;
const regExpPassword =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d`-~!@#$%^&*()/]{8,16}$/;
const regExpSpace = /\s/;
const regLineBreak = /\r\n|\r|\n/g; // 개행 문자 패턴 정규식

export {
  regExpEmail,
  regExpPassword,
  regExpNickname,
  regExpSpace,
  regLineBreak,
};
