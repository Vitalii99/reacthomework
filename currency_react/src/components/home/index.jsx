import React from "react";

import './home.css';

const text = [
    {
        id: 1, paragraph: `Вітаємо на сторінці банківської
        інформації.
        Кнопки навігації знаходяться зверху.`,
    }
]

const Home = () => {
    const content = text.map((item) =>
        <span key={item.id}>
            <p>{item.paragraph}</p>
        </span>
    );
    return (
        <div className="container">
            <span className="welcome">{content}</span>
        </div>
    )
}

export default Home;