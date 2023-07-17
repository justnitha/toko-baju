import React from "react";
import Modal from "../../components/Pop-Zoom/PopUp";
import { Cloth1 } from "../../components/js/Detail-Cloth";
import { SelectOption1 } from "../../components/SelectOption/SelectOption";

const WingTipSkull1 = () => {
  return (
    <SelectOption1
      title="T-Shirt Kids Wingtip Skull Black  -"
      image="cloth-1"
      cloth={Cloth1}
      namaBaju="S123 KIDS WINGTIP SKULL BLACK"
      namaBaju1="T-Shirt Kids Wingtip Skull Black"
      modalComponent={Modal}
    />
  );
};
export default WingTipSkull1;
