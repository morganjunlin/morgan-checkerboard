import React, { useState, useEffect } from 'react';
import styles from '../components/checkerboard.module.css';


export default function Checkerboard() {
  const [board, setBoard] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  }

  const initBoard = (num) => {
    let newBoard = [];
    for (var i = 0; i < num; i++) {
      let row = [];

      for (var j = 0; j < num; j++) {
        row.push(undefined);
      }
      newBoard.push(row);
    }
    setBoard(newBoard);
  };

  useEffect(() => {
    initBoard(value);
  }, [value])

  return (
    <div className={styles.main}>
      Please enter a number value: <input type='number' min='0' max='9' onChange={handleChange} value={value} />
      <div className={styles.board}>
        {board.map((row, rowIdx) => 
          <div>
            {row.map((col, colIdx) => {
              // if ((rowIdx + colIdx) % 2 === 0) {
              //   return (
              //     <div className={`${styles.checker} ${styles.checkerEven}`}>
              //       {col} 
              //     </div>
              //   )
              // } else {
              //   return (
              //     <div className={`${styles.checker} ${styles.checkerOdd}`}>
              //       {col} 
              //     </div>
              //   )
              // }

              /**
                TASK 2: attempts to apply color for top two and color for bottom two
              
               */
              if (rowIdx < 2) {
                <div className={`
                  ${styles.checker}
                  ${styles.topTwo} 
                  ${(rowIdx + colIdx) % 2 === 0 ? styles.checkerEven : styles.checkerOdd}`}>
                  O
                </div>
              } else if (rowIdx >= 2 && rowIdx <= board.length - 2) {
                <div className={`
                  ${styles.checker} 
                  ${(rowIdx + colIdx) % 2 === 0 ? styles.checkerEven : styles.checkerOdd}`}>
                  {col}
                </div>
              } else {
                <div className={`
                  ${styles.checker} 
                  ${styles.bottomTwo} 
                  ${(rowIdx + colIdx) % 2 === 0 ? styles.checkerEven : styles.checkerOdd}`}>
                  O
                </div>
              }
            }
            )}
          </div>
        )}
      </div>
    </div>
  )
};
