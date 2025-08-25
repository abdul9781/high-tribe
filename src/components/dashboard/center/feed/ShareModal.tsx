"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Share2, X, MessageCircle, Copy, Users, UserPlus, Lock } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: any; 
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, post }) => {
  const [shareCount, setShareCount] = useState(0);
  const [selectedPrivacy, setSelectedPrivacy] = useState('Only me');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;
  const users = [
    { id: 1, name: 'Ahmed Ali', avatar: 'https://randomuser.me/api/portraits/women/68.jpg ', isOnline: true },
    { id: 2, name: 'Sara Khan', avatar: 'https://randomuser.me/api/portraits/men/68.jpg', isOnline: false },
    { id: 3, name: 'Hassan Sheikh', avatar: 'https://randomuser.me/api/portraits/women/69.jpg', isOnline: true },
    { id: 4, name: 'Fatima Malik', avatar: 'https://randomuser.me/api/portraits/men/69.jpg', isOnline: true },
    { id: 5, name: 'Zara Ahmed', avatar: 'https://randomuser.me/api/portraits/men/70.jpg', isOnline: false },
    { id: 6, name: 'Omar Farooq', avatar: 'https://randomuser.me/api/portraits/women/71.jpg', isOnline: true },
    { id: 7, name: 'Ayesha Tariq', avatar: 'https://randomuser.me/api/portraits/men/71.jpg', isOnline: false },
    { id: 8, name: 'Bilal Khan', avatar: 'https://randomuser.me/api/portraits/women/72.jpg', isOnline: true },
    { id: 9, name: 'Bilal Khan', avatar: 'https://randomuser.me/api/portraits/women/72.jpg', isOnline: true }, { id: 1, name: 'Ahmed Ali', avatar: 'https://randomuser.me/api/portraits/women/68.jpg ', isOnline: true },
    { id: 2, name: 'Sara Khan', avatar: 'https://randomuser.me/api/portraits/men/68.jpg', isOnline: false },
    { id: 3, name: 'Hassan Sheikh', avatar: 'https://randomuser.me/api/portraits/women/69.jpg', isOnline: true },
    { id: 4, name: 'Fatima Malik', avatar: 'https://randomuser.me/api/portraits/men/69.jpg', isOnline: true },
    { id: 5, name: 'Zara Ahmed', avatar: 'https://randomuser.me/api/portraits/men/70.jpg', isOnline: false },
    { id: 6, name: 'Omar Farooq', avatar: 'https://randomuser.me/api/portraits/women/71.jpg', isOnline: true },
    { id: 7, name: 'Ayesha Tariq', avatar: 'https://randomuser.me/api/portraits/men/71.jpg', isOnline: false },
    { id: 8, name: 'Bilal Khan', avatar: 'https://randomuser.me/api/portraits/women/72.jpg', isOnline: true },
    { id: 9, name: 'Bilal Khan', avatar: 'https://randomuser.me/api/portraits/women/72.jpg', isOnline: true }
  ];

  const handleShare = () => {
    setShareCount(shareCount + 1);
    // Yahan aap actual share logic add kar sakte hain
    console.log('Sharing with privacy:', selectedPrivacy);
    console.log('Message:', message);
    onClose();
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied!');
  };

  return (
         <div className="fixed inset-0 flex items-end justify-center z-50 p-4 pb-8 ">
      <div className="bg-[#FFFFFF] rounded-2xl w-full max-w-3xl max-h-[95vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Share</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Profile Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 ">

              <div className="w-13 h-13 rounded-full flex items-center justify-center overflow-hidden border-2 border-[#FFFFFF] ">
                            

                               
                 <img 
                   src="  https://randomuser.me/api/portraits/men/68.jpg " 
                   alt="Profile"
                   className="w-full h-full object-cover "
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     target.nextElementSibling?.classList.remove('hidden');
                   }}
                 />
                
                 <div className="w-12 h-12  rounded-full flex items-center justify-center text-white font-bold text-lg ">
                   {post?.user?.name?.charAt(0) || 'S'}
                 </div>
               </div>
              <div>
                <h3 className="font-semibold text-lg">{post?.user?.name || 'Siasat.pk'}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm w-[58px] h-[25px] bg-[#EDEDED] rounded-[26px] flex items-center justify-center text-[#000000] font-gilroy font-semibold">Feed</span>
                 
                  <div className="flex items-center gap-1">
                
                   <div className="w-[95px] h-[35px] bg-[#EDEDED] rounded-[26px] flex items-center justify-center px-2">
                           <Lock size={12} className="text-[#000000] flex-shrink-0" />
                           <select 
                             value={selectedPrivacy} 
                             onChange={(e) => setSelectedPrivacy(e.target.value)}
                             className="text-[12px] font-gilroy font-semibold text-[#000000] bg-transparent border-none outline-none cursor-pointer flex-1"
                           >
                            <option>Only me</option>
                            <option>Friends</option>
                            <option>Public</option>
                          </select>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={handleShare}
              className="bg-gradient-to-r from-[#9243AC] via-[#B6459F] to-[#E74294]  text-white px-6 py-2 rounded-full transition-all duration-200 font-medium cursor-pointer"
            >
              Share now
            </button>
          </div>

                     {/* Message Input */}
           <div className="-mx-6" >
             <textarea
               placeholder="Say something about this (Optional)"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               className="w-full p-3 rounded-none resize-none h-25 text-sm focus:outline-none focus:border-transparent bg-[#F7F7F7] border-none"
             />
           </div>

          {/* Share to Users */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Share to</h4>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {users.map((user) => (
                <div key={user.id} className="text-center flex-shrink-0">
                  <div className="relative mb-2">
                    <div className="w-16 h-16 rounded-full mx-auto overflow-hidden ">
                      <img 
                        src={user.avatar} 
                        alt={user.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://randomuser.me/api/?name=${user.name}portraits/women/68.jpg `; }}
                      />
                    </div>
                    {user.isOnline && (
                      <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 truncate w-16">{user.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Send in Messenger */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Send in Messenger</h4>
                         <div className="grid grid-cols-8 ">
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <span className="text-xs text-gray-600">Messenger</span>
              </button>
              
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <span className="text-xs text-gray-600">WhatsApp</span>
              </button>
              
              <button 
                onClick={copyLink}
                className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                  <Copy size={20} className="text-white" />
                </div>
                <span className="text-xs text-gray-600">Copy link</span>
              </button>
              
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                  <Users size={20} className="text-white" />
                </div>
                <span className="text-xs text-gray-600">Group</span>
              </button>
              
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <UserPlus size={20} className="text-white" />
                </div>
                <span className="text-xs text-gray-600">Friend's profile</span>
              </button>
              
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  X
                </div>
                <span className="text-xs text-gray-600">X</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;