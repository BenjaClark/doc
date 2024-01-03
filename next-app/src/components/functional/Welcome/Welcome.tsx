import * as React from "react";

import Option from "@/components/layout/Option";

import { useModal } from "@/store/hooks/useModal";
import Box from "@/components/ui/Box";
import { ContentCell, ContentRow } from "@/components/layout/Content";
import MarkdownViewer from "@/components/ui/MarkdownViewer";

const Welcome = () => {
  const { showModal } = useModal();

  return (
    <Option>
      <ContentCell>
        <ContentRow>
          <Box name="Tablas"></Box>
          <Box name=""></Box>
        </ContentRow>
        <ContentRow>
          <Box name="InsertData"></Box>
          <Box name="BackEnd"></Box>
        </ContentRow>
      </ContentCell>
    </Option>
  );
};

export default Welcome;
