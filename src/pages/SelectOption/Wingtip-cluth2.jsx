import React from "react";
import Modal2 from "../../components/Pop-Zoom/PopUp2";
import { Cloth2 } from "../../components/js/Detail-Cloth";
import { SelectOption1 } from "../../components/SelectOption/SelectOption";

const WingtipCluth1 = () => {
  return (
    <SelectOption1
      title="T-Shirt Kids Suicade Cluth Black  -"
      image="cloth-2"
      cloth={Cloth2}
      namaBaju="S123 KIDS SUICADE CLUTH BLACK"
      namaBaju1="T-Shirt Kids Suicade Cluth Black"
      modalComponent={Modal2}
    />
  );
};
export default WingtipCluth1;
