<template>
    <div class="entry-container">
      <div class="rank-circle">
        <span>{{ rank }}</span>
      </div>
      <img :src="photo" alt="Student Photo" class="student-photo" />
      <div class="student-info">
        <p class="student-name">{{ name }}</p>
        <p class="student-school">{{ school }}</p>
      </div>
      <div class="score-container">
        <span class="answer-score">{{ answerScore }}</span>
        <span class="total-score">{{ totalScore }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LeaderboardEntry',
    props: {
      rank: Number,
      photo: String,
      name: String,
      school: String,
      answerScore: Number,
      totalScore: Number,
    },
  };
  </script>
  
  <style scoped>
  .entry-container {
    display: flex;
    align-items: center;
    background-color: #fdd6d6;
    padding: 10px;
    border-radius: 15px;
    margin: 10px 0;
    width: 100%;
  }
  
  .rank-circle {
    background-color: #0097a7;
    color: white;
    font-weight: bold;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    margin-right: 10px;
  }
  
  .student-photo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .student-info {
    flex: 1;
  }
  
  .student-name,
  .student-school {
    margin: 0;
  }
  
  .student-name {
    font-weight: bold;
  }
  
  .score-container {
    display: flex;
    align-items: center;
  }
  
  .answer-score,
  .total-score {
    background-color: #ff007f;
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    font-weight: bold;
    margin-left: 10px;
  }
  </style>
  