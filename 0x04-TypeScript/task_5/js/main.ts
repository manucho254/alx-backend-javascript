/**
 * Create a directory task_5 and copy these configuration files into the root of task_5: package.json, tsconfig.json, webpack.config.js
 *  Create two interfaces MajorCredits and MinorCredits in task_5/js/main.ts:
 *        Each interface defines a number named credits
 *        Add a brand property to each interface in order to uniquely identify each of them
 *
 *  Create two functions named sumMajorCredits and sumMinorCredits in task_5/js/main.ts:
 *
 *      Each function takes two arguments subject1 and subject2
 *      sumMajorCredits returns MajorCredits value and sumMinorCredits returns MinorCredits value
 *      Each function sums the credits of the two subjects
 */
type MajorCreditsBrand = {
  _MajorCreditsBrand: "MajorCreditsBrand";
};

type MinorCreditsBrand = {
  _MinorCreditsBrand: "MinorCreditsBrand";
};

interface MajorCredits extends MajorCreditsBrand {
  credits: number;
}

interface MinorCredits extends MinorCreditsBrand {
  credits: number;
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
  return {
    credits: subject1 + subject2,
    _MajorCreditsBrand: "MajorCreditsBrand",
  };
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
  return {
    credits: subject1 + subject2,
    _MinorCreditsBrand: "MinorCreditsBrand",
  };
}
