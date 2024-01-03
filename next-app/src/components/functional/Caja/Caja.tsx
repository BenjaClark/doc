import * as React from "react";

import Option from "@/components/layout/Option";

import { useModal } from "@/store/hooks/useModal";
import MarkdownViewerWithFile from "@/components/ui/MarkdownViewerWithFile/MarkdownViewerWithFile";

const Caja = () => {
  const { showModal } = useModal();

  return (
    <Option>
      <>
        <MarkdownViewerWithFile />
      </>
    </Option>
  );
};

export default Caja;
