import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";

import WatchCard from "../Components/WatchCard";
import { GetData } from "../Redux/AppReducer/action";
import { Link,useSearchParams,useLocation} from "react-router-dom";

const Watches = () => {
  const data = useSelector((store)=>store.AppReducer.watches);
  const [searchParam] = useSearchParams();
  const search =searchParam.getAll("category");
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    let getWatchParams;
    if (location.search || data.length === 0) {
      getWatchParams = {
        params: {
          category: searchParam.getAll("category"),
        },
      };
    }
    dispatch(GetData(getWatchParams));
  }, [location.search, dispatch, data.length,searchParam]);


  return (
    <div style={{display:"flex",gap:"20px",width:"80%",margin:"auto"}}>
      <Filter />
      <div style={{display:"grid" ,gridTemplateColumns:"repeat(3,1fr)",gap:"15px",textAlign:"center"}}>
        {
          data.map((items)=>

          <Link
          to={`/watches/${items.id}`}
          style={{ textDecoration: "none", color: "black" }}
          >
          <WatchCard key={items.id} {...items} />
        </Link>
          )
        }
        {/* Map through the watch list here using WatchCard Component */}
      </div>
    </div>
  );
};

export default Watches;