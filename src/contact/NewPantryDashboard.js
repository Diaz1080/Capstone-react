import { useEffect, useState } from "react";
import APIUrl from "../APIUrl";

const NewPantryDashboard = () => {
  const [New, setNew] = useState([]);
  const updateNewTable = async () => {
    const NewResponse = await fetch(`${APIUrl}/New`);
    const NewData = await NewResponse.json();
    setNew(NewData.Newupdates);
  };

  useEffect(() => {
    updateNewTable();
  }, []);

  const approve = async (id) => {
    const NewResponse = await fetch(`${APIUrl}/approveNew/${id}`);
    const data = await NewResponse.json();
    if (data.error) {
      alert(data.error);
    } else {
      alert("Pantry Created");
      updateNewTable();
    }
  };

  return (
    <div>
      <h1>New Pantry</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Company Name</th>
            <th scope="col">Company Name Continued</th>
            <th scope="col">Adress</th>
            <th scope="col">City State Zip</th>
            <th scope="col">Phone</th>
            <th scope="col">Day1</th>
            <th scope="col">Time1</th>
            <th scope="col">Day2</th>
            <th scope="col">Time2</th>
            <th scope="col">Day3</th>
            <th scope="col">Time3</th>
            <th scope="col">Day4</th>
            <th scope="col">Time4</th>
            <th scope="col">Day5</th>
            <th scope="col">Time5</th>
            <th scope="col">Facebook</th>
            <th scope="col">Instagram</th>
            <th scope="col">Twitter</th>
            <th scope="col">LinkedIn</th>
            <th scope="col">Text1</th>
            <th scope="col">Text2</th>
            <th scope="col">Text3</th>
            <th scope="col">Text4</th>
            <th scope="col">Text5</th>
            <th scope="col">Text6</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {New.map((New) => {
            return (
              <tr key={New.id}>
                <th scope="row">{New.companyName}</th>
                <th scope="row">{New.companyNameContinued}</th>
                <th scope="row">{New.Adress}</th>
                <th scope="row">{New.cityStateZip}</th>
                <th scope="row">{New.phone}</th>
                <td>{New.day1}</td>
                <td>{New.time1}</td>
                <td>{New.day2}</td>
                <td>{New.time2}</td>
                <td>{New.day3}</td>
                <td>{New.time3}</td>
                <td>{New.day4}</td>
                <td>{New.time4}</td>
                <td>{New.day5}</td>
                <td>{New.time5}</td>
                <td>{New.facebook}</td>
                <td>{New.intagram}</td>
                <td>{New.twitter}</td>
                <td>{New.linkeIn}</td>
                <td>{New.text1}</td>
                <td>{New.text2}</td>
                <td>{New.text3}</td>
                <td>{New.text4}</td>
                <td>{New.text5}</td>
                <td>{New.text6}</td>
                <td>
                  <span
                    style={{ color: "blue", textDecoration: "underline" }}
                    onClick={() => {
                      approve(New.id);
                    }}
                  >
                    Approve
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NewPantryDashboard;
