import React, { useState } from "react";
import {
    HiOutlineTrash,
    HiPencilAlt,
    HiOutlineStar,
    HiOutlineExclamationCircle,
} from "react-icons/hi";
import { IconButton } from "rsuite";
import { Button, Modal } from "flowbite-react";

export default function BinButton({ Book_ID, onRemove }) {
    const handleClick = () => {
        onRemove(Book_ID);
        setOpenModal(false);
    };

    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <IconButton
                icon={<HiOutlineTrash />}
                onClick={() => setOpenModal(true)}
            />
            <Modal
                show={openModal}
                size="md"
                onClose={() => setOpenModal(false)}
                popup
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this product?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={handleClick}>
                                {"Yes, I'm sure"}
                            </Button>
                            <Button
                                color="gray"
                                onClick={() => setOpenModal(false)}
                            >
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
