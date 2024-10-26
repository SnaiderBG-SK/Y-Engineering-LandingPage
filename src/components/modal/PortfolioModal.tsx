import { Modal } from "antd"
import PortfolioContactForm from "@/components/form/PortfolioContactForm"
import Link from "next/link";
/**
 * Interface for PortfolioModal
 */
interface PortfolioModalProps {
    open: boolean;
    setOpenModal: (value: boolean) => void;
}
/**
 * Functional component for PortfolioModal
 * @param {PortfolioModalProps} { open, setOpenModal }
 * @returns 
 */
const PortfolioModal: React.FC<PortfolioModalProps> = ({ open, setOpenModal }) => {
    return (
        <Modal
            open={open}
            closable={true}
            onCancel={() => setOpenModal(false)}
            className="custom-modal"
            footer={null}
            centered
        >
            {/* Modal Title */}
            <div className="w-full text-center">
                <span className="text-2xl font-bold text-white">{'Download our Portfolio'}</span>
            </div>
            {/* Modal Description */}
            <div className="w-full text-center mt-3">
                <span className="text-base font-semibold text-white">{'Leave your contact information so you can stay up to date with the latest from Y Engineering'}</span>
            </div>
            {/* Contact Form */}
            <div className="mt-5">
                <PortfolioContactForm setShowModal={setOpenModal} />
            </div>
            {/* Direct Download Message */}
            <div className="w-full text-center mt-3">
                <span className="text-base font-semibold text-white">
                    {'Or download our portfolio directly by clicking '}
                    <Link
                        href="/pdf/Y-Engineering-Portfolio-(2024).pdf"
                        className="underline"
                        download
                    >
                        {'here'}
                    </Link>
                </span>
            </div>
        </Modal>
    )
}

export default PortfolioModal