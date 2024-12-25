# WebRTC Video Streaming with TypeScript and WebSocket

This project demonstrates a simple implementation of WebRTC using TypeScript and a WebSocket server. It includes steps for creating an offer, generating an answer, exchanging ICE candidates via STUN servers, and streaming video between peers.

## 📚 Features

- WebRTC Peer-to-Peer Video Streaming
- Signaling via WebSocket Server
- ICE Candidate Exchange
- Simple Offer/Answer SDP Exchange

## 🛠️ Tech Stack

- **TypeScript**
- **WebRTC API**
- **WebSocket Server**
- **STUN Server** (e.g., Google STUN Server: stun:stun.l.google.com:19302)

## 🚀 Setup and Installation

1. Clone the repository:
   

2. Install dependencies:
   npm install

3. Start WebSocket Server:
   npm run server

4. Start Frontend Application:
   npm run dev

5. Open the application in your browser:
   http://localhost:3000

## 📹 How It Works

1. Create Offer: One peer creates an SDP offer.
2. Send Offer via WebSocket: The offer is sent to the other peer through the signaling server.
3. Create Answer: The other peer responds with an SDP answer.
4. ICE Candidate Exchange: ICE candidates are shared via the WebSocket server.
5. Establish Connection: A peer-to-peer video connection is established.

## 📄 Code Overview

- src/server.ts: WebSocket server for signaling.
- src/client.ts: WebRTC client logic.
- src/index.html: UI for video streaming.

## 🌐 STUN/TURN Server Configuration

The project uses a public STUN server:
stun:stun.l.google.com:19302

You can configure your own TURN server if required.

✨
