import React from 'react';

interface MessageBoxProps {
  message: string;
  onClose: () => void;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, onClose }) => {
  return (
    <div className="message-box">
      <div className="message-container">
        <button className="close-button" onClick={onClose}>X</button>
        <p>{message}</p>
      </div>
      <style jsx>{`
        .message-box {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(116.43deg, rgba(255, 255, 255, 0.3) -11.75%, rgba(255, 255, 255, 0) 108.53%);
          z-index: 9999;
        }

        .message-container {
          background-color: #ffffff;
          padding: 40px;
          border-radius: 5px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          position: relative;
        }

        .close-button {
          position: absolute;
          top: -20px;
          right: -20px;
          background: none;
          border: none;
          font-size: 16px;
          color: red;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default MessageBox;
