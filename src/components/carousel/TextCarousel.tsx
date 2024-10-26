import { Carousel } from "antd";

/**
 * Interface for the TextCarousel component
 */
interface TextCarouselProps {
    carouselMessages: string[];
};
/**
 * Functional component for the text carousel
 * @param TextCarouselProps 
 * @returns 
 */
export const TextCarousel: React.FC<TextCarouselProps> = ({
    carouselMessages,
}) => {
    return (
        <Carousel autoplay className="w-full" fade dots={false} autoplaySpeed={4000}>
            {
                carouselMessages.map((message, index) => (
                    <div key={index}>
                        <span className="text-gray-600 text-lg font-normal md:text-xl lg:text-2xl 2xl:text-3xl">{message}</span>
                    </div>
                ))
            }
        </Carousel>
    );
};