import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Skull, ShieldAlert, Zap, User, Database } from 'lucide-react';

// --- ДАННЫЕ ДЛЯ ГЕНЕРАЦИИ ---
const DATA = {
  professions: ["Врач-хирург", "Повар", "Инженер-механик", "Военный", "Учитель истории", "Агроном", "Программист"],
  health: ["Идеальное", "Астма", "Легкое ранение", "Слабое зрение", "Бессонница", "Отличное"],
  hobbies: ["Игра на гитаре", "Пчеловодство", "Бокс", "Рисование", "Кулинария", "Паркур"],
  baggage: ["Набор инструментов", "Запас консервов", "Пистолет (3 патрона)", "Аптечка", "Семена овощей"],
  facts: ["Умеет водить танк", "Знает 5 языков", "Боится темноты", "Работал в ФСБ", "Мастер по замкам"],
  disasters: [
    "Ядерная зима: Температура упала до -50°C. Ресурсов мало.",
    "Вирус Z: На поверхности бродят зараженные. Бункер должен быть заблокирован.",
    "Потоп: Уровень океана поднялся на 500 метров. Островная жизнь."
  ]
};

export default function App() {
  const [character, setCharacter] = useState(null); // Стейт персонажа
  const [disaster, setDisaster] = useState(DATA.disasters[0]); // Стейт катастрофы

  // --- ФУНКЦИЯ ГЕНЕРАЦИИ ---
  // Выбирает случайный элемент из каждого массива данных
  const generate = () => {
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    setCharacter({
      prof: getRandom(DATA.professions),
      health: getRandom(DATA.health),
      hobby: getRandom(DATA.hobbies),
      bag: getRandom(DATA.baggage),
      fact: getRandom(DATA.facts)
    });
    setDisaster(getRandom(DATA.disasters));
  };

  return (
    <div className="screen">
      <div className="scanline"></div>
      
      <div className="terminal-border">
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ letterSpacing: '5px' }}> <Skull size={32} /> BUNKER v.2.6 <Skull size={32} /></h1>
          <p>[ СИСТЕМА ЖИЗНЕОБЕСПЕЧЕНИЯ АКТИВИРОВАНА ]</p>
        </header>

        {/* СЕКЦИЯ КАТАСТРОФЫ */}
        <div style={{ background: 'rgba(255, 51, 51, 0.1)', padding: '15px', border: '1px solid #ff3333', color: '#ff3333', marginBottom: '20px' }}>
          <h3 style={{ margin: 0 }}> <ShieldAlert size={18} /> ТЕКУЩАЯ УГРОЗА:</h3>
          <p>{disaster}</p>
        </div>

        {/* КАРТОЧКА ПЕРСОНАЖА */}
        {character ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            key={JSON.stringify(character)}
          >
            <div className="trait-box">
              <strong> <User size={16} /> ПРОФЕССИЯ:</strong> {character.prof}
            </div>
            <div className="trait-box">
              <strong> <Zap size={16} /> ЗДОРОВЬЕ:</strong> {character.health}
            </div>
            <div className="trait-box">
              <strong> <Database size={16} /> ХОББИ:</strong> {character.hobby}
            </div>
            <div className="trait-box">
              <strong> <Database size={16} /> БАГАЖ:</strong> {character.bag}
            </div>
            <div className="trait-box">
              <strong> <Database size={16} /> ФАКТ:</strong> {character.fact}
            </div>
          </motion.div>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>ДАННЫЕ ОТСУТСТВУЮТ. НАЖМИТЕ ДЛЯ ГЕНЕРАЦИИ ЛИЧНОСТИ.</p>
          </div>
        )}

        {/* КНОПКА ГЕНЕРАЦИИ */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button onClick={generate}>ГЕНЕРИРОВАТЬ ПЕРСОНАЖА</button>
        </div>

        <footer style={{ marginTop: '40px', fontSize: '0.7rem', opacity: 0.5, textAlign: 'center' }}>
          TERMINAL_ID: 88-ALPHA | YEAR: 2026
        </footer>
      </div>
    </div>
  );
}
