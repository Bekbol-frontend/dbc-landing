import type { IOurService } from "@/entities/OurServices";
import type { IFooterData } from "@/widgets/Footer";

export interface IContext {
  footer: {
    loading: boolean;
    error: string | null;
    footerData: IFooterData | null;
  };
  services: {
    loading: boolean;
    error: string | null;
    data: IOurService[];
  };
}
