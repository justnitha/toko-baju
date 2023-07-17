import React from "react";
import Modal5 from "../../components/Pop-Zoom/PopUp5";
import { Cloth5 } from "../../components/js/Detail-Cloth";
import { SelectOption1 } from "../../components/SelectOption/SelectOption";

const WingtipFontWhite = () => {
  return(
    <SelectOption1
      title="T-Shirt Kids NK13 Font White -"
      image="cloth-5"
      cloth={Cloth5}
      namaBaju="S123 KIDS NK13FONT WHITE"
      namaBaju1="T-Shirt Kids NK13 Font White"
      modalComponent={Modal5} 
      />
  )
};
export default WingtipFontWhite;
