import { useEffect } from 'react';

const AudioPlayer = () => {
  useEffect(() => {
    // Створення нового аудіоблоку
    const audio = new Audio('/energetic-rock.mp3');

    // Відтворити аудіо
    audio.play().catch((error) => {
      console.error("Помилка:", error);
    });

    // Очищення при розмонтуванні компонента
    return () => {
      audio.pause(); // Зупинити відтворення
      audio.currentTime = 0; // Скинути час
    };
  }, []); // Порожній масив залежностей, щоб виконати ефект лише один раз
	
  return null;
};

export default AudioPlayer;
