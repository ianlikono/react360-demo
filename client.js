import { Location, ReactInstance, Surface } from "react-360-web";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options
  });

  // Create three roots: two flat panels on the left and the right, and a Location
  // to mount rendered models in 3D space
  // const location = new Location([0, -1, -2]);
  // r360.renderToLocation(
  //   r360.createRoot("spiderMan"),
  //   r360.getDefaultLocation(),
  //   location
  // );
  const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.6, 0);
  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.6, 0);
  r360.renderToSurface(r360.createRoot("TopPosts"), leftPanel);
  r360.renderToSurface(r360.createRoot("CurrentPost"), rightPanel);
  r360.renderToLocation(
    r360.createRoot("ModelView"),
    new Location([0, -2, -10])
  );

  r360.compositor.setBackground("./static_assets/panaroma.jpg");
}

window.React360 = { init };
