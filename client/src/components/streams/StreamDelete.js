import React, { useEffect } from "react";
import Modal from "../Modal";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

export default function StreamDelete() {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [id, dispatch]);

  const renderActions = () => {
    return (
      <>
        <Link to="/" className="ui button">
          Cancel
        </Link>
        <button
          onClick={() => dispatch(deleteStream(id))}
          className="ui button negative"
        >
          Delete
        </button>
      </>
    );
  };

  const renderContent = () => {
    if (!stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent}
      actions={renderActions}
      onDismiss={() => navigate(-1)}
    />
  );
}
