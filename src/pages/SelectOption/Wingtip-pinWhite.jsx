import React from "react";
import Modal3 from "../../components/Pop-Zoom/PopUp3";
import { Cloth3 } from "../../components/js/Detail-Cloth";
import { SelectOption1 } from "../../components/SelectOption/SelectOption";

const WingtipPinWhite = () => {
  return (
    <SelectOption1
      title="T-Shirt Kids Nk Logo Pin White -"
      image="cloth-3"
      cloth={Cloth3}
      namaBaju="S123 KIDS NKLOGOPIN WHITE"
      namaBaju1="T-Shirt Kids Nk Logo Pin White"
      modalComponent={Modal3}
    />
  );
};
export default WingtipPinWhite;
