import { IReview } from "@/interfaces/supabase/review";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

/**
 * Review Service
 * @returns
 */
export const ReviewService = () => {
    /**
     * Function to get reviews
     * @returns Review[]
     */
    const getReviews = async (): Promise<IReview[]> => {
        const { data: reviews, error } = await supabase
            .from("reviews")
            .select("*");
        return reviews!;
    };

    return {
        getReviews
    };
}