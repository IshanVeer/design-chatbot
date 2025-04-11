"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Chatbox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);

  const submitHandler = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      { sender: "bot", text: "Response from other side" },
    ]);

    setInput("");
  };
  return (
    <div className="flex my-3 flex-col gap-6">
      <div className="border p-4 rounded h-64 overflow-y-auto ">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${
              msg.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-md ${
                msg.sender === "user"
                  ? "bg-gray-950 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Input
          type="text"
          placeholder="Describe your design..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submitHandler()}
        />
        <Button disabled={!input.trim()} onClick={submitHandler}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chatbox;
