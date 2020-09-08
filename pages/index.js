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
        row.push(0);
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
              if ((rowIdx + colIdx) % 2 === 0) {
                return (
                  <span className={`${styles.checker} ${styles.checkerEven}`}>{col} </span>
                )
              } else {
                return (
                  <span className={`${styles.checker} ${styles.checkerOdd}`}>{col} </span>
                )
              }
            }
            )}
          </div>
        )}
      </div>
    </div>
  )
};
