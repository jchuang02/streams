import React, { useEffect } from "react";
import { fetchStream } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function StreamShow() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [id, dispatch]);

  return (
    <div>
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
}
