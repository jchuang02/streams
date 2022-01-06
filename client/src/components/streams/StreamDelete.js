import React, { useEffect } from "react";
import Modal from "../Modal";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

export default function StreamDelete() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [id, dispatch]);

  const streamDelete = () => {
    dispatch(deleteStream(id));
    navigate("/");
  };

  const renderActions = () => {
    return (
      <>
        <Link to="/" className="ui button">
          Cancel
        </Link>
        <button onClick={() => streamDelete()} className="ui button negative">
          Delete
        </button>
      </>
    );
  };

  const renderContent = () => {
    if (!stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title: ${stream.title}`;
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={renderActions()}
    />
  );
}
