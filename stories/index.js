/**
 * Storybook list of stories
 *
 * order is reflected in storybook sidebar
 */

import './Introduction';
import './Playground/Playground';

// 1. Foundations
import '../src/Typography/docs/TypographyStory.js'; // 1.2 Typography
import '../src/Label/docs/index.story.js'; // 1.2 + Label
import './NewIcons'; // 1.4 Icons

import '../src/Loader/docs/index.story.js'; // 1.5 Loader
import '../src/LinearProgressBar/docs/index.story.js'; // 1.6 LinearProgressBar
import '../src/CircularProgressBar/docs/index.story.js'; // 1.7 LinearProgressBar
import './ScrollBar'; // 1.8 ScrollBar

// 2. Layout
import './PageLayout/index.story'; // 2.1 Page Layout
import '../src/Card/docs'; // 2.2 Card Layout
import '../src/EmptyState/docs/index.story'; // 2.4 EmptyState
import '../src/StatsWidget/docs/index.story'; // 2.7 StatsWidget
import '../src/AddItem/docs/index.story'; // 2.8 AddItem

// 3. Inputs
import './TextInput/index.story'; // 3.1. Text Input
import './TextArea/index.story'; // 3.2 Text Area
import '../src/RichTextArea/docs/index.story.js'; // 3.2b + RichTextArea
import './FieldWithSelectionComposite'; // 3.3 Field With Selection
import '../src/TimeInput/docs/index.story.js'; // 3.4 TimeInput
import '../src/DatePicker/docs/index.story.js'; // 3.6 DatePicker
import '../src/Range/docs'; // 3.7 Range
import '../src/MultiSelect/docs/index.story'; // 3.8 Tags
import '../src/MultiSelectComposite/docs'; // 3.8 + MultiSelectComposite
import '../src/Search/docs/index.story'; // 3.9 Search
import '../src/ImageViewer/docs/index.story'; // 3.10 ImageViewer
import '../src/FilePicker/docs/index.story'; // 3.10 + FilePicker

// 4. Selection
import '../src/Dropdown/docs/DropdownStory.js'; // 4.1 Dropdown
import '../src/AutoComplete/docs'; // 4.1 + AutoComplete
import '../src/AutoCompleteComposite/docs'; // 4.1 + AutoCompleteComposite
import '../src/InputWithOptions/docs'; // 4.1 + InputWithOptions
import '../src/MultiSelectCheckbox/docs/index.story.js'; // 4.1 + MultiSelectCheckbox
import '../src/Checkbox/docs/index.story.js'; // 4.2 Checkbox
import '../src/RadioGroup/docs/index.story.js'; // 4.3 RadioGroup
import '../src/ToggleSwitch/docs/index.story'; // 4.4 ToggleSwitch
import '../src/SegmentedToggle/docs/index.story'; // 4.5 SegmentedToggle
import '../src/Slider/docs/index.story'; // 4.7 Slider
import '../src/ColorInput/docs/index.story'; // 4.8 ColorInput

// 5. Buttons
import '../src/Button/docs/index.story.js'; // 5.1 Standard
import '../src/IconButton/docs/index.story'; // 5.2 Icon Button
import '../src/TextButton/docs/index.story'; // 5.3 Text Button
import '../src/CloseButton/docs/index.story.js'; // 5.4 Close Button

// 6. Navigation
import '../src/SideMenu/docs'; // 6.1 SideMenu
import '../src/Breadcrumbs/docs/index.story.js'; // 6.2 + Breadcrumbs
import '../src/Tabs/docs'; // 6.3 Tabs

// 7. Tooltips
import '../src/Tooltip/docs/Composite/CompositeStory'; // 7.1 Tooltip
import '../src/Popover/docs/index.story'; //7.2 Popover
import '../src/PopoverMenu/docs/index.story'; // 7.3 Popover Menu

// 8. Notification Bars
// 8.1 Standard, 8.2 Error, 8.3 Success, 8.4 Warning, 8.5 Premium
import '../src/Notification/docs/index.story.js';
import '../src/FloatingNotification/docs/index.story';
import '../src/FloatingHelper/docs/index.story.js'; // 8.6 FloatingHelper
import '../src/FloatingHelper/FloatingHelperContent/docs/index.story.js'; // 8.6 + FloatingHelper.Content
import '../src/SectionHelper/docs/index.story.js'; // 8.7 SectionHelper

// 9. Modals
import '../src/MessageBox/docs';
import '../src/Modal/docs';
import '../src/EndorseContentLayout/docs';

// 10. Tables
import '../src/DataTable/docs'; // 10.1 DataTable
import '../src/Table/docs/index.story'; // 10.1 Table
import '../src/TableToolbar/docs/ToolbarStory'; // 10.1 Table -> TableToolbar
import '../src/TableActionCell/docs/index.story.js'; // 10.1 Table -> TableActionCell

