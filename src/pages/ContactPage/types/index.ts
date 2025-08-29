export interface IContactInfos {
  icon: string;
  title: string;
  descriptions: [
    {
      desc: string;
    },
    {
      desc: string;
    }
  ];
}

export interface IContactData {
  infos: IContactInfos[];
  location: {
    lat: number;
    lng: number;
  };
}
