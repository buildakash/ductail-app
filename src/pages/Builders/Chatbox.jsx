import React from "react";
import Layout from "../../layout/builders/Layout";
import ChatTile from "../../layout/builders/Chatbox/ChatTile";
import ChatBanner from "../../layout/builders/Chatbox/ChatBanner";

const Chatbox = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        {/* <h2 className="text-2xl font-semibold mb-6">Welcome to the Dashboard</h2> */}
        <div>
          <ChatBanner coverImageUrl="/assets/450.jpg" name="Chat" />
        </div>
        <div className="mt-5">
          <ChatTile />
        </div>
      </Layout>
    </div>
  );
};

export default Chatbox;
