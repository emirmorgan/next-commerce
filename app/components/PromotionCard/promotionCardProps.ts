export interface PromotionCardProps {
  brand: string;
  desc: string;
  src: string;
}

export const PromotionCardPropsDefault: Required<PromotionCardProps> = {
  brand: "",
  desc: "",
  src: "",
};
