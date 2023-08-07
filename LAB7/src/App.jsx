import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [action, setAction] = useState(1);
  const [actionResponse, setActionResponse] = useState([]);
  const [totalPage, setToTalPages] = useState(0);

  useEffect(() => {
    const makeRequest = async () => {
      const res = await fetch(`https://reqres.in/api/user?page=${action}`);
      const data = await res.json();
      setActionResponse(data.data);
      ///Chỉ lấy rendder totalPage  1 lần
      if (totalPage === 0) {
        setToTalPages(data.total_pages);
      }
    };

    if (action) {
      makeRequest();
    }
  }, [action]);
  ///Create array [index:number page]
  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);

  return (
    <div>
      <div style={{ backgroundColor: "gray" }}>
        <h1 style={{ padding: "0px 70px", paddingTop: "25px" }}>
          Page {action}
        </h1>
        <div style={{ textAlign: "center", paddingBottom: "35px" }}>
          {actionResponse.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: item.color,
                width: "fit-content",
                display: "inline-block",
                margin: "10px",
                color: "black ",
                textAlign: "left",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              ID:{item.id}
              <br />
              NAME:{item.name}
              <br />
              YEAR:{item.year}
              <br />
              COLOR:{item.color}
              <br />
              PANTONE_VALUE:{item.pantone_value}
            </div>
          ))}
        </div>
        <h4
          style={{
            position: "fixed",
            bottom: 50,
            left: 50,
          }}
        ></h4>
      </div>
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setAction(pageNumber)}
          style={{ fontSize: "30px", margin: "10px 15px" }}
        >
          Page {pageNumber}
        </button>
      ))}
    </div>
  );
}

export default App;
