import React from "react";
import Modal4 from "../../components/Pop-Zoom/PopUp4";
import { Cloth4 } from "../../components/js/Detail-Cloth";
import { SelectOption1 } from "../../components/SelectOption/SelectOption";

const WingtipPinBlack = () => {
  return (
    <SelectOption1
      title="T-Shirt Kids Nk Logo Pin Black  -"
      image="cloth-4"
      cloth={Cloth4}
      namaBaju="S123 KIDS NKLOGOPIN BLACK"
      namaBaju1="T-Shirt Kids Nk Logo Pin Black"
      modalComponent={Modal4}
    />
  );
};
export default WingtipPinBlack;
