import type { ICustomer } from "@/entities/Customers";
import type { IOurService } from "@/entities/OurServices";
import type { IProject } from "@/entities/Projects";
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
  customer: {
    loading: boolean;
    error: string | null;
    data: ICustomer[];
  };

  project: {
    loading: boolean;
    error: string | null;
    data: IProject[];
  };
}
