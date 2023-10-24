export type ListProps = {
  name: string;
  img: string;
  component: string;
};

export type globType = () => Promise<{ default: React.ComponentType }>;
