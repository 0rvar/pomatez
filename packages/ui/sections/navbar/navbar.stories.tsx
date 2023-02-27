import { Meta, StoryObj } from "@storybook/react";
import {
  CountdownTimerIcon,
  GearIcon,
  MixerHorizontalIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import { WindowDecorator } from "../../utils/story";
import Navbar, { NavLinkProps } from "./navbar";

const navLinks: NavLinkProps[] = [
  {
    icon: <Pencil2Icon />,
    label: "Tasks",
    to: "/tasks",
  },
  {
    icon: <MixerHorizontalIcon />,
    label: "Config",
    to: "/config",
  },
  {
    icon: <CountdownTimerIcon />,
    label: "Timer",
    to: "/timer",
    activeClassName: "active",
  },
  {
    icon: <GearIcon />,
    label: "Settings",
    to: "/settings",
  },
];

export default {
  title: "App/Sections/Navbar",
  component: Navbar,
  args: {
    links: navLinks,
  },
  argTypes: {
    appState: {
      options: [
        "stay-focused",
        "short-break",
        "long-break",
        "special-break",
      ],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
  render: (args) => (
    <WindowDecorator sx={{ height: "$16" }}>
      <Navbar {...args} />
    </WindowDecorator>
  ),
} as Meta<typeof Navbar>;

type Story = StoryObj<typeof Navbar>;

export const StayFocused: Story = {
  args: {
    appState: "stay-focused",
  },
};

export const ShortBreak: Story = {
  args: {
    appState: "short-break",
  },
};

export const LongBreak: Story = {
  args: {
    appState: "long-break",
  },
};

export const SpecialBreak: Story = {
  args: {
    appState: "special-break",
  },
};
