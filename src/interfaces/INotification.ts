/**
 * Interface for Notification
 */
export interface NotificationProps {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    description?: string;
};