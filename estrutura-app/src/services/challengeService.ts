import { CHALLENGES } from "../constants/challenges";
import { getRandomInt } from "../utils/getRandomInt";

export const getRandomChallenge = () => {
  const index = getRandomInt(CHALLENGES.length);
  return { id: index, text: CHALLENGES[index] };
};
