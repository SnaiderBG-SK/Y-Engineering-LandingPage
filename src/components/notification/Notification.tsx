import { FC, useEffect } from "react";
import { notification, type NotificationArgsProps } from 'antd';
type NotificationPlacement = NotificationArgsProps['placement'];

/**
 * Interface for NotificationProps
 */
interface NotificationProps {
    message: string;
    type : 'success' | 'error' | 'info' | 'warning';
    description?: string;
    placement?: NotificationPlacement;
    showNotification: boolean;
    setShowNotification: (showNotification: boolean) => void;
};
/**
 * Functional component that renders a notification
 * @param param0 
 * @returns 
 */
export const Notification: FC<NotificationProps> = ({ message, description, placement, setShowNotification, showNotification, type }) => {
    const [api, contextHolder] = notification.useNotification();
    /**
     * Function to open the notification
     * @param placement 
     */
    const openNotification = (placement: NotificationPlacement) => {
        switch (type) {
            case 'success':
                api.success({
                    message: message,
                    description: description,
                    placement: placement || 'topRight',
                    onClose: () => setShowNotification(false),
                });
                break;
            case 'error':
                api.error({
                    message: message,
                    description: description,
                    placement: placement || 'topRight',
                    onClose: () => setShowNotification(false),
                });
                break;
            }
    };
    /**
     * useEffect hook to show the notification
     */
    useEffect(() => {
        if (showNotification) openNotification(placement || 'topRight');
    }, [showNotification]);
    return (
        <>
            {contextHolder}
        </>
    );
};