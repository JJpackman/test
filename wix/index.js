function solution(S, K) {
  const isSValid = /^([a-z]+)(\u0020{1}[a-z]+)*$/i.test(S);
  const isKValid = Number.isInteger(K) && K > 0 && K <= 500;

  try {
    if (!(isSValid && isKValid)) {
      throw new Error("Wrong arguments");
    }

    const delimeter = " ";
    const words = S.split(delimeter);
    const checkWordLen = word => word.length <= K;

    if (words.every(checkWordLen)) {
      const [fWord, ...otherWords] = words;
      let currMsg = fWord;
      const resultMsgs = otherWords.reduce((msgs, word) => {
        const newMsg = currMsg.concat(delimeter, word);
        if (checkWordLen(newMsg)) {
          currMsg = newMsg;
        } else {
          msgs.push(currMsg);
          currMsg = word;
        }

        return msgs;
      }, []);

      if (currMsg.length > 0) {
        resultMsgs.push(currMsg);
        currMsg = "";
      }

      return resultMsgs.length;
    } else {
      return -1;
    }
  } catch (e) {
    console.error(e);
  }
}

module.exports = solution;
