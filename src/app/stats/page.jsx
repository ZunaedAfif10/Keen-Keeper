"use client";

import { FriendContext } from "@/context/FriendProvider";
import React, { useContext } from "react";
import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from "recharts";

export default function Page() {
  const{allUsers,setAllUsers}=useContext(FriendContext);
  const call = allUsers.filter(user => user.Type === 'Call');
  const text = allUsers.filter(user => user.Type === 'Text');
  const video = allUsers.filter(user => user.Type === 'Video');
console.log(call.length,text.length,video.length);

  const data = [
    { name: "Call", value: call.length, fill: "#244D3F" },
    { name: "Text", value: text.length, fill: "#7E35E1" },
    { name: "Video", value: video.length, fill: "#37A163" },
  ];


  return (
    <div className="lg:pb-10 pt-8">
      <h1 className="font-bold text-4xl pl-4 lg:text-5xl pb-6  lg:max-w-4/6 mx-auto ">Friendship Analytics</h1>
      <div className="lg:max-w-4/6 max-w-[90%] mx-auto bg-white shadow-sm rounded-2xl" style={{ width: "100%", height: 400 }}>
        <h2 className="font-medium text-2xl pt-8 pl-8 text-gray-600">By Interaction Type</h2>
        <ResponsiveContainer>
          <PieChart margin={{ bottom: 100 }}>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={75}
              outerRadius={100}
              cornerRadius={5}
              paddingAngle={5}
              isAnimationActive={true}
              className=""
              />
              <Legend></Legend>
            <Tooltip></Tooltip>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
