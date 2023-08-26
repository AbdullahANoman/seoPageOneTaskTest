import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import axios from "axios";
const BookingModal = ({ modalHandler, closeModal, isOpen, id, loading }) => {
  const [attachments, setAttachments] = useState([]);

  const handleAttachmentChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setAttachments(selectedFiles);
  };
  // const handleFileUpload = async () => {
  //   try {
  //     const formData = new FormData();
  //     for (let i = 0; i < selectedFiles.length; i++) {
  //       formData.append("files", selectedFiles[i]);
  //     }

  //     await axios.post("https://seo-page-one-task.vercel.app//upload", formData);
  //     console.log("File uploaded successfully!");
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //   }
  // };

  const openNewWindow = () =>{
    window.open('http://localhost:5173/')
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-1000"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Review Info Before Reserve
                </Dialog.Title>

                <div>
                  <form
                    action="https://seo-page-one-task.vercel.app/upload"
                    method="post"
                    // onSubmit={openNewWindow}
                    enctype="multipart/form-data"
                  >
                    <input
                      type="file"
                      multiple
                      name="uploaded file"
                      onChange={handleAttachmentChange}
                      // className="hidden"
                    />
                    {attachments && (
                      <ul className="my-3 py-1 px-2 ">
                        {attachments.map((file, index) => (
                          <li key={index}>
                            {file.name} ({file.type})
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* <div onClick={handleAttachmentChange} className="bg-rose-500 text-white w-[100px] text-center  border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                    Upload
                  </div> */}

                    <hr className="mt-8 " />
                    <div className="flex mt-2 justify-around">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => modalHandler(attachments, id)}
                      >
                        <input
                          className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                          type="submit"
                          value="Upload"
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookingModal;
