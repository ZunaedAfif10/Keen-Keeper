'use client'
import { FriendContext } from "@/context/FriendProvider"
import { useParams } from "next/navigation";
import { use, useContext, useEffect, useState } from "react"


export default function page({params}) {
  const [friends, setFriends] = useState([]);
      useEffect(() => {
          fetch("/friends.json")
              .then((res) => res.json())
              .then((data) => {
                  setFriends(data);
              });
      }, []);
      const {id} = useParams();

  const findId = friends.find(find=>find.id == id)
  // console.log(findId);
  // console.log(id);
  return (
    <div>page</div>
  )
}

