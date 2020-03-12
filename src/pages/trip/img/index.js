const requireContext = require.context("./sales", false, /^\.\/.*\.(png|jpg|jpeg)$/);

const projectImgs = requireContext.keys().map(requireContext);

export default projectImgs;