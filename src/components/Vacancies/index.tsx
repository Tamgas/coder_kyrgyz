import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { VacancyList } from "./VacancyList";
import loading1 from "../../components/assets/img/loiding.svg";

const Vacancies = ({ count = -1 }) => {
  const nav = useNavigate()
  const {data,loading} = useFetch()
  console.log(data, loading);
 


  if (loading) {
    return <div className='loading'style={{
      display:'flex',alignItems:'center',justifyContent:"center"
  }}><img src={loading1} alt="img" /></div>;
  }

  return (
    <div id="vacancy">
      <div className="container">
        <div className="vacancy">
          <div className="vac">
            <button   onClick={() => nav("/addVacan")} className="btn">Добавить вакансии</button>
          </div>
           {data.slice(0, count).map((job:any, index: number) => {
            return <VacancyList
            key={index}
            companyName={job.organization_name}
            jobTitle={job.position}
            paymentType={job.paymentType}
            priceFrom={job.price_from}
            priceTo={job.price_to}
            type={job.type}
            city={job.city}
            currency={job.currency}
            salary={job.salary}
          />

           })}
         
        
          
         
        
         
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
