// This file defines the short path imports for the package (ex: @skeletonlabs/skeleton/*)

// Types ---

export type { AutocompleteOption } from './components/Autocomplete/types.js';
export type { ConicStop } from './components/ConicGradient/types.js';
export type { DrawerSettings } from './utilities/Drawer/types.js';
export type { ModalSettings, ModalComponent } from './utilities/Modal/types.js';
export type { ToastSettings } from './utilities/Toast/types.js';
export type { TableSource } from './components/Table/types.js';
export type { PaginationSettings } from './components/Paginator/types.js';
export type { PopupSettings } from './utilities/Popup/types.js';

// This type alias is to identify CSS classes within component props, which enables Tailwind IntelliSense
export type CssClasses = string;
export type SvelteEvent<E extends Event = Event, T extends EventTarget = Element> = E & { currentTarget: EventTarget & T };

// Stores ---

export { storeHighlightJs } from './utilities/CodeBlock/stores.js';
export { storePopup } from './utilities/Popup/popup.js';
export { drawerStore } from './utilities/Drawer/stores.js';
export { modalStore } from './utilities/Modal/stores.js';
export { toastStore } from './utilities/Toast/stores.js';

// Utilities ---

// Data Table
export {
	// Types
	type DataTableModel,
	type DataTableOptions,
	// Utilities
	createDataTableStore,
	dataTableHandler,
	// Svelte Actions
	tableInteraction,
	tableA11y
} from './utilities/DataTable/DataTable.js';
// Lightswitch
export {
	// Stores
	modeOsPrefers,
	modeUserPrefers,
	modeCurrent,
	// Methods
	getModeOsPrefers,
	getModeUserPrefers,
	getModeAutoPrefers,
	setModeUserPrefers,
	setModeCurrent,
	setInitialClassState,
	autoModeWatcher
} from './utilities/LightSwitch/lightswitch.js';
// Local Storage Store
export { localStorageStore } from './utilities/LocalStorageStore/LocalStorageStore.js';
// Component Utilities
export { tableSourceMapper, tableSourceValues, tableMapperValues } from './components/Table/utils.js';

// Svelte Actions ---

export { clipboard } from './actions/Clipboard/clipboard.js';
export { filter } from './actions/Filters/filter.js';
export { focusTrap } from './actions/FocusTrap/focusTrap.js';
// Utility Actions
export { popup } from './utilities/Popup/popup.js';

// Svelte Components ---

export { default as Accordion } from './components/Accordion/Accordion.svelte';
export { default as AccordionItem } from './components/Accordion/AccordionItem.svelte';
export { default as AppBar } from './components/AppBar/AppBar.svelte';
export { default as AppRail } from './components/AppRail/AppRail.svelte';
export { default as AppRailTile } from './components/AppRail/AppRailTile.svelte';
export { default as AppRailAnchor } from './components/AppRail/AppRailAnchor.svelte';
export { default as AppShell } from './components/AppShell/AppShell.svelte';
export { default as Autocomplete } from './components/Autocomplete/Autocomplete.svelte';
export { default as Avatar } from './components/Avatar/Avatar.svelte';
export { default as ConicGradient } from './components/ConicGradient/ConicGradient.svelte';
export { default as FileButton } from './components/FileButton/FileButton.svelte';
export { default as FileDropzone } from './components/FileDropzone/FileDropzone.svelte';
export { default as InputChip } from './components/InputChip/InputChip.svelte';
export { default as ListBox } from './components/ListBox/ListBox.svelte';
export { default as ListBoxItem } from './components/ListBox/ListBoxItem.svelte';
export { default as Paginator } from './components/Paginator/Paginator.svelte';
export { default as ProgressBar } from './components/ProgressBar/ProgressBar.svelte';
export { default as ProgressRadial } from './components/ProgressRadial/ProgressRadial.svelte';
export { default as Ratings } from './components/Ratings/Ratings.svelte';
export { default as RadioGroup } from './components/Radio/RadioGroup.svelte';
export { default as RadioItem } from './components/Radio/RadioItem.svelte';
export { default as RangeSlider } from './components/RangeSlider/RangeSlider.svelte';
export { default as SlideToggle } from './components/SlideToggle/SlideToggle.svelte';
export { default as Stepper } from './components/Stepper/Stepper.svelte';
export { default as Step } from './components/Stepper/Step.svelte';
export { default as Table } from './components/Table/Table.svelte';
export { default as TabGroup } from './components/Tab/TabGroup.svelte';
export { default as Tab } from './components/Tab/Tab.svelte';
export { default as TabAnchor } from './components/Tab/TabAnchor.svelte';
export { default as TableOfContents } from './components/TableOfContents/TableOfContents.svelte';
// Utility Components
export { default as CodeBlock } from './utilities/CodeBlock/CodeBlock.svelte';
export { default as Modal } from './utilities/Modal/Modal.svelte';
export { default as Drawer } from './utilities/Drawer/Drawer.svelte';
export { default as LightSwitch } from './utilities/LightSwitch/LightSwitch.svelte';
export { default as Toast } from './utilities/Toast/Toast.svelte';
// Filter Components
export { default as Apollo } from './actions/Filters/svg-filters/Apollo.svelte';
export { default as BlueNight } from './actions/Filters/svg-filters/BlueNight.svelte';
export { default as Emerald } from './actions/Filters/svg-filters/Emerald.svelte';
export { default as GreenFall } from './actions/Filters/svg-filters/GreenFall.svelte';
export { default as Noir } from './actions/Filters/svg-filters/Noir.svelte';
export { default as NoirLight } from './actions/Filters/svg-filters/NoirLight.svelte';
export { default as Rustic } from './actions/Filters/svg-filters/Rustic.svelte';
export { default as Summer84 } from './actions/Filters/svg-filters/Summer84.svelte';
export { default as XPro } from './actions/Filters/svg-filters/XPro.svelte';
