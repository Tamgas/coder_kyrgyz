import React from "react";
import { Link } from "react-router-dom";

const Vacancies = () => {
  return (
    <div id="vacancy">
      <div className="container">
        <div className="vacancy">
          <div className="vac">
            <button className="btn">Добавить вакансии</button>
          </div>
          <div className="cards">
           <Link to={"/detailvacancy"}> 
           <div className="blocks">
              <div className="company">
                <p>Компания</p>
                <h3> Veles Finance</h3>
              </div>
              <div className="dol">
                <p>Должность</p>
                <h3>Системный оператор</h3>
              </div>
              <div className="oclad">
                <p>оклад</p>
                <h3>От 2500 USD в месяц</h3>
              </div>
              <div className="office">
                <p>тип</p>
                <h3>Офис/Бишкек</h3>
              </div>
            </div>
            </Link>
          </div>
          <div className="cards">
          <Link to={"/detailvacancy"}>
            <div className="blocks">
              <div className="company">
                <p>Компания</p>
                <h3>Senior Android Developer</h3>
              </div>
              <div className="dol">
                <p>Должность</p>
                <h3>Системный оператор</h3>
              </div>
              <div className="oclad">
                <p>оклад</p>
                <h3>От 2500 USD в месяц</h3>
              </div>
              <div className="office">
                <p>тип</p>
                <h3>Офис/Бишкек</h3>
              </div>
            </div>
            </Link>
          </div>
          <div className="cards">
          <Link to={"/detailvacancy"}>
            <div className="blocks">
              <div className="company">
                <p>Компания</p>
                <h3>Peaky.Group</h3>
              </div>
              <div className="dol">
                <p>Должность</p>
                <h3>Junior\Middle С# .Net разработчик</h3>
              </div>
              <div className="oclad">
                <p>оклад</p>
                <h3>80000 - 150000 KGS в месяц</h3>
              </div>
              <div className="office">
                <p>тип</p>
                <h3>Офис/Бишкек</h3>
              </div>
            </div>
            </Link>
          </div>
          <div className="cards">
          <Link to={"/detailvacancy"}>
            <div className="blocks">
              <div className="company">
                <p>Компания</p>
                <h3>Peaky.Group</h3>
              </div>
              <div className="dol">
                <p>Должность</p>
                <h3>
                  Переводчик французского и <br /> английского языков / младший{" "}
                  <br />
                  ASO-специалист
                </h3>
              </div>
              <div className="oclad">
                <p>оклад</p>
                <h3>80000 - 150000 KGS в месяц</h3>
              </div>
              <div className="office">
                <p>тип</p>
                <h3>Офис/Бишкек</h3>
              </div>
            </div>
            </Link>
          </div>
          <div className="cards">
          <Link to={"/detailvacancy"}>
            <div className="blocks">
              <div className="company">
                <p>Компания</p>
                <h3>ОсОО МАЕР КОРП</h3>
              </div>
              <div className="dol">
                <p>Должность</p>
                <h3>
                  Помощник менеджера по <br /> рекламными кампаниями
                </h3>
              </div>
              <div className="oclad">
                <p>оклад</p>
                <h3>15000 - 30000 KGS в месяц</h3>
              </div>
              <div className="office">
                <p>тип</p>
                <h3>Офис/Бишкек</h3>
              </div>
            </div>
            </Link>
          </div>
          <div className="cards">
          <Link to={"/detailvacancy"}>
            <div className="blocks">
              <div className="company">
                <p>Компания</p>
                <h3>Kivano</h3>
              </div>
              <div className="dol">
                <p>Должность</p>
                <h3> Оператор - продавец</h3>
              </div>
              <div className="oclad">
                <p>оклад</p>
                <h3>От 55000 KGS в месяц</h3>
              </div>
              <div className="office">
                <p>тип</p>
                <h3>Офис/Бишкек</h3>
              </div>
            </div>
            </Link>
          </div>
          <div className="cards">
          <Link to={"/detailvacancy"}>
            <div className="blocks">
              <div className="company">
                <p>Компания</p>
                <h3>Kivano</h3>
              </div>
              <div className="dol">
                <p>Должность</p>
                <h3> Оператор - продавец</h3>
              </div>
              <div className="oclad">
                <p>оклад</p>
                <h3>От 55000 KGS в месяц</h3>
              </div>
              <div className="office">
                <p>тип</p>
                <h3>Офис/Бишкек</h3>
              </div>
            </div>
            </Link>
          </div>
          <div className="cards">
          <Link to={"/detailvacancy"}>
            <div className="blocks">
              <div className="company">
                <p>Компания</p>
                <h3>LLC "BC Card Kyrgyzstan"</h3>
              </div>
              <div className="dol">
                <p>Должность</p>
                <h3>Системный оператор</h3>
              </div>
              <div className="oclad">
                <p>оклад</p>
                <h3>От 45000 KGS в месяц</h3>
              </div>
              <div className="office">
                <p>тип</p>
                <h3>Офис/Бишкек</h3>
              </div>
            </div>
            </Link>
          </div>{" "}
          <div className="cards">
          <Link to={"/detailvacancy"}>
            <div className="blocks">
              <div className="company">
                <p>Компания</p>
                <h3>LLC "BC Card Kyrgyzstan"</h3>
              </div>
              <div className="dol">
                <p>Должность</p>
                <h3>Инженер POS-терминалов</h3>
              </div>
              <div className="oclad">
                <p>оклад</p>
                <h3>От 45000 KGS в месяц</h3>
              </div>
              <div className="office">
                <p>тип</p>
                <h3>Офис/Бишкек</h3>
              </div>
            </div>
            </Link>
          </div>
          <div className="cards">
          <Link to={"/detailvacancy"}>
            <div className="blocks">
              <div className="company">
                <p>Компания</p>
                <h3>Scramble</h3>
              </div>
              <div className="dol">
                <p>Должность</p>
                <h3>Middle Project Manager</h3>
              </div>
              <div className="oclad">
                <p>оклад</p>
                <h3>От 1500 EUR в месяц</h3>
              </div>
              <div className="office">
                <p>тип</p>
                <h3>Офис/Бишкек</h3>
              </div>
            </div>
            </Link>
          </div>
          <div className="cards">
          <Link to={"/detailvacancy"}>
            <div className="blocks">
              <div className="company">
                <p>Компания</p>
                <h3>CRM Technologies</h3>
              </div>
              <div className="dol">
                <p>Должность</p>
                <h3>PHP разработчик</h3>
              </div>
              <div className="oclad">
                <p>оклад</p>
                <h3>35000 - 50000 KGS в месяц</h3>
              </div>
              <div className="office">
                <p>тип</p>
                <h3>Офис/Бишкек</h3>
              </div>
            </div>
            </Link>
          </div>
          <div className="cards">
          <Link to={"/detailvacancy"}>
            <div className="blocks">
              <div className="company">
                <p>Компания</p>
                <h3>dMetrics</h3>
              </div>
              <div className="dol">
                <p>Должность</p>
                <h3>DevOps Engeneer</h3>
              </div>
              <div className="oclad">
                <p>оклад</p>
                <h3>2000 - 4000 USD в месяц</h3>
              </div>
              <div className="office">
                <p>тип</p>
                <h3>Офис/Бишкек</h3>
              </div>
            </div>
            </Link>
          </div>
          <div className="cards">
          <Link to={"/detailvacancy"}>
            <div className="blocks">
              <div className="company">
                <p>Компания</p>
                <h3>TreeTech</h3>
              </div>
              <div className="dol">
                <p>Должность</p>
                <h3>Java разработчик Middle+</h3>
              </div>
              <div className="oclad">
                <p>оклад</p>
                <h3>100000 - 180000 RUB в месяц</h3>
              </div>
              <div className="office">
                <p>тип</p>
                <h3>Офис/Бишкек</h3>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
