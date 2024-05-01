import type { Meta, StoryObj} from '@storybook/svelte';
import Layout from "./Layout.svelte"

const meta = {
	title: 'Layout',
	tags: ['autodocs'],
	component: Layout,
} satisfies Meta<Layout>;

export default meta;
type Story = StoryObj<typeof meta>

export const Standard: Story = {};

export const HiddenFooter: Story = {
	args: {
		hideFooter: true
	},
}

