import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

const greetings = [
    "Хай твій код завжди компілюється без багів, а життя — без помилок! З днем народження!",
    "Бажаю, щоб усі задачі вирішувалися в O(1), а життєвий цикл був вічним! Зі святом!",
    "Хай у житті буде тільки \"if true\", а \"else\" — ніколи не знадобиться! З днем народження!",
    "Бажаю безмежний запас пам’яті, потоки позитиву і мінімум системних збоїв!",
    "Нехай твоє життя буде як код без багів, а щастя — в режимі автозапуску! З днем народження!",
    "Бажаю, щоб кожна подія в твоєму житті була вдалою, а життєвий код не вимагав дебагу!",
    "Хай твій день буде повен вдалих комітів і успішних пушів! З днем народження!",
    "Нехай на життєвій дорозі не буде циклів та винятків, а тільки успіх і результат! Зі святом!",
    "Хай твоє життя буде як алгоритм з найкращою складністю — простим і ефективним! З днем народження!",
    "Бажаю, щоб кожен день був релізом нових перемог і щастя без дедлайнів! З днем народження!"
];

const App = () => {
    const [greeting, setGreeting] = useState("");

    // Налаштування конфетті
    const duration = 10 * 1000; // тривалість анімації
    const defaults = { startVelocity: 10, spread: 360, ticks: 60, zIndex: 0 };

    // Функція для випадкового значення
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const triggerConfetti = () => {
        const animationEnd = Date.now() + duration; // оновлюємо час завершення анімації
        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            const particleCount = 50 * (timeLeft / duration);
            // Генерація конфетті
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            });
        }, 250);
    };

    // Отримання випадкового привітання
    const getRandomGreeting = () => {
        const randomIndex = Math.floor(Math.random() * greetings.length);
        setGreeting(greetings[randomIndex]);
        triggerConfetti(); // Запускає анімацію конфетті
    };

    // Виклик getRandomGreeting при завантаженні компонента
    useEffect(() => {
        getRandomGreeting(); // Викликаємо функцію при завантаженні
    }, []); // Пустий масив залежностей, щоб викликати один раз

    return (
        <div className="flex flex-col justify-center items-center h-screen text-center p-5 bg-yellow-100">
            <p className="text-2xl font-bold z-10 text-black mb-7">{greeting}</p>
            <div>
                <img src="/Animation.gif" width="112" height="111" alt=""/>
            </div>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={getRandomGreeting}>
                Отримати ще привітання)
            </button>
        </div>
    );
};

export default App;