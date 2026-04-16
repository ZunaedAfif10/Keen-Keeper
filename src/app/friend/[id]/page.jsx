'use client'
import { FriendContext } from "@/context/FriendProvider"
import { useParams } from "next/navigation";
import { use, useContext, useEffect, useState } from "react"
import { BsChatLeftText } from "react-icons/bs";
import { FiArchive } from "react-icons/fi";
import { MdOutlineVideocam, MdOutlineWifiCalling3 } from "react-icons/md";
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from "react-icons/ri";


export default function page({ params }) {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
      });
  }, []);
  const { id } = useParams();

  const findId = friends.find(find => find.id == id)
  console.log(findId?.name);
  // console.log(id);
  return (
    <div className="lg:max-w-4/6 mx-auto lg:flex gap-6 lg:pb-20 mt-4">
      <div className="space-y-4">
        <div className="bg-white p-10 text-center rounded-xl shadow-sm">
          <div className='overflow-hidden max-w-[100] h-[100] rounded-full mx-auto mb-3' >
            <img src={findId?.picture} alt="" />
          </div>
          <h3 className='font-bold text-3xl pb-3.5'>{findId?.name}</h3>
          <p className='text-gray-500 pb-2.5'>{findId?.days_since_contact}d ago</p>
          <div className="badge badge-soft bg-red-700 rounded-full text-white">{findId?.status}</div>
          <div className='flex gap-2 justify-center py-2'>
            {
              findId?.tags.map((tag, ind) =>
                <div key={ind} className="badge badge-soft bg-[#CBFADB] rounded-full text-black">{tag}</div>
              )
            }
          </div>
          <p className="py-3  text-gray-500">"{findId?.bio}"</p>
          <p className=" text-gray-500">Preferred: email</p>
        </div>
        <button className="btn btn-ghost bg-white rounded-xs w-full shadow-sm"><RiNotificationSnoozeLine className="text-xl" />Snooze 2 Weeks</button>
        <button className="btn btn-ghost bg-white rounded-xs w-full shadow-sm"><FiArchive className="text-xl" />Archive</button>
        <button className="btn btn-ghost bg-white rounded-xs w-full shadow-sm mb-4 text-red-500"><RiDeleteBin5Line className="text-xl " />Delete</button>
      </div>
      <div className="space-y-6">
        <div className='grid lg:grid-cols-3 gap-6 mx-auto text-center w-full'>
          <div className='p-8 bg-white rounded-xl shadow-sm'>
            <h3 className='font-bold text-3xl pb-3.5'>{findId?.days_since_contact}</h3>
            <p className='text-gray-500 text-[1.2rem]'>Days Since Contact</p>
          </div>
          <div className='p-8 bg-white rounded-xl shadow-sm'>
            <h3 className='font-bold text-3xl pb-3.5'>{findId?.goal}</h3>
            <p className='text-gray-500 text-[1.2rem]'>Goal (Days)</p>
          </div>
          <div className='p-8 bg-white rounded-xl shadow-sm'>
            <h3 className='font-bold text-3xl pb-3.5'>{findId?.next_due_date}</h3>
            <p className='text-gray-500 text-[1.2rem]'>Next Due</p>
          </div>
        </div>
        <div className='p-8 bg-white rounded-xl shadow-sm'>
            <div className="flex justify-between">
            <h3 className=' text-[1.4rem] pb-3.5'>Relationship Goal</h3>
            <button className="btn">Edit</button>
            </div>
            <p className='text-gray-500 text-[1.2rem]'>Connect every <span className="font-bold text-black">30 days</span></p>
        </div>
        <div className='p-8 bg-white rounded-xl shadow-sm'>
            <h3 className=' text-[1.4rem] pb-3.5'>Quick Check-In</h3>
            <div className="grid lg:grid-cols-3 gap-5">
              <button className="flex flex-col items-center justify-center px-24 py-5 gap-1.5 bg-[#F8FAFC] rounded-xl border border-gray-200 hover:bg-gray-100 hover:scale-110 active:scale-100 transition"><MdOutlineWifiCalling3 className="text-4xl" /><span>Call</span></button>
              <button className="flex flex-col items-center justify-center px-24 py-5 gap-1.5 bg-[#F8FAFC] rounded-xl border border-gray-200 hover:bg-gray-100 hover:scale-110 active:scale-100 transition"><BsChatLeftText className="text-4xl" /><span>Text</span></button>
              <button className="flex flex-col items-center justify-center px-24 py-5 gap-1.5 bg-[#F8FAFC] rounded-xl border border-gray-200 hover:bg-gray-100 hover:scale-110 active:scale-100 transition"><MdOutlineVideocam className="text-4xl" /><span>Video</span></button>
            </div>
        </div>
      </div>
    </div>
  )
}

