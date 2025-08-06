enum AppRoutes {
  Home = "Home",
  Services = "Services",
  Projects = "Projects",
  OurTeam = "OurTeam",
  Contacts = "Contacts",
  NotFound = "NotFound",
}

export const routePaths = {
  [AppRoutes.Home]: "/",
  [AppRoutes.Services]: "/services",
  [AppRoutes.Projects]: "/projects",
  [AppRoutes.OurTeam]: "/team",
  [AppRoutes.Contacts]: "/contacts",
  [AppRoutes.NotFound]: "*",
};
