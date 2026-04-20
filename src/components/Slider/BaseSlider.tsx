import AvatarSlider from "./variants/AvatarSlider/AvatarSlider";
import ContentSlider from "./variants/ContentSlider/ContentSlider";
import GallerySlider from "./variants/GallerySlider/GallerySlider";

export type SliderType = "avatar" | "content" | "gallery";

interface BaseSliderProps {
  type: SliderType;
}

export function BaseSlider({ type }: BaseSliderProps) {
  const SliderComponent =
    type === "avatar" ? (
      <AvatarSlider />
    ) : type === "content" ? (
      <ContentSlider />
    ) : (
      <GallerySlider />
    );
  return SliderComponent;
}
