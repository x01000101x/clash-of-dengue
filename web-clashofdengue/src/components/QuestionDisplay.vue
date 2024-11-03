<template>
    <div class="question-container">
        <!-- Question Header -->
         <div class="question-header">
            <div class="header-right">
                <div class="menu-icon">
                    <div class="icon-circle">
                        <img src="@/assets/School.png" alt="Menu Utama Icon" class="icon-image" />
                    </div>
                    <p class="menu-text">Menu Utama</p>
                </div>
            </div>
             <div class="header-title">
                <button class="question-count">PERTANYAAN KE-{{ questionNumber }}</button>
             </div>
     
             <!-- Question Text -->
             <h2 class="question-text">{{ question }}</h2>
     
             <!-- Timer Display -->
             <div class="timer">
                 <p>Waktu Tersisa:</p>
                 <p class="time">{{ remainingTime }}</p>
             </div>
         </div>
        <div class="progress-bar">
            <div :style="{ width: progress + '%' }" class="progress"></div>
        </div>

        <!-- Answer Choices -->
        <div class="choices">
        <button
            v-for="(choice, index) in choices"
            :key="index"
            :class="['choice-button', selectedAnswer === index ? 'selected' : '']"
            @click="selectAnswer(index)"
        >
            {{ choice }}
        </button>
        </div>

        <!-- Submit Button -->
        <button class="submit-button" @click="submitAnswer">JAWAB</button>
    </div>
</template>

<script>
import '@/css/QuestionDisplay.css';

export default {
    name: 'QuestionDisplay',
    props: {
        questionNumber: Number,
        question: String,
        choices: Array,
        remainingTime: String,
        progress: Number,
    },
    data() {
        return {
        selectedAnswer: null,
        };
    },
    methods: {
        selectAnswer(index) {
            this.selectedAnswer = index;
        },
        submitAnswer() {
            this.$emit('answer-selected', this.selectedAnswer);
        },
    },
};
</script>
