<template>
    <div class="question-container">
        <div class="question-header">
            <div class="header-right">
                <div class="menu-icon">
                    <div class="icon-circle" @click="backToMenu">
                        <img src="@/assets/School.png" alt="Menu Utama Icon" class="icon-image" />
                    </div>
                    <p class="menu-text">Menu Utama</p>
                </div>
            </div>
            <div class="header-title">
                <button class="question-count">PERTANYAAN KE-{{ questionNumber }}/{{ maxQuestion }}</button>
            </div>

            <!-- Question Text -->
            <h2 class="question-text">{{ question }}</h2>

            <!-- Timer Display -->
            <div class="timer">
                <p>Waktu Tersisa:</p>
                <p class="time">{{ formatTime(timeLeft) }}</p> <!-- Tampilkan waktu dalam format MM:SS -->
            </div>
        </div>
        <div class="progress-bar">
            <div :style="{ width: progressPercentage + '%' }" class="progress"></div> <!-- Menggunakan persentase -->
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
        maxQuestion: Number,
        initialTime: Number, // Waktu awal dalam detik
    },
    data() {
        return {
            selectedAnswer: null,
            progress: 100,
            timeLeft: this.initialTime, // Waktu tersisa dalam detik
            timer: null,
        };
    },
    computed: {
        // Menghitung persentase waktu yang tersisa
        progressPercentage() {
            if (this.initialTime > 0) {
                return (this.timeLeft / this.initialTime) * 100; // Menghitung persentase
            }
            return 0; // Jika initialTime 0, progress adalah 0%
        }
    },
    methods: {
        selectAnswer(index) {
            this.selectedAnswer = index;
        },
        submitAnswer() {
            clearInterval(this.timer); // Hentikan timer saat submit
            this.progress = 100;
            this.$emit('answer-selected', {
                selectedAnswer: this.selectedAnswer,
                timeLeft: this.timeLeft, // Kirim waktu terakhir sebagai integer
            });
        },
        backToMenu() {
            clearInterval(this.timer); // Hentikan timer saat kembali ke menu
            this.progress = 100;
            this.$router.push('/'); 
        },
        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`; // Format MM:SS
        },
        startTimer() {
            this.timer = setInterval(() => {
                if (this.timeLeft > 0) {
                    this.timeLeft--; // Kurangi waktu tersisa
                } else {
                    clearInterval(this.timer);
                    this.submitAnswer(); // Otomatis submit jika waktu habis
                }
            }, 1000);
        }
    },
    mounted() {
        this.startTimer(); // Mulai timer saat komponen dimuat
    },
    beforeDestroy() {
        clearInterval(this.timer); // Hentikan timer saat komponen dihancurkan
    },
};
</script>