// 11. Pickers and Selectors
import '../src/DropdownLayout/docs'; // 11.1 DropdownLayout
import '../src/EditableSelector/docs/index.story'; // 11.2 EditableSelector
import '../src/ModalSelectorLayout/docs/index.story.js'; // 11.3 ModalSelectorLayout
import '../src/ColorPicker/docs/index.story.js'; // 11.5 Color Picker
import '../src/Calendar/docs/index.story'; // 11.5 Calendar
import '../src/CalendarPanel/docs/index.story'; // 11.6 CalendarPanel

// 12. Other
import '../src/Badge/docs/index.story'; // 12.1 Badge
import '../src/BadgeSelect/docs/index.story.js'; // 12.2 BadgeSelect
import '../src/CounterBadge/docs/index.story'; //12.3 CounterBadge
import '../src/FullTextView/docs/index.story.js'; //12.4 FullTextView
import '../src/Tag/docs/index.story'; // 12.5 Tag
import '../src/Avatar/docs/index.story'; // 12.6 Avatar
import '../src/Highlighter/docs/index.story.js'; // Highlighter

// Components API
import '../src/Box/docs/index.story.js';
import './components/Calendar/index.story';
import './components/CalendarPanel/index.story';
import '../src/CalendarPanelFooter/docs/index.story';
import './components/Card';
import '../src/CardGalleryItem/docs/index.story';
import '../src/Carousel/docs/index.story.js';
import '../src/Collapse/docs/index.story';
import './components/Dropdown/Dropdown.story.js';
import '../src/DropdownBase/docs/index.story';
import './components/EmptyState/EmptyState.story';
import '../src/FormField/docs/index.story.js';
import '../src/GenericModalLayout/docs/index.story.js';
import '../src/GoogleAddressInput/docs/index.story.js';
import './components/Grid';
import '../src/Heading/docs/index.story';
import '../src/Input/docs/index.story';
import '../src/InputArea/docs/index.story.js';
import '../src/Layout/docs/index.story.js';
import '../src/Layout/docs';
import './components/MultiSelect/index.story';
import './components/Page/PageExampleStories.js';
import './components/Page/index.story.js';
import './components/PageHeader/index.story.js';
import '../src/Proportion/docs/index.story.js';
import '../src/RichTextArea/docs/api.story';
import '../src/Skeleton/docs/index.story.js';
import '../src/Text/docs/index.story';
import '../src/Thumbnail/docs/index.story';

// Styling
import '../src/Typography/docs/TypographyClassesStory';

// WIP
import './WIP';
import '../src/DragAndDrop/docs/DragAndDrop.js';
import './Builders/BadgeSelectItemBuilder';
import './Builders/ContactItemBuilder';

// Tests
import '../src/Typography/docs/TypographyTestStories';
import '../src/Input/docs/InputTestStories';
import '../src/TimeInput/docs/testStory';
import './components/Page/PageTestStories.js'; // Tests/2. Layout/2.5 + Page/
import './components/Page/PageTestStoriesDeprecated.js'; // Tests/2. Layout/2.5 + Page/Deprecated
import './components/PageHeader/PageHeaderTestStories.js'; // Tests/2. Layout/2.5 + PageHeader/
import '../src/Button/docs/testButton'; // Tests/5. Button/5.1 Button
import '../src/IconButton/docs/testStory'; // Tests/5. Button/5.2 IconButton
import '../src/TextButton/docs/testStory'; // Tests/5. Button/5.3 TextButton
import '../src/CloseButton/docs/testStory'; // Tests/5. Button/5.4 CloseButton
import '../src/Calendar/docs/CalendarTestStory'; // Tests/3. Inputs/3.13 Calendar
import '../src/MultiSelect/docs/MultiSelectTestStory'; // Tests/3. Inputs/3.8 Tags
import '../src/PopoverMenu/docs/PopoverMenuRegressionTest.js'; // Tests/7.3. Popover Menu/
import '../src/Popover/docs/testStory';
import '../src/TableToolbar/docs/ToolbarTestStory'; // Tests/10. Table
import '../src/Tag/docs/TagTestStory'; // Tests/12. Other/12.5 Tag
import '../src/Avatar/docs/AvatarTestStory'; // Tests/12. Other/12.6 Avatar
import '../src/Box/docs/testStory';
import '../src/Thumbnail/docs/testStory';
import '../src/EditableSelector/docs/testStory';
import '../src/Slider/docs/testStory'; // 4.7 Slider
import '../src/StatsWidget/docs/testStory'; // 2.7 StatsWidget
import '../src/SegmentedToggle/docs/testStory'; // 4.5 SegmentedToggle
import '../src/FloatingNotification/docs/FloatingNotificationTestStory'; // 8.2 FloatingNotification
import '../src/FormField/docs/testStory';
import '../src/RichTextArea/docs/testStory';
import '../src/ColorInput/docs/testStory';

// The generated test component
import '../src/GeneratedTestComponent/docs/index.story';

// This import was added by the component generator
import '../src/RichTextInputArea/docs/index.story';

// This import was added by the component generator
import '../src/NoBorderInput/docs/index.story';
