import { useEffect, useState } from "react";
import APIUrl from "../APIUrl";

const AdminDashboard = () => {
  const [updates, setUpdates] = useState([]);
  const updateUpdatesTable = async () => {
    const updateResponse = await fetch(`${APIUrl}/PantryUpdate`);
    const updateData = await updateResponse.json();
    setUpdates(updateData.pantryupdates);
  };

  useEffect(() => {
    updateUpdatesTable();
  }, []);

  const approve = async (id) => {
    const updateResponse = await fetch(`${APIUrl}/approveUpdate/${id}`);
    const data = await updateResponse.json();
    if (data.error) {
      alert(data.error);
    } else {
      alert("Pantry Updated");
      updateUpdatesTable();
    }
  };

  return (
    <div>
      <h1>Admin</h1>
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
          {updates.map((update) => {
            return (
              <tr key={update.id}>
                <th scope="row">{update.companyName}</th>
                <th scope="row">{update.companyNameContinued}</th>
                <th scope="row">{update.Adress}</th>
                <th scope="row">{update.cityStateZip}</th>
                <th scope="row">{update.phone}</th>
                <td>{update.day1}</td>
                <td>{update.time1}</td>
                <td>{update.day2}</td>
                <td>{update.time2}</td>
                <td>{update.day3}</td>
                <td>{update.time3}</td>
                <td>{update.day4}</td>
                <td>{update.time4}</td>
                <td>{update.day5}</td>
                <td>{update.time5}</td>
                <td>{update.facebook}</td>
                <td>{update.intagram}</td>
                <td>{update.twitter}</td>
                <td>{update.linkeIn}</td>
                <td>{update.text1}</td>
                <td>{update.text2}</td>
                <td>{update.text3}</td>
                <td>{update.text4}</td>
                <td>{update.text5}</td>
                <td>{update.text6}</td>
                <td>
                  <span
                    style={{ color: "blue", textDecoration: "underline" }}
                    onClick={() => {
                      approve(update.id);
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

export default AdminDashboard;
