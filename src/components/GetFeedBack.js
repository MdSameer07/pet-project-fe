import { useEffect, useState } from "react";
import { List, Typography } from "antd";
import "./GetFeedBack.css";

export const GetFeedBack = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    fetchFeedBacks();
  }, []);
  useEffect(() => {
    console.log(response);
  }, [response]);
  const fetchFeedBacks = async () => {
    const reqBody = {
      adminId: 1,
    };
    const response = await fetch("/admin/get-feeedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    setResponse(data.description);
  };

  return (
    <div className="feedbacks-list">
      {response && (
        <>
          <List
            className="feedback-list-inner"
            size="large"
            header={<div className="heading">FeedBacks: </div>}
            bordered
            dataSource={response}
            renderItem={(item) => (
              <List.Item className="items">{item}</List.Item>
            )}
          />
        </>
      )}
    </div>
  );
};
