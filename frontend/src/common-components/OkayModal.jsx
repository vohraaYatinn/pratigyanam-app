





import React from "react";

import refer from "../data/thumbnails/refer.png";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { Button, Modal, Space, Toast, Divider } from 'antd-mobile'

const OkayModal = ({headingText, ButtonText}) => {
	return (
<Space direction='vertical' block>
  <Button
    block
    onClick={() =>
      Modal.alert({
        content: '人在天边月上明',
        onConfirm: () => {
          console.log('Confirmed')
        },
      })
    }
  >
    最简单的弹窗
  </Button>

</Space>
	);
};

export default OkayModal;
