//  TASK 2

//  A rectangular map consisting of N rows and M columns of square areas is given.
//  Each area is painted with a certain color.

//  Two areas on the map belong to the same country if the following conditions are met:
//   - they have the same color;
//   - it is possible to travel from one area to the other orthogonally (that is, by moving only north, south, west, or east) without moving over areas of a different color.

// The map can be described by a zero-indexed matrix A consisting of N rows and M columns of integers.
// The color of each area is described by the corresponding element of the matrix.
// Two areas have the same color if and only if their corresponding matrix elements have the same value.

// I have solved this task using JavaScript

const nearArea  = (A, B, i, j, N, M) => {
  if(B[i][j] === -1) return;
  B[i][j] = -1;
  if(i+1 < N) {
    if(A[i+1][j] === A[i][j]) {
      nearArea(A, B, i+1, j, N, M);
    }
  }
  if(i-1 >= 0) {
    if(A[i-1][j] === A[i][j]) {
      nearArea(A, B, i-1, j, N, M);
    }
  }
  if(j+1 < M) {
    if(A[i][j+1] === A[i][j]) {
      nearArea(A, B, i, j+1, N, M);
    }
  }
  if(j-1 >= 0) {
    if(A[i][j-1] === A[i][j]) {
      nearArea(A, B, i, j-1, N, M);
    }
  }
}

const numberOfAreas  = (A) => {
  let sum = 0;
  const N = A.length;
  const M = A[0].length;
  if (N === 0 || M === 0) return 0;
  const B = A.map(inner => inner.slice());
  for (let i=0; i<N; i++) {
    for (let j=0; j<M; j++) {
       if (B[i][j] >= 0) {
        nearArea(A, B, i, j, N, M);
        sum += 1;
      }
    }
  }
  return sum;
}

console.log(numberOfAreas([
  [5,4,4],
  [4,3,4],
  [3,2,4],
  [2,2,2],
  [3,3,4],
  [1,4,4],
  [4,1,1]
]));
