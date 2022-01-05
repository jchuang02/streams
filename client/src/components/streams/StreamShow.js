import React, { useEffect, useRef } from "react";
import { fetchStream } from "../../actions";
import flv from "flv.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function StreamShow() {
  const videoEl = useRef(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  let player;
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    dispatch(fetchStream(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    buildPlayer();
    return () => {
      player.destroy();
    };
  });

  const buildPlayer = () => {
    if (player || !stream) {
      return;
    }
    player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    player.attachMediaElement(videoEl.current);
    player.load();
  };

  if (!stream) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <video ref={videoEl} style={{ width: "100%" }} controls />
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    );
  }
}
