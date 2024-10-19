import React from 'react';

const AudioPlayer = () => {
    return (
        <audio autoPlay loop>
            <source src="/energetic-rock.mp3" type="audio/mpeg" />
            Ваш браузер не поддерживает аудио.
        </audio>
    );
};

export default AudioPlayer;