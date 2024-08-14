export interface ResourceItem {
    label: string;  
    value: string;  
  }


  export interface ResourceData {
    devkg: ResourceItem[];
    telegram_chats: ResourceItem[];
    telegram_channels: ResourceItem[];
    websites: ResourceItem[];
    facebook: ResourceItem[];
    youtube: ResourceItem[];
    github: ResourceItem[];
  }