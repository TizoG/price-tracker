import { Breadcrumb } from "@chakra-ui/react";
import { LiaSlashSolid } from "react-icons/lia";
export const ComponentBreadcrumb = () => {
  return (
    <Breadcrumb.Root mt={4} pl={{ base: 10, md: 0 }}>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/frontend/src/pages/Home/Home">
            Home
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <LiaSlashSolid />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/frontend/src/pages/Home/Home">
            Dashboard
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
};
