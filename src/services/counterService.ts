import { ICounter } from "@/interfaces/supabase/counter";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

/**
 * Counter Service
 * @returns
 */
export const CounterService = () => {
    /**
     * Function to get counters
     * @returns Counter[]
     */
    const getCounters = async (section: string): Promise<ICounter[]> => {
        const { data: counters, error } = await supabase
            .from("counters")
            .select("*")
            // filter by section/page
            .eq("page", section)
        return counters!;
    };

    return {
        getCounters
    };
}