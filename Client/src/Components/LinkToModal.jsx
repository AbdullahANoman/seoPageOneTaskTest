import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import BookingModal from "./Modal";
import {
  updateCompletedCount,
  updateDoingCount,
  updateIncompleteCount,
  updateReviewCount,
  updateToDoCount,
} from "../api/increaseCount";
import { toast } from "react-toastify";

const LinkToModal = ({ linkedCount, id, type }) => {
  const [linkedC, setLinkedC] = useState(linkedCount);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const modalHandler = (attachments, id) => {
    console.log(attachments.length);
    setLinkedC(attachments?.length);
    const data = { linkedCount: attachments.length };

    if (type == "incomplete") {
      setLoading(true);
      updateIncompleteCount(id, data)
        .then((data) => {
          console.log(data);
          closeModal();
          setLoading(false);
          toast.success("Upload Successfully")
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else if (type == "todo") {
      setLoading(true);
      updateToDoCount(id, data)
        .then((data) => {
          console.log(data);
          closeModal();
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
        });
      closeModal();
    } else if (type == "doing") {
      updateDoingCount(id, data)
        .then((data) => {
          console.log(data);
          closeModal();
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else if (type == "review") {
      updateReviewCount(id, data)
        .then((data) => {
          console.log(data);
          closeModal();
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else if (type == "complete") {
      updateCompletedCount(id, data)
        .then((data) => {
          console.log(data);
          closeModal();
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      console.log("Nopman");
    }
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center text-sm gap-2 ">
      <button onClick={() => setIsOpen(true)}>
        <FaLink />
      </button>
      <p> {linkedC}</p>
      <BookingModal
        modalHandler={modalHandler}
        closeModal={closeModal}
        isOpen={isOpen}
        id={id}
        loading={loading}
      />
    </div>
  );
};

export default LinkToModal;
