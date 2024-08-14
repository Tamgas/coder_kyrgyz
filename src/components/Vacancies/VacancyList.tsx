import { Link } from "react-router-dom";

export const VacancyList = ({
  companyName = "",
  jobTitle = "",
  paymentType = "",
  priceFrom = 0,
  priceTo = 0,
  type = "",
  city = "",
  currency = "",
  salary = "",
}: {
  companyName: string;
  jobTitle: string;
  paymentType: string;
  priceFrom: number;
  priceTo: number;
  type: string;
  city: string;
  currency: string;
  salary: string;
}) => {
  return (
    <div className="cards">
      <Link to={"/detailvacancy"}>
        <div className="blocks">
          <div className="company">
            <p>Компания</p>
            <h3> {companyName}</h3>
          </div>
          <div className="dol">
            <p>Должность</p>
            <h3>{jobTitle}</h3>
          </div>
          <div className="oclad">
            <p>оклад</p>
            <h3>{`${priceFrom}- ${priceTo} ${currency} в ${paymentType}`}</h3>
          </div>
          <div className="office">
            <p>тип</p>
            <h3>{`${type}/ ${city}`}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};
