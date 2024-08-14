import React from 'react';

const AddVacan = () => {
  

 


    return (
        <div id='addVacan'>
            <div className="container">
                <div className="addVacan">
                    <h1>Добавить вакансию</h1>
                <div className="addVacan--input">
                <div className="addVacan--input__inpt">
                    <input   type="text" placeholder="Название вакансии" />
                        <input  type="text" placeholder="Описание вакансии" />
                        <input type="text" placeholder="Зарплата" />
                        <input type="text" placeholder="Компания" />
                      
                     
                    </div>

                    <div className="addVacan--input__inpt">
                       <input type="text" placeholder="Тип вакансии" />
                        <input type="text" placeholder="Адрес" />
                        <input type="text" placeholder="Телефон" />
                        <input type="text" placeholder="Email" />
                       </div>
                </div>

                       <button type="submit">Добавить</button>
                 
                       
                
                  

       


                </div>
            </div>
            
        </div>
    );
};

export default AddVacan;
