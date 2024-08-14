import CommunityList from  './CommList';
import useFetch from "../../hooks/useFetch";

import loading1 from "../../components/assets/img/loiding.svg";
import { CONSTANTS } from '../../constants/intex';

const Community = () => {
  const { data, loading } = useFetch({ url: `${CONSTANTS}/community` }); 

  if (loading) {
    return <div className='loading'style={{
      display:'flex',alignItems:'center',justifyContent:"center"
  }}><img src={loading1} alt="img" /></div>;
  }

  return (
    <div id="community">
      <div className="container">
        <div className="community">
          <CommunityList data={data}/>
        </div>
      </div>
    </div>
  );
};

export default Community;


