import React from "react";
import Modal7 from "../../components/Pop-Zoom/PopUp7";
import { Cloth7 } from "../../components/js/Detail-Cloth";
import { SelectOption1 } from "../../components/SelectOption/SelectOption";

const WingtipCrossWhite = () => {
  return (
    <div>
      <SelectOption1
        title="T-Shirt Kids Cross Font White -"
        image="cloth-7"
        cloth={Cloth7}
        namaBaju="S123 KIDS CROSSFONT WHITE"
        namaBaju1="T-Shirt Kids Cross Font White"
        bawah="dfkdjslfjlsdkfj"
        modalComponent={Modal7} 
      />
    </div>
  );
};
export default WingtipCrossWhite;
