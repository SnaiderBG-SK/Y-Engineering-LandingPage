import Skeleton from 'antd/es/skeleton';
import Space from 'antd/es/space';
import { DotChartOutlined } from '@ant-design/icons';

/**
 * Functional Component for SkeletonPage - Loading pages
 * @returns 
 */
export const SkeletonPage: React.FC = () => {
    return (
        <>
            <Space>
                <Skeleton.Button active={true} size={'default'} shape={'round'} block={true} />
                <Skeleton.Avatar active={true} size={'default'} shape={'square'} />
                <Skeleton.Input active={true} size={'default'} />
            </Space>
            <br />
            <br />
            <Skeleton.Button active={true} size={'default'} shape={'round'} block={true} />
            <br />
            <br />
            <Skeleton.Input active={true} size={'default'} block={true} />
            <br />
            <br />
            <Space>
                <Skeleton.Image active={true} />
                <Skeleton.Node active={true}>
                    <DotChartOutlined style={{ fontSize: 40, color: '#bfbfbf' }} />
                </Skeleton.Node>
            </Space>
        </>
    )
}