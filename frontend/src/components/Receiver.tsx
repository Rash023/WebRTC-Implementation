import { useEffect, useRef } from "react";

export const Receiver = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        const pc = new RTCPeerConnection();

        socket.onopen = () => {
            socket.send(JSON.stringify({
                type: 'receiver'
            }));
        };

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'offer') {
                pc.setRemoteDescription(new RTCSessionDescription(message.sdp))
                    .then(() => pc.createAnswer())
                    .then((answer) => {
                        pc.setLocalDescription(answer);
                        socket.send(JSON.stringify({
                            type: 'create-answer',
                            sdp: answer
                        }));
                    });
            } else if (message.type === 'add-ice-candidate') {
                if (message.candidate) {
                    pc.addIceCandidate(new RTCIceCandidate(message.candidate));
                }
            }
        };

        pc.ontrack = (event) => {
            if (videoRef.current) {
                videoRef.current.srcObject = event.streams[0];
                videoRef.current.play().catch((error) => {
                    console.error("Video play error:", error);
                });
            }
        };

        return () => {
            pc.close();
            socket.close();
        };
    }, []);

    return (
        <div>
            <h2>Receiver</h2>
            <video
                ref={videoRef}
                autoPlay
                
                style={{ width: "100%", maxHeight: "400px" }}
            />
        </div>
    );
};
