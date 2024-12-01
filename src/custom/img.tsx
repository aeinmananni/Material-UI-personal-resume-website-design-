import { forwardRef, ImgHTMLAttributes } from "react";

type ImageProps = {} & ImgHTMLAttributes<HTMLImageElement>;

const Image = forwardRef<HTMLImageElement, ImageProps>(({ ...props }, ref) => {
  return (
    <figure>
      <img ref={ref} {...props} />
    </figure>
  );
});

export default Image;
