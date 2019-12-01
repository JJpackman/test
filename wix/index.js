function solution(S, K) {
  const delimeter = " ";
  const words = S.split(delimeter);
  const msgs = [];
  let tempMsg = "";
  let msgCount = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > K) {
      return -1;
    } else {
      if (tempMsg.length + words[i].length > K) {
        msgs.push(tempMsg);
        tempMsg = words[i];
        msgCount++;
      } else {
        tempMsg += tempMsg.length > 0 ? delimeter + words[i] : words[i];
      }
    }
  }

  if (tempMsg.length > 0) {
    msgs.push(tempMsg);
    msgCount++;
  }

  return msgCount;
}

module.exports = solution;
