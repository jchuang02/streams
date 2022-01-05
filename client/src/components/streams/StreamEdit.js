import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import { useNavigate, useParams } from "react-router-dom";

export default function StreamEdit() {
  let { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    dispatch(fetchStream(id));
    return () => {
      return;
    };
  }, [id, dispatch]);

  const onSubmit = (formValues) => {
    dispatch(editStream(id, formValues));
    navigate(-1);
  };

  return (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        initialValues={_.pick(stream, "title", "description")}
        onSubmit={onSubmit}
      />
    </div>
  );
}
