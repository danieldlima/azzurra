import type { RenderBodyArgs } from 'gatsby';

export const onRenderBody = ({ setBodyAttributes }: RenderBodyArgs) => {
  setBodyAttributes({
    className: 'scroll-smooth'
  });
};
