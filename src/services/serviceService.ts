import { IService, IServiceSection } from "@/interfaces/supabase/service";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();
/**
 * Service containing all the functions related to services
 */
export const serviceService = () => {
    /**
     * Function to get a single service
     * @param serviceIdentidy
     * @returns
     */
    const getSingleService = async (serviceIdentidy: string): Promise<IService> => {
        const { data: serviceInformation, error } = await supabase
            .from('services')
            .select('*')
            .eq('service_identity', serviceIdentidy)
            .single();
        return serviceInformation as IService;
    }
    /**
     * Function to get all service sections
     * @param serviceId
     * @returns
     */
    const getServiceSections = async (serviceId: number): Promise<IServiceSection[]> => {
        const { data: serviceSections, error } = await supabase
            .from('service_sections')
            .select('*')
            .order('order', { ascending: true })
            .eq('service_id', serviceId);
        return serviceSections as IServiceSection[];
    };

    return {
        getSingleService,
        getServiceSections
    };
}