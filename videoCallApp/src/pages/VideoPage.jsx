import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { APPID, SERVERSECRET } from "../constant";

function VideoPage() {
  const { id } = useParams();

  // const roomID = getUrlParams().get('roomID') || randomID(5);
  const roomID = id;
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = APPID;
    const serverSecret = SERVERSECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      platform.os.toString()
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };
  return <div className="h-screen" ref={myMeeting}></div>;
}

export default VideoPage;
