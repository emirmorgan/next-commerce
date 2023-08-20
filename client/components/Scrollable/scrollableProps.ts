export interface ScrollableProps {
  children: React.ReactNode;
  dragging: boolean;
}

export const ScrollablePropsDefault: Required<ScrollableProps> = {
  children: [],
  dragging: true,
};
