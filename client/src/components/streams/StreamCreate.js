import React from "react";
import { useDispatch } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";
import { useNavigate } from "react-router-dom";

export default function StreamCreate() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onSubmit = (formValues) => {
    dispatch(createStream(formValues));
    navigate(-1);
  };

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
}
