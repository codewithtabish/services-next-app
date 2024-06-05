"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const UserButton = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger></DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Label />
          <DropdownMenu.Group>
            <DropdownMenu.Item></DropdownMenu.Item>
            <DropdownMenu.Item></DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Item></DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
