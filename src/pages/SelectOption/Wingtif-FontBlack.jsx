import React from "react";
import Modal6 from "../../components/Pop-Zoom/PopUp6";
import { Cloth6 } from "../../components/js/Detail-Cloth";
import { SelectOption1 } from "../../components/SelectOption/SelectOption";

const WingtipFontBlack = () => {
  return(
    <SelectOption1
      title="T-Shirt Kids NK13 Font Black -"
      image="cloth-6"
      cloth={Cloth6}
      namaBaju="S123 KIDS NK13FONT Black"
      namaBaju1="T-Shirt Kids NK13 Font Black"
      modalComponent={Modal6} 
      />
  );
};
export default WingtipFontBlack;
