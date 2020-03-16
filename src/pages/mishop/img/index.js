const requireContext = require.context("./", false, /^\.\/.*\.(png|jpg|jpeg|webp)$/);

const projectImgs = requireContext.keys().map(requireContext);

export default projectImgs;