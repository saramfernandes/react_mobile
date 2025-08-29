import { useState } from 'react';
export const useScore = () => {
 const [score, setScore] = useState(0);
 const addPoint = () => setScore((prev) => prev + 1);
 const removePoint = () => setScore((prev) => (prev > 0 ? prev - 1 : 0));
 return { score, addPoint, removePoint };
};