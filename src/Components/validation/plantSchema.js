import * as yup from "yup";

export default yup.object().shape({
  plant_name: yup.string().required("name is required"),
  species: yup.string().required("Species is required"),
  h2o_Frequency: yup.string().required("Frequency is required"),
});
