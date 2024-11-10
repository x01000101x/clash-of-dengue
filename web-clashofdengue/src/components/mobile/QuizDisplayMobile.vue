<template>
    <div>
        <div>
            <div class="judul">
                <h2>PERTANYAAN KE-{{ questionNumber }}/{{ maxQuestion }}</h2>
            </div>
            <h2 class="question-text-start">{{ question }}</h2>
            <div class="timer">
                <p>Waktu Tersisa:</p>
                <p class="time">{{ formatTime(timeLeft) }}</p> <!-- Tampilkan waktu dalam format MM:SS -->
            </div>
        </div>
        <div class="jawaban">
            <div class="choices-start">
                <button
                    v-for="(choice, index) in choices"
                    :key="index"
                    :class="['choice-button-start', selectedAnswer === index ? 'selected' : '']"
                    @click="selectAnswer(index)"
                >
                    {{ choice }}
                </button>
            </div>
        </div>
        <div class="submit">
            <button class="submit-button-quiz" @click="submitAnswer" :disabled="selectedAnswer === null">JAWAB</button>
        </div>
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
    watch: {
        initialTime(newValue) {
        this.timeLeft = newValue; // Reset timeLeft setiap kali initialTime berubah
        this.resetTimer(); // Reset dan mulai ulang timer
        },
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
            this.selectedAnswer= null
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
        },
        resetTimer() {
            clearInterval(this.timer); // Hentikan timer yang sedang berjalan
            this.startTimer(); // Mulai timer yang baru
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

<style scoped>
.judul {
    color: var(--primary-color);
    font-size: 15px;
    font-weight: 400;
}

.question-text-start {
    color: var(--primary-color);
    font-size: 20px;
    font-weight: 500;
}

.timer {
  text-align: center;
  margin: 10px 0;
  color: var(--primary-color);
  font-size: 15px;
  font-weight: 600;
}

.time {
  font-size: 20px;
  font-weight: bold;
  color: var(--secondary-color);

}

.jawaban {
    display: flex;
    justify-content: center;
}

.choices-start {
  display: flex;
  flex-direction: column;
  width: 50vw;
  gap: 10px;
}

.choice-button-start {
  padding: 10px;
  border-radius: 20px;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: 15px;
}

.choice-button-start.selected {
  background-color: var(--primary-color);
}

.submit-button-quiz {
  background-color: var(--primary-color);
  color: white;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 5%;
}
</style>