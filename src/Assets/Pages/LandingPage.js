import React, { useContext, useState } from "react";
import Header from "../Components/Header/Header";
import Card from "react-bootstrap/Card";
import { DataContext } from "../Context/ContextData";
export default function LandingPage() {
  const { Data, setData } = useContext(DataContext);
  const data = () => {
    console.log(Data);
  };
  return (
    <>
      <Header />
      {Data.map((ApiDatas) => {
        return (
          <Card style={{ width: "25rem" }} className="m-5">
            <Card.Body className="col">
              <Card.Title>Country:{ApiDatas.country}</Card.Title>
              <Card.Text>
                <h1>Cases:</h1>
                {ApiDatas.cases}
              </Card.Text>
              <Card.Text>
                <h1>Deaths:</h1>
                {ApiDatas.deaths}
              </Card.Text>
              <Card.Text>
                <h1>Recovered:</h1>
                {ApiDatas.recovered}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
